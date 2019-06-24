using System;
using System.Collections.Generic;
using API.Entities;

namespace API.Services {
  public static class VisitorLogContextExtensions {
    public static void EnsureSeedDataForContext(this VisitorLogContext context) {
      // first, clear the database.  This ensures we can always start
      // fresh with each demo.  Not advised for production environments, obviously :-)

      context.Campuses.RemoveRange(context.Campuses);
      context.SaveChanges();

      // init seed data
      var campuses = new List<Campus>() {
        new Campus() {
          Id = new Guid("11111111-f58a-4b1f-b63a-8ee07a840bdf"),
          Name = "campus-1",
          IsActive = true,
          Rooms = new List<CampusRoom>() {
            new CampusRoom() {
              Id = new Guid("11111111-1111-4b1f-b63a-8ee07a840bdf"),
              Name = "campus-1-room-1",
              IsActive = true,
            },
            new CampusRoom() {
              Id = new Guid("11111111-2222-4b1f-b63a-8ee07a840bdf"),
              Name = "campus-1-room-2",
              IsActive = true,
            },
          },
        },
        new Campus() {
          Id = new Guid("22222222-f58a-4b1f-b63a-8ee07a840bdf"),
          Name = "campus-2",
          IsActive = true,
          Rooms = new List<CampusRoom>() {
            new CampusRoom() {
              Id = new Guid("22222222-1111-4b1f-b63a-8ee07a840bdf"),
              Name = "campus-2-room-1",
              IsActive = false,
            },
            new CampusRoom() {
              Id = new Guid("22222222-2222-4b1f-b63a-8ee07a840bdf"),
              Name = "campus-2-room-2",
              IsActive = true,
            },
          },
        },
        new Campus() {
          Id = new Guid("33333333-f58a-4b1f-b63a-8ee07a840bdf"),
          Name = "campus-3",
          IsActive = false,
          Rooms = new List<CampusRoom>() {
            new CampusRoom() {
              Id = new Guid("33333333-1111-4b1f-b63a-8ee07a840bdf"),
              Name = "campus-3-room-1",
              IsActive = true,
            },
            new CampusRoom() {
              Id = new Guid("33333333-2222-4b1f-b63a-8ee07a840bdf"),
              Name = "campus-3-room-2",
              IsActive = true,
            },
          },
        },
      };

      context.Campuses.AddRange(campuses);

      context.SaveChanges();
    }
  }
}
