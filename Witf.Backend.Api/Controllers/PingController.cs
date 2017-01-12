using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Witf.Backend.Api.Controllers
{
    public class PingController : ApiController
    {
        [HttpGet]
        [Route("api/ping/")]
        public IEnumerable<string> Get()
        {
            return new string[] { "ok", "ok" };
        }
    }
}