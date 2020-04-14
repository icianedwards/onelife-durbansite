using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OneLifeDurban.API.Models
{
    public class GenericLookupItemResultModel
    {
        public int ItemMasterId { get; set; }
        public int ItemId { get; set; }
        public string ItemKey { get; set; }
        public string ItemDescription { get; set; }

        public override string ToString()
        {
            return ItemDescription;
        }

        public GenericLookupItemResultModel()
        { }
        public GenericLookupItemResultModel(int itemId, string itemDescription)
        {
            ItemId = itemId;
            ItemDescription = itemDescription;
        }

        public GenericLookupItemResultModel(string itemKey, string itemDescription)
        {
            ItemKey = itemKey;
            ItemDescription = itemDescription;
        }
    }
}
