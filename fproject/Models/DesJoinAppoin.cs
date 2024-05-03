namespace fproject.Models
{
    public class DesJoinAppoin
    {
        public int DestinationId { get; set; }
        public string From { get; set; }
        public string To { get; set; }
        public DateTime DepartureTime { get; set; }
        public int MaxTravelers { get; set; }

    }
}
