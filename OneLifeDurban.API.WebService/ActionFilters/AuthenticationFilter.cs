using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Diagnostics;
using System.Web.Mvc;
using System.Web.Routing;
using OneLifeDurban.API.Models;
using OneLifeDurban.API.Logic;
using System.Configuration;
using System.Web.Helpers;
using OneLifeDurban.API.DataAccess;

namespace OneLifeDurban.API.WebService.ActionFilters
{
    public class AuthenticationFilter : ActionFilterAttribute
    {
        public string[] Roles { get; set; }
        private bool isOpenMethod = false;
        public bool IsOpenMethod
        {
            get
            {
                return isOpenMethod;
            }
            set
            {
                isOpenMethod = value;
            }
        }
        

        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            string authenticationTokenHeaderIndex = "authenticationToken";
            string deviceUUIDHeaderIndex = "deviceUUID";
            string environmentHeaderIndex = "environment";

            bool isAjax = true;
             
            if (!isAjax)
            {
               
            }
            else
            {
                string authenticationToken = "";
                string deviceUUID = "";
                string urlBit = "";
                string environment = "MobileApp";
                if (HttpContext.Current.Request.HttpMethod == "GET")
                {
                    environment = "WebApp";
                }
                string declarationsCycleMode = "current";
                string feedBackMessage = "Invalid User Access.";
                bool isValid = true;

                string usercode = "Unknown";
                string username = "Unknown";

                try
                {
                    urlBit = (filterContext.RouteData.Route as System.Web.Routing.Route).Url;
                    if (HttpContext.Current.Request.Headers[authenticationTokenHeaderIndex] != null)
                    {
                        authenticationToken = HttpContext.Current.Request.Headers[authenticationTokenHeaderIndex].ToString();
                    }
                    if (HttpContext.Current.Request.Headers[deviceUUIDHeaderIndex] != null)
                    {
                        deviceUUID = HttpContext.Current.Request.Headers[deviceUUIDHeaderIndex].ToString();
                    }
                    if (HttpContext.Current.Request.Headers[environmentHeaderIndex] != null)
                    {
                        environment = HttpContext.Current.Request.Headers[environmentHeaderIndex].ToString();
                    }
                    if ((authenticationToken.Trim() == "" || deviceUUID.Trim() == "") && (environment == "MobileApp"))
                    {
                        isValid = false;
                        feedBackMessage = "Invalid User Access.";
                    }
                    if (isValid)
                    {
                        AuthenticatedUserModel user = null;
                        
                        if (user == null)
                        {
                            isValid = true;
                        }
                        else
                        {
                            var prmList = filterContext.ActionParameters;
                            foreach (var prm in prmList)
                            {
                                var prmObj = prm.Value as GenericRequestModel;
                                if (prmObj != null)
                                {
                                    usercode = user.LoginUserName;
                                    username = user.FullName;

                                    prmObj.SessionUserName = user.FullName;
                                    prmObj.SessionUserId = user.UserId;
                                    prmObj.DeviceIdentifier = deviceUUID;
                                    prmObj.RootWebFolder = HttpContext.Current.Server.MapPath("~");
                                    prmObj.RootAPIURL = HttpContext.Current.Request.Url.AbsoluteUri.Replace(
                                        HttpContext.Current.Request.RawUrl, "");
                                    if (!prmObj.RootAPIURL.EndsWith("/"))
                                    {
                                        prmObj.RootAPIURL += "/";
                                    }
                                    if (prmObj.RootAPIURL.Contains("localhost"))
                                    { }
                                    else if (prmObj.RootAPIURL.Contains("testza"))
                                    { }
                                    else
                                    { 
                                        prmObj.RootAPIURL += "api";
                                    }

                                    prmObj.Environment = environment;
                                }
                            }
                            if (IsOpenMethod)
                            {
                                isValid = IsOpenMethod;
                            }
                            else
                            {
                                isValid = SystemUserLogic.UserHasAccessToLocation(user, Roles);
                            }
                        }
                    }
                }
                catch (Exception error)
                {
                    isValid = false;
                    feedBackMessage = error.ToString();
                }

                if (!isValid)
                {
                    GenericResultModel result = new GenericResultModel() { HasError = true, Feedback = feedBackMessage, IsValidationError = false,
                        IsAuthenticationError = true, FullName = username, WindowsUser = usercode  };
                    filterContext.Result = new JsonResult
                    {
                        Data = result , JsonRequestBehavior = JsonRequestBehavior.AllowGet
                    };
                }
                else
                {
                    base.OnActionExecuting(filterContext);
                } 
            }
        }
    }
}