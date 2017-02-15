using System.Configuration;
using Castle.Components.DictionaryAdapter;
using Castle.MicroKernel.Registration;
using Castle.MicroKernel.SubSystems.Configuration;
using Castle.Windsor;
using Witf.Backend.Infrastructure.Database;

namespace Witf.Backend.Api.Infrastructure.Ioc.Installers
{
    public class Settings : IWindsorInstaller
    {
        public void Install(IWindsorContainer container, IConfigurationStore store)
        {
            var dictionaryAdapterFactory = new DictionaryAdapterFactory();

            container.Register(Types.FromAssemblyContaining<IProxySettings>().Where(t => t.Name.EndsWith("Settings") && t.IsInterface)
                    .Configure(component => component.UsingFactoryMethod((kernel, model, creationContext) => dictionaryAdapterFactory.GetAdapter(creationContext.RequestedType, ConfigurationManager.AppSettings))));

            container.Register(Component.For<IConnectionStrings>().ImplementedBy<ConnectionStrings>());

        }
    }
}