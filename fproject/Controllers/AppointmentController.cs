using fproject.Dtos;
using fproject.Models;
using fproject.Repository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace fproject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppointmentController : ControllerBase
    {
        public AppointmentController(appointmentRepo repo)
        {
            _repo=repo;
        }
        private readonly appointmentRepo _repo;

        [HttpGet]
        
        public IActionResult GetAppointments()
        {
            return Ok(_repo.GetAppointments());
        }
        [HttpGet]
        [Route("GetOne/{id}")]
       
        public IActionResult GetAppointment(int id)
        {
            return Ok(_repo.GetAppointment(id));
        }
        [HttpPost]
        [Route("Create")]
        
        public IActionResult InsertAppointment(AppointmentDto appointmentfromdto)
        {
            _repo.insertAppointment(appointmentfromdto);
            return Ok("success");
        }
        [HttpDelete]
        [Route("Delete/{id}")]
       
        public IActionResult DeleteAppointment(int id)
        {
            return Ok(_repo.deleteAppointment(id));
        }
        [HttpPut]
        [Route("Update")]
      
        public IActionResult PutAppointment(AppointmentDto appointment)
        {
            return Ok(_repo.updateAppointment(appointment));
        }

    }
}
