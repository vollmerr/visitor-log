using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using API.Entities;

namespace API.Services {
  public class VisitorLogContext : DbContext {
    public DbSet<Campus> Campuses { get; set; }

    public VisitorLogContext(DbContextOptions<VisitorLogContext> options) : base(options) {

    }

    public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default(CancellationToken)) {
      // get added or updated entries
      var addedOrUpdatedEntries = ChangeTracker.Entries()
        .Where(x => (x.State == EntityState.Added || x.State == EntityState.Modified));

      // fill out the audit fields
      foreach (var entry in addedOrUpdatedEntries) {
        var entity = entry.Entity as AuditableEntity;

        if (entry.State == EntityState.Added) {
          // entity.CreatedBy = _userInfoService.UserId;
          entity.CreatedBy = "TODO";
          entity.CreatedOn = DateTime.UtcNow;
        }

        // entity.UpdatedBy = _userInfoService.UserId;
        entity.UpdatedBy = "TODO";
        entity.UpdatedOn = DateTime.UtcNow;
      }

      return base.SaveChangesAsync(cancellationToken);
    }
  }
}
