using System.Configuration;
using Castle.Components.DictionaryAdapter;
using Castle.MicroKernel.Registration;
using Castle.MicroKernel.SubSystems.Configuration;
using Castle.Windsor;

namespace Witf.Backend.Api.SelfHost
{
    public class AppConfigSettingsInstaller : IWindsorInstaller
    {

        public void Install(IWindsorContainer container, IConfigurationStore store)
        {
            var dictionaryAdapterFactory = new DictionaryAdapterFactory();

            container.Register(Types.FromAssemblyContaining<IProxySettings>().Where(t => t.Name.EndsWith("Settings") && t.IsInterface)
                    .Configure(component => component.UsingFactoryMethod((kernel, model, creationContext) => dictionaryAdapterFactory.GetAdapter(creationContext.RequestedType, ConfigurationManager.AppSettings))));
        }

    }
}