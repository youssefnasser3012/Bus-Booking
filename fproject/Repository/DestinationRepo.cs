using fproject.Data;
using fproject.Dtos;
using fproject.Models;

namespace fproject.Repository
{
    public class DestinationRepo : IDestinationRepo
    {
        private DataContext _db;
        public DestinationRepo(DataContext db)
        {
            _db = db;
        }
        public int deleteDestination(int id)
        {
            var record=_db.Destinations.Where(x=>x.DestinationId == id).FirstOrDefault();
            if(record != null)
            {
                _db.Destinations.Remove(record);
            }
            return _db.SaveChanges();
        }

        public List<Destination> GetDestinations()
        {
            return _db.Destinations.ToList();
        }

        public Destination GetDestionation(int id)
        {
            var record = _db.Destinations.Where(x=>x.DestinationId==id).FirstOrDefault();
            return record ?? new();
        }

        public int insertDestiantion(DestinationDto destinationfromdto)
        {
            var destination = new Destination()
            {
                From = destinationfromdto.From,
                To = destinationfromdto.To,
                AppointmentId = destinationfromdto.AppointmentId,
            };
            _db.Destinations.Add(destination);
            return _db.SaveChanges();
        }

        public int updateDestination(DestinationDto destination)
        {
            var existing = _db.Destinations.Find(destination.DestinationId);
            existing.From = destination.From;
            existing.To = destination.To;
            existing.AppointmentId = destination.AppointmentId;
            _db.Destinations.Update(existing);
            return _db.SaveChanges();
        }
        public List<DesJoinAppoin> GetDestinations2()
        {
            var records = (from p in _db.Destinations
                           join pa in _db.Appointments on p.AppointmentId equals pa.AppointmentId
                           where pa.MaxTravelers > 0
                           select new DesJoinAppoin()
                           {
                               DestinationId = p.DestinationId,
                               From = p.From,
                               To = p.To,
                               DepartureTime = pa.DepartureTime,
                               MaxTravelers = pa.MaxTravelers,
                               classe = pa.classe,
                               price = pa.price,
                               AppointmentId = pa.AppointmentId,
                           }).ToList();
            return records;
        }
        public List<DesJoinAppoin> GetDestinationsFiltered(string fromLocation, string to)
        {
            var records = (from p in _db.Destinations
                           join pa in _db.Appointments on p.AppointmentId equals pa.AppointmentId
                           where pa.MaxTravelers > 0 && p.From == fromLocation && p.To == to
                           select new DesJoinAppoin()
                           {
                               DestinationId = p.DestinationId,
                               From = p.From,
                               To = p.To,
                               DepartureTime = pa.DepartureTime,
                               MaxTravelers = pa.MaxTravelers,
                               classe = pa.classe,
                               price = pa.price,
                               AppointmentId = pa.AppointmentId,
                           }).ToList();
            return records;
        }

    }
}
