using OneLifeDurban.API.DataAccess;
using OneLifeDurban.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace OneLifeDurban.API.Logic
{
    public class SystemUserLogic
    {
        public static string GetUserRole(int userId)
        {
            return "Developer";
        }

        public static string GetUserName(int userId)
        {
            if (userId == 0)
            {
                return "";
            }
            return "System";
        }

        public static int GetUserIDFromHeaderToken(string authenticationToken, string deviceUUID)
        {
            return 0;
        }

        public static bool UserHasAccessToLocation(AuthenticatedUserModel user, string[] roles)
        {
            if (user == null)
            {
                return false;
            }
            return true;
        }

        public static int GetEmployeeIdFromUserId(int userId)
        {
            return 0;
        }
    }
}
