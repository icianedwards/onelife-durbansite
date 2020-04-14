using OneLifeDurban.API.DataAccess;
using System;
using System.Collections.Generic;
using System.IO;

namespace OneLifeDurban.API.Logic
{
    public static class GeneralLogic
    {
        public static void WriteRequestLog(string ipAddress, string userAgent, string url, string queryString, int totalBytes,
            string httpMethod, string parameters, string userName, int userId, string userGUID, string environment)
        {
            try
            {
                using (var dm = new Entities(userName))
                {
                    dm.SYSLOGRequestHistories.Add(new SYSLOGRequestHistory()
                    {
                        IPAddress = ipAddress,
                        UserAgent = userAgent,
                        URL = url,
                        QueryString = queryString,
                        TotalBytes = totalBytes,
                        HTTPMethod = httpMethod,
                        FormParameters = parameters,
                        SystemUserGUID = (userGUID ?? ""),
                        EnvironmentValue = environment
                    });
                    dm.SaveChanges();
                }
            }
            catch (Exception err)
            {
                var e = err;
            }
        }

        public static string DateFieldToStr(object dt)
        {
            string ret = null;
            if (ReferenceEquals(dt, DBNull.Value))
            {
                ret = "";
            }
            else
            {
                ret = ((DateTime)dt).ToString("yyyy/MM/dd");
            }
            return ret;
        }


        //Excel Export Functions
        public static string GenerateExcelExport<T>(List<T> data, string sheetName, string folderName)
        {
            return GenerateExcelExport(data, sheetName, folderName, null, null);
        }
        public static string GenerateExcelExport<T>(List<T> data, string sheetName, string folderName, Dictionary<string, string> captions, List<string> captionsToTotal)
        {
            var fileName = Path.Combine(folderName, sheetName + DateTime.Now.Ticks.ToString() + ".xlsx");
            CreateExcelFile.CreateExcelDocument(data, fileName, sheetName, captions, captionsToTotal,
                null);
            return fileName;
        }
        public static string GenerateExcelExport<T>(List<T> data, string sheetName, string folderName,
            Dictionary<string, string> captions, List<string> captionsToTotal, string dateFormat, params string[] propertiesToExclude)
        {
            var fileName = Path.Combine(folderName, sheetName + DateTime.Now.Ticks.ToString() + ".xlsx");
            CreateExcelFile.CreateExcelDocument(data, fileName, sheetName, captions, captionsToTotal, dateFormat,
                propertiesToExclude);
            return fileName;
        }

    }
}
