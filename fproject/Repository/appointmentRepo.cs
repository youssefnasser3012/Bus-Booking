using fproject.Dtos;
using fproject.Models;

namespace fproject.Repository
{
    public interface appointmentRepo
    {
        public List<Appointment> GetAppointments();
        public Appointment GetAppointment(int id);
        public int insertAppointment(AppointmentDto appointementfromdto);
        public int updateAppointment(AppointmentDto appointment);
        public int deleteAppointment(int id);
        public void DecMax(int id);
    }
}
