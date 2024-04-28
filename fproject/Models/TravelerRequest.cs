using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace fproject.Models
{

    public class TravelerRequest
    {
        [Key]
        public int RequestId { get; set; }
        [ForeignKey("User")]
        public int UserId { get; set; }
        [ForeignKey("Appointment")]
        public int AppointmentId { get; set; }
        public string Status { get; set; }
        public User User { get; set; }
        public Appointment Appointment { get; set; }




    }
}

