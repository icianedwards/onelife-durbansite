using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OneLifeDurban.API.Models
{
    public class EmployeeAttachmentFileUploadModelRequest : GenericRequestModel
    {
        public string DeclarationType { get; set; }
        public string Description { get; set; }
        public string EmployeeType { get; set; }
        public string URLLink { get; set; }
    }
}
