using fproject.Data;
using fproject.Dtos;
using fproject.Models;
using Microsoft.AspNetCore.Http.HttpResults;

namespace fproject.Repository
{
    public class TravelerRequestRepo : ITravelerRequest
    {
        private readonly DataContext _db;
        private readonly appointmentRepo _arepo;
        public TravelerRequestRepo(DataContext db, appointmentRepo arepo)
        {
            _db = db;
            _arepo = arepo;
        }

        public int Accept(AcceptDeclineDto request)
        {
            var existing = _db.TravelerRequests.Find(request.RequestId);
            existing.Status = "Accepted";
            _arepo.DecMax(existing.AppointmentId);
            _db.TravelerRequests.Update(existing);
            return _db.SaveChanges();
        }

        public int CreateRequest(TravelerRequestDto requestfromdto)
        {
            var request = new TravelerRequest()
            {
                UserId = requestfromdto.UserId,
                AppointmentId = requestfromdto.AppointmentId,
                Status = requestfromdto.Status,
                DestinationId = requestfromdto.DestinationId,
            };
            _db.TravelerRequests.Add(request);
            return _db.SaveChanges();
        }

        public int DeclineRequest(AcceptDeclineDto request)
        {
            var existing = _db.TravelerRequests.Find(request.RequestId);
            existing.Status = "Declined";
            
            _db.TravelerRequests.Update(existing);
            return _db.SaveChanges();
        }

        public int deleteRequest(int id)
        {
            var record = _db.TravelerRequests.Where(x => x.RequestId == id).FirstOrDefault();
            if (record != null)
            {
                _db.TravelerRequests.Remove(record);
            }
            return _db.SaveChanges();
        }

        public List<RequestJoin> GetRequest(int id)
        {
            var records = (from t in _db.TravelerRequests
                           join ta in _db.Appointments on t.AppointmentId equals ta.AppointmentId
                           join tu in _db.Users on t.UserId equals tu.UserId
                           join td in _db.Destinations on t.DestinationId equals td.DestinationId
                           where t.UserId == id
                           select new RequestJoin()
                           {
                               UserId = t.UserId,
                               Username = tu.Username,
                               Email = tu.Email,
                               DepartureTime = ta.DepartureTime,
                               To=td.To,
                               From=td.From,
                               Status = t.Status
                           }).ToList();
            return records;
        }

        public List<TravelerRequest> GetRequests()
        {
            return _db.TravelerRequests.ToList();
        }

        public int updateRequest(TravelerRequestDto request)
        {
            throw new NotImplementedException();
        }
    }
}
