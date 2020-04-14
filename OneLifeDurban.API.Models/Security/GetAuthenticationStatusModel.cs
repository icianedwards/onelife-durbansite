using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OneLifeDurban.API.Models
{
    public class GetAuthenticationStatusModel : GenericResultModel
    {
        public string FullName { get; set; }
        public string WindowsUser { get; set; }
    }
}
