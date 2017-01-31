using System.Threading.Tasks;
using Witf.Backend.Infrastructure.Commands;
using Witf.Backend.Infrastructure.Database;

namespace Witf.Backend.Domain.Authentication.Write
{
    public class RegisterNewUserCommandHandler : ICommandHandler<RegisterNewUserCommand, int>
    {
        private readonly IConnectionStrings _connectionStrings;

        public RegisterNewUserCommandHandler(IConnectionStrings connectionStrings)
        {
            _connectionStrings = connectionStrings;
        }

        public async Task<int> Handle(RegisterNewUserCommand command)
        {
            using (var connection = new DbConnectionScope(_connectionStrings))
            {
                //connection.Current
            }

            await Task.Delay(1);

            return 1;
        }
    }
}