using Castle.MicroKernel.Registration;
using Castle.MicroKernel.SubSystems.Configuration;
using Castle.Windsor;
using Witf.Backend.Infrastructure;

namespace Witf.Backend.Api.Infrastructure.Ioc
{
    public class InstallCommandInfrastructure : IWindsorInstaller
    {
        public void Install(IWindsorContainer container, IConfigurationStore store)
        {
            container.Register(Component.For<Execute>());
            container.Register(Component.For<ICommandExecutor>().ImplementedBy<CommandExecutor>());
        }
    }
}