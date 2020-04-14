using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using OneLifeDurban.API.WebService.ActionFilters;
using OneLifeDurban.API.Models;
using OneLifeDurban.API.Logic;

namespace OneLifeDurban.API.WebService.Controllers.Security
{
    [AuthenticationFilter(IsOpenMethod = true)]
    public class NavigationServiceController : Controller
    {
        public JsonResult GetUserNavigationStructure(GenericRequestModel request)
        {
            return Json(NavigationLogic.GetUserNavigationStructure(request), JsonRequestBehavior.DenyGet);
        }
    }
}