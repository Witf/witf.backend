using System;
using System.Web.Http;
using Castle.Windsor;
using Castle.Windsor.Installer;
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
            var start = WebApp.Start<StartupForSelfhostBecauseReusingStartupInApiFailed>(baseAddress);

            Console.WriteLine("Self host is up, press enter to quit..");
            Console.ReadLine();
            start.Dispose();
        }

        public class StartupForSelfhostBecauseReusingStartupInApiFailed
        {
            public void Configuration(IAppBuilder builder)
            {
                var container = new WindsorContainer();
                container.Install(FromAssembly.This());

                HttpConfiguration config = new HttpConfiguration();
                WebApiConfig.Register(config, container);
                config.EnsureInitialized();
                builder.UseWebApi(config);
            }
        }

    }


}
