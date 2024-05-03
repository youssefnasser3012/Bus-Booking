using System.ComponentModel.DataAnnotations;

namespace fproject.Models
{

    public class Appointment
    {
        
        [Key]
        public int AppointmentId { get; set; }
        public DateTime DepartureTime { get; set; }
        public int MaxTravelers { get; set; }
        public string classe { get; set; }
        public int price { get; set; }

        //
        public ICollection<TravelerRequest> TravelerRequest { get; set; }
        public ICollection<Destination> Destination { get; set; }
        


    }


}