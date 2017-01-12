using System.Linq;
using System.Security.Claims;
using System.Security.Principal;

namespace Witf.Backend.Api.Infrastructure.WebApi
{
    public static class IdentityExtensions
    {
        public static string GetUserName(this IIdentity identity)
        {
            var claimsIdentity = identity as ClaimsIdentity;

            return claimsIdentity?.Claims.FirstOrDefault(c => c.Type == "name")?.Value;
        }
    }
}