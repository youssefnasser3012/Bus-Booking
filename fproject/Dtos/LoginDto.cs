using System.ComponentModel.DataAnnotations;

namespace fproject.Dtos
{
    public class LoginDto
    {
        
            [Required]
            [StringLength(100)]
            [EmailAddress]
            public string Email { get; set; }

            [Required]
            [StringLength(255)]
            public string Password { get; set; }

        


    }
}
