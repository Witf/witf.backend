using System.Web.Http;
using Microsoft.Owin;
using Owin;
using Witf.Backend.Api;
using Witf.Backend.Api.Infrastructure.WebApi;

[assembly: OwinStartup(typeof(Startup))]
namespace Witf.Backend.Api
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            var httpConfiguration = new HttpConfiguration();

            WebApiConfig.Register(httpConfiguration);

            app.UseAuth0Authentication();
            app.UseWebApi(httpConfiguration);

        }
    }
}
