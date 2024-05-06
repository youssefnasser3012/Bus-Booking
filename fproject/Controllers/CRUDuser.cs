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
        [Route("Create")]
        public async Task<IActionResult> Register([FromBody] userDto userForRegisterDto,string password)
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
                Role = userForRegisterDto.Role
            };
            await _repo.Register(userToCreate, password);

            return Ok();

        }
        [HttpPut]
        [Route("Update")]
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
        [Route("Delete")]
        public ActionResult deleteUser([FromBody] userDto user)
        {
            var existing = _dbContext.Set<User>().Find(user.UserId);
            _dbContext.Set<User>().Remove(existing);
            _dbContext.SaveChanges();
            return Ok();
        }
        [HttpGet]
        [Route("GetAll")]
        public ActionResult<IEnumerable<User>> GetUsers()
        {
            var records=_dbContext.Set<User>().ToList();
            return Ok(records);
        }
        [HttpGet]
        [Route("GetOne{id}")]
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
