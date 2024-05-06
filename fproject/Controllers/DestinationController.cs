using fproject.Dtos;
using fproject.Repository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace fproject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DestinationController : ControllerBase
    {
        public DestinationController(IDestinationRepo repo)
        {
            _repo = repo;
        }
        private readonly IDestinationRepo _repo;
        [HttpGet]
        [Route("GetAll")]
        
        public IActionResult GetDestinations()
        {
            return Ok(_repo.GetDestinations());
        }
        [HttpGet]
        [Route("GetOne/{id}")]
       
        public IActionResult GetDestination(int id)
        {
            return Ok(_repo.GetDestionation(id));
        }
        [HttpPost]
        [Route("Create")]
       
        public IActionResult InsertDestination(DestinationDto destinationfromdto)
        {
            _repo.insertDestiantion(destinationfromdto);
            return Ok("success");
        }
        [HttpPut]
        [Route("Update")]
       
        public IActionResult PutDestination(DestinationDto destination)
        {
            return Ok(_repo.updateDestination(destination));
        }
        [HttpDelete]
        [Route("Delete/{id}")]
        
        public IActionResult DeleteDestination(int id)
        {
            return Ok(_repo.deleteDestination(id));
        }
        [HttpGet]
        [Route("GetWjoin")]
        
        public IActionResult GetDestination2()
        {
            return Ok(_repo.GetDestinations2());
        }
        [HttpGet]
        [Route("Filter")]
        public IActionResult GetDestinationsFiltered(string fromLocation, string to)
        {
            return Ok(_repo.GetDestinationsFiltered(fromLocation, to));
        }
    }    
}
