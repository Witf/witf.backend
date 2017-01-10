using System.Web.Http;
using Microsoft.Owin;
using Owin;
using Witf.Backend.Api;

[assembly: OwinStartup(typeof(Startup))]
namespace Witf.Backend.Api
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            var httpConfiguration = new HttpConfiguration();

            WebApiConfig.Register(httpConfiguration);

            app.UseWebApi(httpConfiguration);

        }
    }
}
