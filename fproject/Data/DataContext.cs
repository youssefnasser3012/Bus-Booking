using fproject.Models;
using Microsoft.EntityFrameworkCore;

namespace fproject.Data
{
    public class DataContext : DbContext

    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Appointment> Appointments { get; set; }
        public DbSet<TravelerRequest> TravelerRequests { get; set; }
        public DbSet<Destination> Destinations { get; set; }



        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Define relationships between tables
           
            modelBuilder.Entity<TravelerRequest>()
                .HasOne(tr => tr.User)
                .WithMany(u => u.TravelerRequest)
                .HasForeignKey(tr => tr.UserId)
               .OnDelete(DeleteBehavior.Cascade); 

            modelBuilder.Entity<TravelerRequest>()
                .HasOne(tr => tr.Appointment)
                .WithMany(a => a.TravelerRequest)
                .HasForeignKey(tr => tr.AppointmentId)
                .OnDelete(DeleteBehavior.Cascade);


            modelBuilder.Entity<Destination>()
                    .HasOne(d => d.Appointment)
                    .WithMany(a => a.Destination)
                    .HasForeignKey(d => d.AppointmentId)
                    .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<TravelerRequest>()
                .HasOne(tr => tr.Destination)
                .WithMany(a => a.TravelerRequest)
                .HasForeignKey(tr => tr.DestinationId)
                .OnDelete(DeleteBehavior.Restrict);


            /*migrationBuilder.CreateTable(
    name: "Destinations",
    columns: table => new
    {
        DestinationId = table.Column<int>(nullable: false)
            .Annotation("SqlServer:Identity", "1, 1"),
        Place = table.Column<string>(maxLength: 100, nullable: false),
        AppointmentId = table.Column<int>(nullable: false)
    },
    constraints: table =>
    {
        table.PrimaryKey("PK_Destinations", x => x.DestinationId);
        table.ForeignKey(
            name: "FK_Destinations_Appointments_AppointmentId",
            column: x => x.AppointmentId,
            principalTable: "Appointments",
            principalColumn: "appointment_id",
            onDelete: ReferentialAction.Restrict); // or Restrict based on your requirements
    });
*/

        }

    }
}


