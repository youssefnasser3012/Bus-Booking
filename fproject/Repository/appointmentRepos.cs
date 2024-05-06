using fproject.Data;
using fproject.Dtos;
using fproject.Models;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace fproject.Repository
{
    public class appointmentRepos : appointmentRepo
    {
        private DataContext _db;
        public appointmentRepos(DataContext db)
        {
            _db = db;
        }
        public int deleteAppointment(int id)
        {
            var record=_db.Appointments.Where(x => x.AppointmentId == id).FirstOrDefault();
            if(record != null)
            {
                _db.Appointments.Remove(record);
            }
            return _db.SaveChanges();
        }

        public Appointment GetAppointment(int id)
        {
            var record = _db.Appointments.Where(x => x.AppointmentId == id).FirstOrDefault();
            return record ?? new();

        }

        public List<Appointment> GetAppointments()
        {
            return _db.Appointments.ToList();
        }

        public int insertAppointment(AppointmentDto appointementfromdto)
        {
            var appointement = new Appointment()
            {
                DepartureTime = appointementfromdto.DepartureTime,
                MaxTravelers = appointementfromdto.MaxTravelers,
                classe=appointementfromdto.classe,
                price=appointementfromdto.price,
            };
            _db.Appointments.Add(appointement);
            return _db.SaveChanges();
        }

        public int updateAppointment(AppointmentDto appointment)
        {
            var existing = _db.Appointments.Find(appointment.AppointmentId);
            existing.DepartureTime = appointment.DepartureTime;
            existing.MaxTravelers = appointment.MaxTravelers;
            existing.classe = appointment.classe;
            existing.price = appointment.price;
            _db.Appointments.Update(existing);
            return _db.SaveChanges();
           
        }
        public void DecMax(int id)
        {
            var existing=_db.Appointments.Find(id);
            existing.MaxTravelers--;
            _db.Appointments.Update(existing);
            
        }
    }
}
