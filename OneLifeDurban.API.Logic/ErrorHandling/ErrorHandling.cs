using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OneLifeDurban.API.Logic
{
    public class ErrorHandling
    {
        public static void ThrowValidationError(string message)
        {
            throw new SystemValidationException(message);
        }

        public static ErrorResultObject HandleError(Exception error)
        {
            ErrorResultObject result = new ErrorResultObject() { ErrorMessage = "", IsValidationError = false };
            var entityErrors = "";
            var detailedError = "";
            if (error.GetType().ToString().Contains("SystemValidationException"))
            //if (error.Message.Contains(validationErrorCode))
            {
                result.IsValidationError = true;
                result.ErrorMessage = error.Message;
            }
            else
            {
                result.IsValidationError = false;
                //TO DO: Log error and return reference
                string errorCode = DateTime.Now.Ticks.ToString();
                
                if (error.GetType().ToString().Contains("DbEntityValidationException"))
                {
                    var err = error as System.Data.Entity.Validation.DbEntityValidationException;                    
                    foreach (var item in err.EntityValidationErrors)
                    {
                        foreach (var dberr in item.ValidationErrors)
                        {
                            entityErrors += String.Format("{0}: {1}{2}", dberr.PropertyName, dberr.ErrorMessage, Environment.NewLine);
                        }
                    }
                    detailedError = entityErrors + error.ToString();
                }
                else
                {
                    result.ErrorMessage = error.ToString();
                    detailedError = error.ToString();
                }

                //if (ApplicationSettings.IsDebugMode())
                if ("debug" == "debug")
                {
                    if(entityErrors != "")
                    {
                        result.ErrorMessage = entityErrors + error.ToString();
                    }
                }
                else
                {
                    result.ErrorMessage = String.Format("An internal system error has occurred. Error Reference: {0}", errorCode);
                }
            }

            result.ErrorReference = LogError(error, detailedError);

            return result;
        }

        public static string LogError(Exception error, string detailedError)
        {
            string result = ""; // The error reference

            //TO DO - Log error in database
            //TO DO - send error emails

            string body = "";
            try
            {
                if (detailedError == "")
                    detailedError = error.ToString();
                body +=
                    "<html ><HEAD><style>BODY {font-family: 'Arial';font-weight: normal;font-size: 0.8em; background-color:white; color:black} </style></head>";
                body += "<body>";
                body += "<b>Error on Sasol Declaration and Compliance Confirmation System. ";
                body += error.Message +":<br/> " + detailedError + "<br/><br/>";
                body += "</body></html>";
            }
            catch (Exception ex)
            {
                body = "Error creating error email" + "<br/>" + ex.Message + "<br />" + error.ToString();
            }

            //EmailComms.SendEmailMessage("System", 1, GeneralLogic.GetDeveloperEmailAddress(), "SDS System Error", 
            //    body, 1);

            return result;
        }        

        public static string LogError(string body)
        {
            string result = ""; // The error reference

            //TO DO - Log error in database
            //TO DO - send error emails

            //EmailComms.SendEmailMessage("System", 1, GeneralLogic.GetDeveloperEmailAddress(), "SDS System Error", 
            //    body, 1);

            return result;
        }
    }
} 