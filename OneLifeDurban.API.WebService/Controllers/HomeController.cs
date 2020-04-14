using System.IO;
using System.Web.Mvc;

namespace OneLifeDurban.API.WebService.Controllers
{
    [RoutePrefix("HomeService")]
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return Content("SASOL Declaration and Compliance Service");
        }

        public ActionResult ReportTest(string test)
        {
            string tValue = "nothing";
            if (test != null)
            {
                tValue = test;
            }
            Session["ReportData"] = tValue;
            return Redirect("~/ReportControls/ReportRenderer.aspx");
        }

        [HttpGet]
        [Route("DownloadFile")]
        public ActionResult DownloadFile(string fileIdentifier)
        {
            var folder = System.Configuration.ConfigurationManager.AppSettings["MediaFolder"];
            var file = Path.Combine(folder, $"{fileIdentifier}.mp4");
            byte[] filedata = System.IO.File.ReadAllBytes(file);
            string contentType = $"attachment; filename={fileIdentifier}.mp4";
            var filename = System.IO.Path.GetFileName(file);
            var cd = new System.Net.Mime.ContentDisposition
            {
                FileName = filename,
                Inline = true
            };
            //System.IO.File.Delete(decryptedFileName);
            Response.AppendHeader("Content-Disposition", cd.ToString());
            return File(filedata, contentType);
        }

    }
}