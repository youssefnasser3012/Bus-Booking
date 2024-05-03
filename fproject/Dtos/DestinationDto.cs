
using System.ComponentModel.DataAnnotations.Schema;

namespace fproject.Dtos
{
    public class DestinationDto
    {
        public int DestinationId { get; set; }

        public string From { get; set; }
        public string To { get; set; }
        [ForeignKey("Appointment")]
        public int AppointmentId { get; set; }

    }
}
