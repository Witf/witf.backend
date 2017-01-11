using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Cors;
using Castle.Windsor;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Serialization;
using Witf.Backend.Api.Infrastructure.WebApi;

namespace Witf.Backend.Api
{
    public class WebApiConfig
    {
        public static void Register(HttpConfiguration config, IWindsorContainer container = null)
        {
            container = container ?? new WindsorContainer();
            Infrastructure.Ioc.Bootstrapper.Bootstrap(container);

            config.DependencyResolver = new WindsorHttpDependencyResolver(container);
            config.Formatters.Remove(config.Formatters.XmlFormatter);
            config.Formatters.JsonFormatter.SerializerSettings = GetJsonSerializerSettings();
            config.EnableCors(AllowEverything());
            config.MapHttpAttributeRoutes();
        }

        private static JsonSerializerSettings GetJsonSerializerSettings()
        {
            return new JsonSerializerSettings
            {
                NullValueHandling = NullValueHandling.Ignore,
                Converters = new List<JsonConverter> { new StringEnumConverter() },
                ContractResolver = new CamelCasePropertyNamesContractResolver()
            };
        }

        private static EnableCorsAttribute AllowEverything()
        {
            return new EnableCorsAttribute("*", "*", "*")
            {
                SupportsCredentials = true,
                PreflightMaxAge = 600,
                ExposedHeaders = { "Authorization", "Accept", "RequestVerificationToken", "Origin" }
            };
        }
    }
}