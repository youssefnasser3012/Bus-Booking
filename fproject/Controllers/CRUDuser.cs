using fproject.Data;
using fproject.Dtos;
using fproject.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

using System.Threading.Tasks;

namespace fproject.Controllers
{
    [ApiController]
    [Route("api/crudU")]
   
    public class CRUDuser : ControllerBase
    {
        private readonly DataContext _dbContext;

        private readonly IAuthorizeRepository _repo;

        public CRUDuser(DataContext context, IAuthorizeRepository repo)
        {
            _dbContext = context;
            _repo = repo;
        }
         [HttpPost]
        [Route("/api")] 
        /*public  async Task <IActionResult> createAppointement([FromBody] AppointmentDto appointementfromdto)
        {
            var appointement = new Appointment()
            {
                DepartureTime = appointementfromdto.DepartureTime,
                MaxTravelers = appointementfromdto.MaxTravelers,
            };
            appointement.AppointmentId = 0;
            _dbContext.Set<Appointment>().Add(appointement);
            _dbContext.SaveChanges();
            return Ok(appointement.AppointmentId);
        }*/
        [HttpPost("create")]
        public async Task<IActionResult> Register([FromBody] SignupDto userForRegisterDto)
        {

            userForRegisterDto.Email = userForRegisterDto.Email;
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
        [HttpPut]
        [Route("")]
        public async Task<IActionResult> updateUser([FromBody] userDto  user)
        {
            var existing = _dbContext.Set<User>().Find(user.UserId);
            existing.Username = user.Username;
            existing.Email = user.Email;
            existing.Role = user.Role;
            _dbContext.Set<User>().Update(existing);
            await _dbContext.SaveChangesAsync();
            return Ok();
        }
        [HttpDelete]
        [Route("")]
        public ActionResult deleteUser([FromBody] userDto user)
        {
            var existing = _dbContext.Set<User>().Find(user.UserId);
            _dbContext.Set<User>().Remove(existing);
            _dbContext.SaveChanges();
            return Ok();
        }
        [HttpGet]
        [Route("")]
        public ActionResult<IEnumerable<User>> GetUsers()
        {
            var records=_dbContext.Set<User>().ToList();
            return Ok(records);
        }
        [HttpGet]
        [Route("{id}")]
        public ActionResult<User> GetUser(int id)
        {
            var record = _dbContext.Set<User>().Where(x=>x.UserId==id);
            if (record == null)
            {
                return BadRequest("not found");
            }
            return Ok(record);
        }
    }
}
