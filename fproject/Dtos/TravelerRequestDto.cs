namespace fproject.Dtos
{
    public class TravelerRequestDto
    {
        public int RequestId { get; set; }
        public int UserId { get; set; }
        public int AppointmentId { get; set; }
        public string Status { get; set;}
        public int DestinationId { get; set; }
    }
}
