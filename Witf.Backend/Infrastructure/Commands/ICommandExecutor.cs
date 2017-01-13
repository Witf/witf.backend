using System.Threading.Tasks;

namespace Witf.Backend.Infrastructure.Commands
{
    public interface ICommandExecutor
    {
        Task<TR> Execute<T, TR>(T command);
    }
}