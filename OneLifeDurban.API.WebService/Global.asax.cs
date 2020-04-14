using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using OneLifeDurban.API.Models;
using OneLifeDurban.API.Logic;
using Newtonsoft.Json;
using System.Collections.Specialized;

namespace OneLifeDurban.API.WebService
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
        }
          
        protected void Application_Error(object sender, EventArgs e)
        {
            Exception exception = Server.GetLastError();
            if (exception != null)
            {
                string errorMessage = exception.Message;
                Server.ClearError();
                Response.Clear();
                if (HttpContext.Current != null)
                {
                    if (HttpContext.Current.Session != null)
                    {
                        if (!errorMessage.Contains("after HTTP headers have been sent"))
                        {
                            var strErr = writeApplicationError(exception.ToString());
                            ErrorHandling.LogError(strErr);

                            GenericResultModel result = new GenericResultModel() { MaintenanceMessage = "", MaintenanceMode = false };
                            result.HasError = true;
                            result.IsValidationError = false;
                            result.Feedback = errorMessage; 
                            Response.ContentType = "application/json; charset=utf-8";
                            Response.Write(JsonConvert.SerializeObject(result));
                            Response.End();
                        }
                    }
                }
            }
        }

        protected void Application_BeginRequest()
        {
            if (!Request.Url.AbsoluteUri.Contains("localhost"))
            {
                Response.AddHeader("X-Frame-Options", "SAMEORIGIN");
            }
            if (Request.Headers.AllKeys.Contains("Origin") && Request.HttpMethod == "OPTIONS")
            {
                Response.Flush();
            }
        }

        private string writeApplicationError(string err)
        {
            string body = "";
            try
            {
                body +=
                    "<html ><HEAD><style>BODY {font-family: 'Arial';font-weight: normal;font-size: 0.8em; background-color:white; color:black} </style></head>";
                body += "<body>";
                if (System.Web.HttpContext.Current != null)
                {
                    body += "<b>Error on " + Request.ServerVariables["SERVER_NAME"] + " in " + Request.Path + " from " +
                            Request.ServerVariables["REMOTE_HOST"] + "</b><br/><br/>";
                }
                body += "The error description is as follows : " + err + "<br/><br/>";

                if (System.Web.HttpContext.Current != null)
                {
                    body += BuildEmailBody();
                }
                body += "</body></html>";
            }
            catch (Exception ex)
            {
                body = "Error creating error email" + "<br/>" + ex.Message + "<br />" + err;
            }

            return body;
        }

        private string BuildEmailBody()
        {
            string sBody = "";

            sBody += getKeys("Form Variables", Request.Form);
            sBody += getKeys("QueryString Variables", Request.QueryString);
            if (HttpContext.Current.Session != null)
            {
                try
                {
                    sBody += getSessionKeys("Session Variables", Session.Keys);
                }
                catch (Exception ex)
                {
                    if (!ex.Message.Contains("Session"))
                        throw ex;
                }
            }
            sBody += getKeys("Application Variables", Request.ServerVariables);
            return sBody;
        }

        private string getSessionKeys(string heading, NameObjectCollectionBase.KeysCollection keyObj)
        {
            string o = "";
            o += "<table border='0' cellspacing='0' style='font-face:arial;'>";
            o += "<tr><td colspan='2'>" + heading + "</td></tr>";
            foreach (string key in keyObj)
            {
                o += "<tr><td style='font-face:arial;'>" + key + "</td><td style='font-face:arial;'>" + Session[key] + "</td></tr>";
            }
            o += "</table><br/><br/>";
            return o;
        }

        private string getKeys(string heading, NameValueCollection keyObj)
        {
            string o = "";
            o += "<table border='0' cellspacing='0' style='font-face:arial;'>";
            o += "<tr><td colspan='2'>" + heading + "</td></tr>";
            foreach (string s in keyObj.AllKeys)
            {
                o += "<tr><td style='font-face:arial;'>" + s + "</td><td style='font-face:arial;'>" + keyObj[s] + "</td></tr>";
            }
            o += "</table><br/><br/>";
            return o;
        }
    }
}
