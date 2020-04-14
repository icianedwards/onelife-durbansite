using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OneLifeDurban.API.Models
{
    public class GenericResultModel
    {
        public bool HasError { get; set; }
        public bool IsValidationError { get; set; }
        public bool IsAuthenticationError { get; set; }
        public string Feedback { get; set; }
        public string MaintenanceMessage { get; set; }
        public bool MaintenanceMode { get; set; }
        public string ErrorReference { get; set; }

        public string FullName { get; set; }
        public string WindowsUser { get; set; }
        public string AuthenticationMode { get; set; }

        public bool HasComplianceAccess { get; set; }
    }
}
