using System.Web.Http;

namespace Witf.Backend.Api.Controllers
{
    public class TestController : ApiController
    {
        [HttpGet]
        [Route("testing")]
        public int Stuff()
        {
            return 1;
        }

    }
}