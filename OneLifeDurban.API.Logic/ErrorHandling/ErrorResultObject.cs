using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OneLifeDurban.API.Logic
{
    public class ErrorResultObject
    {
        public string ErrorMessage { get; set; }
        public bool IsValidationError { get; set; }
        public string ErrorReference { get; set; }
    }
}
