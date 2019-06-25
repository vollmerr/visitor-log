using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Services {
  public class VisitorLogContext : DbContext {
    public DbSet<Campus> Campuses { get; set; }
    public DbSet<CampusRoom> CampusRooms { get; set; }
    public DbSet<CampusAccessArea> CampusAccessAreas { get; set; }

    public VisitorLogContext(DbContextOptions<VisitorLogContext> options) : base(options) { }
  }
}
