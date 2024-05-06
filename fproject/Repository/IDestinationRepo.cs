using fproject.Dtos;
using fproject.Models;

namespace fproject.Repository
{
    public interface IDestinationRepo
    {
        public List<Destination> GetDestinations();
        public Destination GetDestionation(int id);
        public int insertDestiantion(DestinationDto destinationfromdto);
        public int updateDestination(DestinationDto destinationfromdto);
        public int deleteDestination(int id);
        public List<DesJoinAppoin> GetDestinations2();
        public List<DesJoinAppoin> GetDestinationsFiltered(string fromLocation, string to);
    }
}
