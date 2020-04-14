using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OneLifeDurban.API.Models
{
    public class UserBankAccountRoleModel
    {
        public int SessionUserId { get; set; }
        public int OrganisationId { get; set; }
        public int BankAccountId { get; set; }
        public string BankAccountRole { get; set; }
        public bool HasAccessToAllBankAccounts { get; set; }
    }
}
