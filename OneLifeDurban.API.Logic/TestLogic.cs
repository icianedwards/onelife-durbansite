using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OneLifeDurban.API.DataAccess;

namespace OneLifeDurban.API.Logic
{
    public class TestLogic
    {
        public static string TestFunction()
        {
            string result = "OK";
            try
            {
                using (var dm = new Entities(null))
                {

                }
            }
            catch(Exception error)
            {
                result = error.Message;
            }
            return result;
        }




    }
}
