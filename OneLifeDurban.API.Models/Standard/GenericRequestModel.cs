using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OneLifeDurban.API.Models
{
    public class GenericRequestModel
    {
        public int SessionUserId { get; set; }
        public string SessionUserName { get; set; }
        public string RootWebFolder { get; set; }
        public string RootAPIURL { get; set; }
        public string DeviceIdentifier { get; set; }
        public List<string> UserRoles { get; set; }
        public string Environment { get; set; }
    }
}
