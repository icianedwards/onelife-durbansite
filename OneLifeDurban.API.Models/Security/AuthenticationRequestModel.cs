using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OneLifeDurban.API.Models
{
    public class AuthenticationRequestModel : GenericRequestModel
    {
        public string QRCodeGUID { get; set; }
        public string PINCode { get; set; }
        public string DeviceUUID { get; set; }
        public string DevicePlatform { get; set; }
        public string DeviceModel { get; set; }
        public string DeviceVersion { get; set; }
    }
}
