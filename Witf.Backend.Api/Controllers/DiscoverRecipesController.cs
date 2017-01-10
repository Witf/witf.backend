using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace Witf.Backend.Api.Controllers
{
    public class DiscoverRecipesController : ApiController
    {
        private readonly IProxySettings _settings;

        public DiscoverRecipesController(IProxySettings settings)
        {
            _settings = settings;
        }

        [HttpGet]
        [Route("api/discover/{*uri}")]
        public async Task<IHttpActionResult> ProxyAllSearchRequests()
        {
            using (var httpClient = new HttpClient())
            {
                var appHbEndpoint = _settings.SearchApiUrl;
                var newUrl = appHbEndpoint + Request.RequestUri;
                var actualResponse = await httpClient.GetAsync(newUrl);
                var result = await actualResponse.Content.ReadAsStringAsync();

                var response = Request.CreateResponse(actualResponse.StatusCode);
                response.Content = new StringContent(result);

                return ResponseMessage(response);
            };

        }

    }
}