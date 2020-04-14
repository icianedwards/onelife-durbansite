using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OneLifeDurban.API.Models
{
    public class NavigationSubItemModel
    {
        public string ItemTitle { get; set; }
        public string RoutePath { get; set; }
        public bool ShowBadge { get; set; }
        public int BadgeCount { get; set; }
    }
}
