using System;
using System.Web.Http;
using Microsoft.Owin.Hosting;
using Owin;

namespace Witf.Backend.Api.SelfHost
{
    class Program
    {
        static void Main(string[] args)
        {
            string baseAddress = "http://localhost:9000/";

            // Start OWIN host 
            var start = WebApp.Start<TestStartup>(baseAddress);

            Console.ReadLine();
            start.Dispose();
        }

        public class TestStartup
        {
            public void Configuration(IAppBuilder builder)
            {
                HttpConfiguration config = new HttpConfiguration();
                WebApiConfig.Register(config);
                config.EnsureInitialized();
                builder.UseWebApi(config);
            }
        }

    }


}
