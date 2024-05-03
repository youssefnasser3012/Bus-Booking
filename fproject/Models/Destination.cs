using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace fproject.Models
{
    
        public class Destination
        {
        [Key]
        public int DestinationId { get; set; }
        public string From { get; set; }
        public string To { get; set; }

        [ForeignKey("Appointment")]
        public int AppointmentId { get; set; }
        

        // Navigation property
        public Appointment Appointment { get; set; }
        public ICollection<TravelerRequest> TravelerRequest { get; set; }

    }

    
}
