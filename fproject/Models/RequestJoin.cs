using Humanizer;

namespace fproject.Models
{
    public class RequestJoin
    {
        public int UserId { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public DateTime DepartureTime { get; set; }
        public string To { get; set; }
        public string From { get; set; }

        public string Status { get; set; }

        public int RequestId { get; set; }


    }
}
