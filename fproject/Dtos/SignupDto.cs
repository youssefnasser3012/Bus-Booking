using System.ComponentModel.DataAnnotations;

namespace fproject.Dtos
{
    public class SignupDto
    {
        
            [Required]
            [StringLength(50)]
            public string Username { get; set; }

            [Required]
            [StringLength(100)]
            [EmailAddress]
            public string Email { get; set; }

            [Required]
            [StringLength(255)]
            public string Password { get; set; }
        }
    

}
