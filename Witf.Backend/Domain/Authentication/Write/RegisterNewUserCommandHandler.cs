using System.Threading.Tasks;
using Witf.Backend.Infrastructure;

namespace Witf.Backend.Domain.Authentication
{
    public class RegisterNewUserCommandHandler : ICommandHandler<RegisterNewUserCommand, int>
    {
        public Task<int> Handle(RegisterNewUserCommand command)
        {
            throw new System.NotImplementedException();
        }
    }
}