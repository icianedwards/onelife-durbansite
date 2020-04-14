using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OneLifeDurban.API.Models
{
    public class UserSettingsWriteRequestModel : GenericRequestModel
    {
        public bool UseMobileData { get; set; }
        public bool SendApprovalNotifications { get; set; }
    }
}
