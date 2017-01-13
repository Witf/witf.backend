using System.Threading.Tasks;
using Castle.Windsor;

namespace Witf.Backend.Infrastructure
{
    public class CommandExecutor : ICommandExecutor
    {
        private readonly IWindsorContainer _container;

        public CommandExecutor(IWindsorContainer kernel)
        {
            _container = kernel;
        }

        public async Task<TR> Execute<T, TR>(T command)
        {
            dynamic handler = FindHandlerForCommand<TR>(command);

            try
            {
                return await handler.Handle(command as dynamic);
            }
            finally
            {
                _container.Release(handler);
            }
        }

        private object FindHandlerForCommand<TR>(object command)
        {
            var handlerType = typeof(ICommandHandler<,>).MakeGenericType(command.GetType(), typeof(TR));
            dynamic handler = _container.Resolve(handlerType);
            return handler;
        }
    }
}