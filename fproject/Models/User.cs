using System.ComponentModel.DataAnnotations;
using System.ComponentModel;

namespace fproject.Models
{
    public class User
    {
        [Key]
        public int UserId { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public string Role { get; set; } = "User"; // Default value

        // Add navigation properties for TravelerRequest and Appointment
        public ICollection<TravelerRequest> TravelerRequest { get; set; }
        
    }

}
