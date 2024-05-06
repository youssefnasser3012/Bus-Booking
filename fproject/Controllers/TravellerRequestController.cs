using fproject.Dtos;
using fproject.Repository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace fproject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TravellerRequestController : ControllerBase
    {

        public TravellerRequestController(ITravelerRequest repo)
        {
            _repo = repo;
        }
        private readonly ITravelerRequest _repo;
        [HttpGet]
        [Route("GetAll")]
        
        public IActionResult GetRequests()
        {
            return Ok(_repo.GetRequests());
        }
        [HttpGet]
        
      
        public IActionResult GetRequest(int id)
        {
            return Ok(_repo.GetRequest(id));
        }
        [HttpPost]
        [Route("Create")]
        
        public IActionResult CreateRequest(TravelerRequestDto requestfromdto)
        {
            _repo.CreateRequest(requestfromdto);
            return Ok("success");
        }

        [HttpPut]
        [Route("Accept")]
        
        public IActionResult AcceptRequest(AcceptDeclineDto request)
        {
            return Ok(_repo.Accept(request));
        }

        [HttpPut]
        [Route("Decline")]
      
        public IActionResult DeclineRequest(AcceptDeclineDto request)
        {
            return Ok(_repo.DeclineRequest(request));
        }
        [HttpDelete]
        [Route("Delete/{id}")]
        
        public IActionResult DeleteRequest(int id)
        {
            return Ok(_repo.deleteRequest(id));
        }

    }
}
