using fproject.Dtos;
using fproject.Models;
using fproject.Repository;
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
        [Route("")]
        public IActionResult GetAppointments()
        {
            return Ok(_repo.GetAppointments());
        }
        [HttpGet]
        [Route("{id}")]
        public IActionResult GetAppointment(int id)
        {
            return Ok(_repo.GetAppointment(id));
        }
        [HttpPost]
        [Route("")]
        public IActionResult InsertAppointment(AppointmentDto appointmentfromdto)
        {
            _repo.insertAppointment(appointmentfromdto);
            return Ok("success");
        }
        [HttpDelete]
        [Route("{id}")]
        public IActionResult DeleteAppointment(int id)
        {
            return Ok(_repo.deleteAppointment(id));
        }
        [HttpPut]
        [Route("")]
        public IActionResult PutAppointment(AppointmentDto appointment)
        {
            return Ok(_repo.updateAppointment(appointment));
        }

    }
}
