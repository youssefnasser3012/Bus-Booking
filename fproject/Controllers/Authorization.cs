using BCryptNet = BCrypt.Net.BCrypt;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using fproject.Data;
using fproject.Dtos;
using fproject.Models;
using BCrypt.Net;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Authorization;

namespace fproject.Controllers
{
    [ApiController]
    [Route("api/auth")]
    public class AuthorizationController : ControllerBase
    {
        private readonly DataContext _context;
        
        private readonly IAuthorizeRepository _repo;
        private readonly IConfiguration _config;

        public AuthorizationController(DataContext context,  IAuthorizeRepository repo, IConfiguration config)
        {
            _context = context;
            _config = config;
            _repo = repo;
        }//add-migration InitialMigration
        [AllowAnonymous]
  
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] SignupDto userForRegisterDto)
        {

           
            if (await _repo.UserExist(userForRegisterDto.Email))
            {
                return BadRequest("Email already exists");
            }

            var userToCreate = new User()
            {
                Username = userForRegisterDto.Username,
                Email = userForRegisterDto.Email,
                Role = "User" // Set default role if needed
            };
            await _repo.Register(userToCreate, userForRegisterDto.Password);

            return Ok();

        }
        
        [AllowAnonymous]
        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginDto userForLoginDto)
        {
            var userFromRepo = await _repo.Login(userForLoginDto.Email, userForLoginDto.Password);

            if (userFromRepo == null)
            {
                return Unauthorized();
            }

            var claims = new[]
            {
                 new Claim(ClaimTypes.NameIdentifier, userFromRepo.UserId.ToString()),

                new Claim(ClaimTypes.Email, userFromRepo.Email),
                new Claim(ClaimTypes.Name, userFromRepo.Username),
                new Claim(ClaimTypes.Role, userFromRepo.Role),
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8
                .GetBytes(_config.GetSection("AppSettings:Token").Value));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                NotBefore = DateTime.Now,
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = creds
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescriptor);

            return Ok(new
            {
                token = tokenHandler.WriteToken(token),
            });
        }
        /*public async Task<ActionResult<object>> Login(LoginDto model)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == model.Email);

            if (user == null)
            {
                return NotFound(new { message = "User not found." });
            }

            if (!BCryptNet.Verify(model.Password, user.PasswordHash))
            {
                return Unauthorized(new { message = "Invalid credentials." });
            }

            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes("your_secret_key_here"); // Provide your secret key

            // Generate JWT token
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Issuer = _jwtoptions.Issuer,
                Audience= _jwtoptions.Audience,
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(_jwtoptions.SigningKey)),
                SecurityAlgorithms.HmacSha256),
                Subject =new ClaimsIdentity( new Claim[]
                {
                    new (ClaimTypes.NameIdentifier,model.Username ),
                    new (ClaimTypes.Email ,model.Email )

                })

            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            var tokenString = tokenHandler.WriteToken(token);

            return Ok(new { token = tokenString });
        }*/
    }
}


































/*using fproject.Data;
using fproject.Dtos;
using fproject.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace fproject.Controllers
{
    [ApiController]
    [Route("api/auth")]
    public class Authorization:ControllerBase
    {
        private readonly DataContext _context;

        public Authorization(DataContext context)
        {
            _context = context;
        }
    }
    //SignupDto
    [HttpPost("signup")]
    public async Task<IActionResult> Signup(SignupDto model)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        // Check if the email is already registered
        if (await _context.Users.AnyAsync(u => u.Email == model.Email))
        {
            return Conflict(new { message = "Email already exists." });
        }

        // Hash the password
        string hashedPassword = BCryptNet.HashPassword(model.Password);

        // Create a new user
        var user = new User
        {
            Username = model.Username,
            Email = model.Email,
            PasswordHash = hashedPassword,
            Role = "User" // Set default role if needed
        };

        _context.Users.Add(user);
        await _context.SaveChangesAsync();

        return Ok(new { message = "User registered successfully." });
    }


    [HttpPost("login")]
    public async Task<IActionResult> Login(LoginDto model)
    {
        var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == model.Email);

        if (user == null)
        {
            return NotFound(new { message = "User not found." });
        }

        // Verify the hashed password
        if (!BCryptNet.Verify(model.Password, user.PasswordHash))
        {
            return Unauthorized(new { message = "Invalid credentials." });
        }

        // Authentication successful
        // Generate JWT token
        var tokenHandler = new JwtSecurityTokenHandler();
        var key = Encoding.ASCII.GetBytes("YourSecretKeyHere"); // Replace with your secret key

        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(new Claim[]
            {
                new Claim(ClaimTypes.NameIdentifier, user.UserId.ToString()),
                new Claim(ClaimTypes.Email, user.Email),
                new Claim(ClaimTypes.Role, user.Role)
            }),
            Expires = DateTime.UtcNow.AddDays(7), // Token expiration time
            SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
        };

        var token = tokenHandler.CreateToken(tokenDescriptor);
        var tokenString = tokenHandler.WriteToken(token);

        // Return token
        return Ok(new { token = tokenString });
    }
}
*/


