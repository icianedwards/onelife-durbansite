using System;
using System.Web;
using System.Web.Mvc;
using OneLifeDurban.API.Logic;
using OneLifeDurban.API.Logic.Security;
using OneLifeDurban.API.Models;
using OneLifeDurban.API.WebService.ActionFilters;

namespace OneLifeDurban.API.WebService.Controllers
{
    [AuthenticationFilter(IsOpenMethod = true)]
    [RoutePrefix("SDCSGeneralService")]
    public class SDCSGeneralController : Controller
    {
    }
}