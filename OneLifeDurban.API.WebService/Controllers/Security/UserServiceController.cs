using System;
using System.Web.Http;
using System.Web.Mvc;
using OneLifeDurban.API.Logic;
using OneLifeDurban.API.Logic.Security;
using OneLifeDurban.API.Models;
using OneLifeDurban.API.WebService.ActionFilters;

namespace OneLifeDurban.API.WebService.Controllers
{
    [System.Web.Mvc.RoutePrefix("UserService")]
    public class UserServiceController : Controller
    {
        [AuthenticationFilter(IsOpenMethod = true)]
        [System.Web.Mvc.Route("CheckAuth")]
        public JsonResult CheckAuthentication(GenericRequestModel request)
        {
            return new JsonNetResult(new GenericResultModel(), JsonRequestBehavior.DenyGet);
        }
    }
}