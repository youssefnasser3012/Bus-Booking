using fproject.Models;

namespace fproject.Data
{
    public interface IAuthorizeRepository
    {
          
        Task<User> Register(User user, string password);
        Task<User> Login(string username, string password);
        Task<bool> UserExist(string username);
    }
}
