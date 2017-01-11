using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http.Dependencies;
using Castle.MicroKernel.Lifestyle;
using Castle.Windsor;

namespace Witf.Backend.Api.Infrastructure.WebApi
{
    public class WindsorDependencyScope : IDependencyScope
    {
        private IWindsorContainer _container;
        private IDisposable _scope;

        public WindsorDependencyScope(IWindsorContainer container)
        {
            _container = container;
            _scope = container.BeginScope();
        }

        public object GetService(Type t)
        {
            return _container.Kernel.HasComponent(t) ? _container.Resolve(t) : null;
        }

        public IEnumerable<object> GetServices(Type t)
        {
            return _container.ResolveAll(t).Cast<object>().ToArray();
        }

        ~WindsorDependencyScope()
        {
            _scope?.Dispose();
        }

        public void Dispose()
        {
            _scope.Dispose();
            _container = null;
            _scope = null;
            GC.SuppressFinalize(this);
        }
    }
}