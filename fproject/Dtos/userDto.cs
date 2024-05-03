using System.ComponentModel.DataAnnotations;

namespace fproject.Dtos
{
    public class userDto
    {
        
        public string Username { get; set; }

        public int UserId { get; set; }
        public string Email { get; set; }
        public string Role { get; set; }
    }
}
