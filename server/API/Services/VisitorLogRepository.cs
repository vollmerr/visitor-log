using API.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Services {
  public class VisitorLogRepository : IVisitorLogRepository {
    private VisitorLogContext _context;

    public VisitorLogRepository(VisitorLogContext context) {
      _context = context;
    }

    public void AddCampus(Campus campus) {
      if (campus is null) {
        throw new ArgumentNullException(nameof(campus));
      }

      _context.Add(campus);
    }

    public async Task<Campus> GetCampusByIdAsync(Guid campusId) {
      return await _context.Campuses.Where(x => x.Id == campusId).FirstOrDefaultAsync();
    }

    public async Task<IEnumerable<Campus>> GetCampusesAsync() {
      return await _context.Campuses.ToListAsync();
    }

    public Task<CampusRoom> GetCampusRoomByIdAsync(Guid campusId, Guid roomId) {
      throw new NotImplementedException();
    }

    public Task<IEnumerable<CampusRoom>> GetCampusRoomsAsync(Guid campusId) {
      throw new NotImplementedException();
    }

    public async Task<bool> SaveAsync() {
      return await _context.SaveChangesAsync() >= 0;
    }
  }
}
