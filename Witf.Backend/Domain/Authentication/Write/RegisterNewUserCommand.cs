namespace Witf.Backend.Domain.Authentication.Write
{
    public class RegisterNewUserCommand
    {
        public string Username { get; set; }
        public string Password { get; set; }
    }
}