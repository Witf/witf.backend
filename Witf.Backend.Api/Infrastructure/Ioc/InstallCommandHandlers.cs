using Castle.MicroKernel.Registration;
using Castle.MicroKernel.SubSystems.Configuration;
using Castle.Windsor;
using Witf.Backend.Domain.Authentication;
using Witf.Backend.Domain.Authentication.Write;
using Witf.Backend.Infrastructure;
using Witf.Backend.Infrastructure.Commands;

namespace Witf.Backend.Api.Infrastructure.Ioc
{
    public class InstallCommandHandlers : IWindsorInstaller
    {
        public void Install(IWindsorContainer container, IConfigurationStore store)
        {
            container.Register(Classes.FromAssemblyContaining<RegisterNewUserCommandHandler>().BasedOn(typeof(ICommandHandler<,>)).WithServiceAllInterfaces());
        }
    }
}