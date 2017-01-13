using System.Threading.Tasks;

namespace Witf.Backend.Infrastructure
{
    public interface ICommandExecutor
    {
        Task<TR> Execute<T, TR>(T command);
    }
}