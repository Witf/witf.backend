using System.Threading.Tasks;
using System.Web.Http;
using Witf.Backend.Api.Contracts;
using Witf.Backend.Domain.Authentication;
using Witf.Backend.Domain.Authentication.Write;
using Witf.Backend.Infrastructure;
using Witf.Backend.Infrastructure.Commands;

namespace Witf.Backend.Api.Controllers
{
    public class AutenticationController : ApiController
    {
        private readonly Execute _execute;

        public AutenticationController(Execute execute)
        {
            _execute = execute;
        }

        [HttpPost]
        [Route("api/authentication/user")]
        public async Task<IHttpActionResult> RegisterNewUser(RegisterNewUserBody payload)
        {
            int res = await _execute.Command(new RegisterNewUserCommand {Username = payload.Username, Password = payload.Password }).Returning<int>();
            return Ok(res);
        }
    }
}