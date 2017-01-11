using Castle.Windsor;
using Castle.Windsor.Installer;

namespace Witf.Backend.Api.Infrastructure.Ioc
{
    public class Bootstrapper
    {
        public static void Bootstrap(IWindsorContainer container)
        {
            container.Install(FromAssembly.This());
        }
    }
}