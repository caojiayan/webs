using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Web;

namespace yantie
{
    public class Sys
    {
        public static string Version { get { return ConfigurationManager.AppSettings["Version"]; } }
        public static string FilePath { get { return ConfigurationManager.AppSettings["FilePath"]; } }
        public static string Domain { get { return ConfigurationManager.AppSettings["Domain"]; } }

    }
}