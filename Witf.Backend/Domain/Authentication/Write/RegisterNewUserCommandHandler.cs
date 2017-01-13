using System.Threading.Tasks;
using Witf.Backend.Infrastructure;
using Witf.Backend.Infrastructure.Commands;

namespace Witf.Backend.Domain.Authentication.Write
{
    public class RegisterNewUserCommandHandler : ICommandHandler<RegisterNewUserCommand, int>
    {
        public Task<int> Handle(RegisterNewUserCommand command)
        {
            throw new System.NotImplementedException();
        }
    }
}