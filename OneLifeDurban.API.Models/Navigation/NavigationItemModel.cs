using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OneLifeDurban.API.Models
{
    public class NavigationItemModel
    {
        public string ItemTitle { get; set; }
        public string RoutePath{ get; set; }
        public bool IsParent { get; set; }
        public List<NavigationItemModel> ChildItems { get; set; }
        public bool ShowBadge { get; set; }
        public int BadgeCount { get; set; }
        public bool ShowHighlight { get; set; }
        public bool beginGroup { get; set; }

        public NavigationItemModel()
        {
            ChildItems = new List<NavigationItemModel>();
        }
    }
}
