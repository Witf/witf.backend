using System.Threading.Tasks;

namespace Witf.Backend.Infrastructure
{
    public class Execute
    {
        private readonly ICommandExecutor _executor;

        public Execute(ICommandExecutor executor)
        {
            _executor = executor;
        }

        public CommandSelectedNowSelectReturnValue<TCommand> Command<TCommand>(TCommand command)
        {
            return new CommandSelectedNowSelectReturnValue<TCommand>(_executor, command);
        }

        public class CommandSelectedNowSelectReturnValue<TCommand>
        {
            private readonly ICommandExecutor _executor;
            private readonly TCommand _command;

            public CommandSelectedNowSelectReturnValue(ICommandExecutor executor, TCommand command)
            {
                _executor = executor;
                _command = command;
            }

            public async Task<TR> Returning<TR>()
            {
                return await _executor.Execute<TCommand, TR>(_command);
            }    
        }

    }
}