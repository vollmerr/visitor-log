using System.Collections.Generic;
using System.Threading.Tasks;
using API.Entities;

namespace API.Services {
  public static class VisitorLogContextExtensions {
    public static void EnsureSeedDataForContext(this VisitorLogContext context) {
      // first, clear the database.  This ensures we can always start
      // fresh with each demo.  Not advised for production environments, obviously :-)

      context.Campuses.RemoveRange(context.Campuses);
      context.SaveChangesAsync();

      // init seed data
      var campuses = new List<Campus>() {
        new Campus() {
          // Id = new Guid("25320c5e-f58a-4b1f-b63a-8ee07a840bdf"),
          Name = "campus-1",
          IsActive = true,
        },
        new Campus() {
          // Id = new Guid("25320c5e-f58a-4b1f-b63a-8ee07a840bdf"),
          Name = "campus-2",
          IsActive = true,
        },
        new Campus() {
          // Id = new Guid("25320c5e-f58a-4b1f-b63a-8ee07a840bdf"),
          Name = "campus-3",
          IsActive = true,
        },
      };

      context.Campuses.AddRange(campuses);
      context.SaveChangesAsync();
    }
  }
}
