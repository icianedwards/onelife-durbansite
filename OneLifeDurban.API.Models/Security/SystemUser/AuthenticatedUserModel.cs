using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OneLifeDurban.API.Models
{
    public class AuthenticatedUserModel : GenericResultModel
    {
        public int UserId { get; set; }
        public int EmployeeId { get; set; }
        public int CurrentDeclarationReportingCycleId { get; set; }
        public int EmployeeDeclarationId { get; set; }
        public int? CurrentConfirmationReportingCycleId { get; set; }
        public int? EmployeeConfirmationId { get; set; }
        public List<string> UserRoles { get; set; }
        public List<int> ComplianceOfficerBusinessUnitIds { get; set; }
        public List<int> EthicsOfficerBusinessUnitIds { get; set; }
        public string LoginUserName { get; set; }
        public string AuthenticatedLoginUserName { get; set; }
        public string AuthenticationMode { get; set; }
        public string SDSLoginCode { get; set; }
    }
}
