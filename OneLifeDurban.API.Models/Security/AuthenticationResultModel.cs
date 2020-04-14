using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OneLifeDurban.API.Models
{
    public class AuthenticationResultModel : GenericResultModel
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string AuthenticationToken { get; set; }
    }
}
