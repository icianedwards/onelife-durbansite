using System;
using System.Configuration;
using System.Web.Mvc;
using OneLifeDurban.API.Logic;
using OneLifeDurban.API.Logic.Security;
using OneLifeDurban.API.Models;
using OneLifeDurban.API.WebService.ActionFilters;

namespace OneLifeDurban.API.WebService.Controllers.DevelopmentTesting
{
    [AuthenticationFilter(Roles = new string[] { "Developers" })]
    [RoutePrefix("DevelopmentTestingService")]
    public class DevelopmentTestingController : Controller
    {

    }
}