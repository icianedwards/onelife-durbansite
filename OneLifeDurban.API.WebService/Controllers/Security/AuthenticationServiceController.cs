using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using OneLifeDurban.API.Models;
using OneLifeDurban.API.Logic;
using OneLifeDurban.API.WebService.ActionFilters;

namespace OneLifeDurban.API.WebService.Controllers
{
    public class AuthenticationServiceController : Controller
    {
        [AuthenticationFilter(IsOpenMethod = true)]
        public JsonResult TestAPIAuthentication(GenericRequestModel request)
        {
            return Json(request, JsonRequestBehavior.DenyGet);
        }

        [AuthenticationFilter(IsOpenMethod = true)]
        public JsonResult GetAuthenticationStatus(GenericRequestModel request)
        {
            GenericResultModel a = new GenericResultModel()
            {
                ErrorReference = "",
                Feedback = "",
                HasError = false,
                IsAuthenticationError = false,
                IsValidationError = false,
                MaintenanceMessage = "",
                MaintenanceMode = false,
                FullName = request.SessionUserName
            };
            return Json(a, JsonRequestBehavior.DenyGet);
        }
    }
}