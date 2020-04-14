using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OneLifeDurban.API.Models
{
    public class NavigationStructureResultModel : GenericResultModel
    {
        public List<NavigationItemModel> DeclarationsNavigation { get; set; }
        public List<NavigationItemModel> ComplianceNavigation { get; set; }
    }
}
