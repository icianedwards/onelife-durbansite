using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OneLifeDurban.API.Models
{
    public class ChatBackAuthenticationRequestModel : GenericRequestModel
    {
        public string ChatBackGUID { get; set; }
    }
}
