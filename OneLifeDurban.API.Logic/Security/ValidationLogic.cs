using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OneLifeDurban.API.Logic
{
    public class ValidationLogic
    {
        public static bool IsValidEmail(string value)
        {
            string testValue = value.Trim();

            if (String.IsNullOrEmpty(testValue))
            {
                return false;
            }

            if (!testValue.Contains("@"))
            {
                return false;
            }

            if (!testValue.Contains("."))
            {
                return false;
            }

            try
            {
                var address = new System.Net.Mail.MailAddress(testValue);
                return address.Address == testValue;
            }
            catch
            {
                return false;
            } 
        }
    }
}
