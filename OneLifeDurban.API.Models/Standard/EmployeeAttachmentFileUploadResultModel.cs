using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OneLifeDurban.API.Models
{
    public class EmployeeAttachmentFileUploadResultModel : GenericResultModel
    {
        public int EmployeeAttachmentId { get; set; }
        public string FileName { get; set; }
        public string FullFilePathWithName { get; set; }
    }
}
