//using Owin;

//namespace Witf.Backend.Api.Infrastructure.WebApi
//{
//    public static class AppBuilderExtensions
//    {
//        public static IAppBuilder UseAuth0Authentication(this IAppBuilder app)
//        {
//            var issuer = $"https://{ConfigurationManager.AppSettings["auth0:Domain"]}/";
//            var audience = ConfigurationManager.AppSettings["auth0:ClientId"];
//            var secret = TextEncodings.Base64Url.Decode(ConfigurationManager.AppSettings["auth0:ClientSecret"]);

//            var tokenValidationParameters = new TokenValidationParameters
//            {
//                RequireSignedTokens = true,
//                ValidateAudience = true,
//                ValidateIssuer = true,
//                RequireExpirationTime = true,
//                ValidateLifetime = true,
//                ValidIssuer = issuer,
//                ValidAudience = audience,
//                IssuerSigningToken = new SymmetricKeyIssuerSecurityTokenProvider(issuer, secret).SecurityTokens.FirstOrDefault(),
//            };

//            app.UseJwtBearerAuthentication(
//                new JwtBearerAuthenticationOptions
//                {
//                    AuthenticationMode = AuthenticationMode.Active,
//                    AuthenticationType = "JWT",
//                    TokenValidationParameters = tokenValidationParameters
//                });

//            return app;
//        }

//    }
//}