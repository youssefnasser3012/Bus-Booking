using fproject.Dtos;
using fproject.Models;

namespace fproject.Repository
{
    public interface ITravelerRequest
    {
        public List<RequestJoin> GetRequests();
        public List<RequestJoin> GetRequest(int id);
        public int CreateRequest(TravelerRequestDto requestfromdto);
        public int updateRequest(TravelerRequestDto request);
        public int Accept(AcceptDeclineDto request);
        public int DeclineRequest(AcceptDeclineDto request);
        public int deleteRequest(int id);
    }
}
