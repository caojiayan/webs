using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Caching;

namespace yantie.action
{
    /// <summary>
    /// valid 的摘要说明
    /// </summary>
    public class valid : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            HttpContext.Current.Response.ContentType = "application/json";
            HttpContext.Current.Response.Buffer = true;
            HttpContext.Current.Response.ExpiresAbsolute = System.DateTime.Now.AddSeconds(-1);
            HttpContext.Current.Response.Expires = 0;
            HttpContext.Current.Response.CacheControl = "no-cache";
            HttpContext.Current.Response.AppendHeader("Pragma", "No-Cache");

            string result = "0";
            List<string> list = new List<string>();
            if (HttpContext.Current.Request.Form["action"] == "validkey")
            {
                string strkey = HttpContext.Current.Request.Form["key"];
                if (!string.IsNullOrWhiteSpace(strkey))
                {
                    object keyCache = HttpRuntime.Cache["yantiekey"];
                    if (keyCache == null)
                    {
                        StreamReader sr = new StreamReader(HttpContext.Current.Server.MapPath("/action/key.txt"), System.Text.Encoding.Default);
                        string str = "";
                        int tmp = 1;
                        while (tmp > 0)
                        {
                            str = sr.ReadLine();
                            if (!string.IsNullOrWhiteSpace(str))
                                list.Add(str.Trim());
                            else
                                tmp = 0;
                        }
                        CacheDependency fileDepends = new CacheDependency(HttpContext.Current.Server.MapPath("/action/key.txt"));
                        HttpRuntime.Cache.Insert("yantiekey",
                            list,
                            fileDepends,
                            Cache.NoAbsoluteExpiration,//从不过期
                            Cache.NoSlidingExpiration,//禁用可调过期
                            CacheItemPriority.Default,
                            null);
                    }
                    else
                    {
                        list = (List<string>)keyCache;
                    }
                    if (list != null && list.Count > 0)
                    {
                        foreach (string key in list)
                        {
                            if (key == strkey)
                            {
                                result = "1";
                                break;
                            }
                        }
                    }
                }
            }
            HttpContext.Current.Response.Write("{\"result\":\"" + result + "\"}");
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}