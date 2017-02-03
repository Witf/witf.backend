using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Http;

namespace Witf.Backend.Api.Controllers
{
    public class PingController : ApiController
    {
        [HttpGet]
        [Route("api/ping/")]
        public async Task<IEnumerable<string>> Get()
        {
            await Task.Delay(10);
            return new[] { "ok", "ok" };
        }
    }
}