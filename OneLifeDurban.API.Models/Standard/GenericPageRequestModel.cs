namespace OneLifeDurban.API.Models
{
    public class GenericPageRequestModel : GenericRequestModel
    {
        public int PageSize { get; set; }
        public int PageNumber { get; set; }
        public string OrderField { get; set; }
        public string OrderDirection { get; set; }
        public string SearchCriteria { get; set; }
    }
}
