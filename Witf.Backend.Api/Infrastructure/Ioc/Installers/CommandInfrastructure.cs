using Castle.MicroKernel.Registration;
using Castle.MicroKernel.SubSystems.Configuration;
using Castle.Windsor;
using Witf.Backend.Infrastructure.Commands;

namespace Witf.Backend.Api.Infrastructure.Ioc.Installers
{
    public class CommandInfrastructure : IWindsorInstaller
    {
        public void Install(IWindsorContainer container, IConfigurationStore store)
        {
            container.Register(Component.For<Execute>());
            container.Register(Component.For<ICommandExecutor>().ImplementedBy<CommandExecutor>());
        }
    }
}