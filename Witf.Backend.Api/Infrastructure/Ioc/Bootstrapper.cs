using Castle.MicroKernel.Registration;
using Castle.Windsor;
using Castle.Windsor.Installer;

namespace Witf.Backend.Api.Infrastructure.Ioc
{
    public class Bootstrapper
    {
        public static void Bootstrap(IWindsorContainer container)
        {
            container.Register(Component.For<IWindsorContainer>().Instance(container));
            container.Install(FromAssembly.This());
        }
    }
}