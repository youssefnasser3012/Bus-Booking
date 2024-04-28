using System.ComponentModel.DataAnnotations;

namespace fproject.Models
{

    public class Appointment
    {
        [Key]
        public int AppointmentId { get; set; }
        public DateTime DepartureTime { get; set; }
        public int MaxTravelers { get; set; }

        // Add navigation property for TravelerRequest
        public ICollection<TravelerRequest> TravelerRequest { get; set; }
        public ICollection<Destination> Destination { get; set; }
    }


}