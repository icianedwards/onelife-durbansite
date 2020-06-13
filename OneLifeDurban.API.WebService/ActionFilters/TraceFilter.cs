using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using System.Globalization;
using System.Text;
using OneLifeDurban.API.Logic;
using OneLifeDurban.API.Models;
using System.Web.Script.Serialization;

namespace OneLifeDurban.API.WebService.ActionFilters
{
    [AttributeUsage(AttributeTargets.All, Inherited = false, AllowMultiple = false)]
    public sealed class TraceFilter : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            try
            {
                string IPAddress = filterContext.HttpContext.Request.UserHostAddress;
                string userAgent = filterContext.HttpContext.Request.UserAgent;
                string url = filterContext.HttpContext.Request.Url.AbsoluteUri;
                string queryString = filterContext.HttpContext.Request.QueryString.ToString();
                string httpMethod = filterContext.HttpContext.Request.HttpMethod;
                int totalBytes = filterContext.HttpContext.Request.TotalBytes;
                string parameter = new JavaScriptSerializer().Serialize(filterContext.ActionParameters).ToString();
                string userName = "";
                int userId = 0;
                string userGUID = "";
                string environment = "";

                var prmList = filterContext.ActionParameters;
                foreach (var prm in prmList)
                {
                    var prmObj = prm.Value as GenericRequestModel;
                    if (prmObj != null)
                    {
                        userName = prmObj.SessionUserName;
                        userId = prmObj.SessionUserId;
                        environment = prmObj.Environment;
                    }
                }
                GeneralLogic.WriteRequestLog(IPAddress, userAgent, url, queryString, totalBytes, httpMethod, parameter, 
                    userName, userId, userGUID, environment);
            }
            catch
            {
                throw;
            }
        }

        public override void OnResultExecuted(ResultExecutedContext filterContext)
        {
            var result = filterContext.Result as JsonNetResult;
            if (result != null)
            {
                var res = result.Data as GenericResultModel;
            }
            base.OnResultExecuted(filterContext);
        }
    }
}