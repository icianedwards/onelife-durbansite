using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Security;
using System.Security.Cryptography;
using System.IO;
using System.Configuration;
using System.Runtime.InteropServices;

namespace Deloitte.SDS.API.Logic
{
    public class EncryptionLogic
    {

        public static string AES256Encrypt(string iValue, SecureString appKey, SecureString salt, 
            SecureString initialVector)
        {
            SecureString Password = appKey;
            string HashAlgorithm = "SHA1";
            int PasswordIterations = 10000;
            int KeySize = 256;
            byte[] InitialVectorBytes = ToByteArray(initialVector);
            byte[] SaltValueBytes = ToByteArray(salt);
            byte[] PlainTextBytes = Encoding.UTF8.GetBytes(iValue);
            PasswordDeriveBytes DerivedPassword = new PasswordDeriveBytes(Password, SaltValueBytes, 
                HashAlgorithm, PasswordIterations);
            byte[] KeyBytes = DerivedPassword.GetBytes(KeySize / 8);
            RijndaelManaged SymmetricKey = new RijndaelManaged();
            SymmetricKey.Mode = CipherMode.CBC;
            byte[] CipherTextBytes = null;
            using (ICryptoTransform Encryptor = SymmetricKey.CreateEncryptor(KeyBytes, InitialVectorBytes))
            {
                using (MemoryStream MemStream = new MemoryStream())
                {
                    using (CryptoStream CryptoStream = new CryptoStream(MemStream, Encryptor, CryptoStreamMode.Write))
                    {
                        CryptoStream.Write(PlainTextBytes, 0, PlainTextBytes.Length);
                        CryptoStream.FlushFinalBlock();
                        CipherTextBytes = MemStream.ToArray();
                        MemStream.Close();
                        CryptoStream.Close();
                    }
                }
            }
            SymmetricKey.Clear();
            return Convert.ToBase64String(CipherTextBytes);
        }

        //AES256 Decryption of Encrypted String Value
        public static string AES256Decrypt(string iValue, SecureString appKey)
        {
            using (RijndaelManaged SymmetricKey = new RijndaelManaged())
            {
                SymmetricKey.GenerateKey();
                SymmetricKey.GenerateIV();
                EncryptionSettings es = new EncryptionSettings(appKey);
                string Password = es.CurrentAppKey;
                string HashAlgorithm = es.CurrentAppAlgorithm;
                int PasswordIterations = 10000;
                int KeySize = 256;
                byte[] CipherTextBytes = Convert.FromBase64String(iValue);
                PasswordDeriveBytes DerivedPassword = new PasswordDeriveBytes(Password, SymmetricKey.Key, 
                    HashAlgorithm, PasswordIterations);
                byte[] KeyBytes = DerivedPassword.GetBytes(KeySize / 8);
                SymmetricKey.Mode = CipherMode.CBC;
                byte[] PlainTextBytes = new byte[CipherTextBytes.Length];
                int ByteCount = 0;
                using (ICryptoTransform Decryptor = SymmetricKey.CreateDecryptor(KeyBytes, SymmetricKey.IV))
                {
                    using (MemoryStream MemStream = new MemoryStream(CipherTextBytes))
                    {
                        using (CryptoStream CryptoStream = new CryptoStream(MemStream, Decryptor, CryptoStreamMode.Read))
                        {
                            ByteCount = CryptoStream.Read(PlainTextBytes, 0, PlainTextBytes.Length);
                            MemStream.Close();
                            CryptoStream.Close();
                        }
                    }
                }
                SymmetricKey.Clear();
                return Encoding.UTF8.GetString(PlainTextBytes, 0, ByteCount);
            }
        }

        private static byte[] ToByteArray(SecureString secureString, Encoding encoding = null)
        {
            if (secureString == null)
            {
                throw new ArgumentNullException(nameof(secureString));
            }

            encoding = encoding ?? Encoding.UTF8;

            IntPtr unmanagedString = IntPtr.Zero;
            try
            {
                unmanagedString = Marshal.SecureStringToGlobalAllocUnicode(secureString);

                return encoding.GetBytes(Marshal.PtrToStringUni(unmanagedString));
            }
            finally
            {
                if (unmanagedString != IntPtr.Zero)
                {
                    Marshal.ZeroFreeBSTR(unmanagedString);
                }
            }
        }

        /// <summary>
        /// Converts regular text to <see cref="SecureString"/>.
        /// </summary>
        /// <param name="input">The input.</param>
        /// <returns>A <see cref="SecureString"/>.</returns>
        private static SecureString ToSecureString(string input)
        {
            var secure = new SecureString();
            foreach (char c in input)
            {
                secure.AppendChar(c);
            }

            secure.MakeReadOnly();
            return secure;
        }
    }

    //public class EncryptionSettings
    //{
    //    public EncryptionSettings(string appKey)
    //    {
    //        this.CurrentAppKey = appKey;
    //    }
    //    //public string CurrentAppKey = "&VW#2018-256";
    //    //public string CurrentAppSalt = ">LO(8ik,~";
    //    //public string CurrentAppAlgorithm = "SHA1";
    //    //public string CurrentAppInitialVector = "OFRna73m*aze01xY";
    //    public string CurrentAppKey = ConfigurationManager.AppSettings["EncryptionAppKey"];
    //    public string CurrentAppSalt = "";
    //    public string CurrentAppAlgorithm = "SHA1";
    //    public string CurrentAppInitialVector = "";
    //}
}
