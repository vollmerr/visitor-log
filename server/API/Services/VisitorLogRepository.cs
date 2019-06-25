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

    public async Task AddCampus(Campus campus) {
      if (campus is null) {
        throw new ArgumentNullException(nameof(campus));
      }

      await _context.AddAsync(campus);
    }

    public async Task<bool> ExistsCampus(Guid campusId) {
      return await _context.Campuses.AnyAsync(x => x.Id == campusId);
    }

    public async Task<Campus> GetCampusByIdAsync(Guid campusId) {
      return await _context.Campuses.Where(x => x.Id == campusId)
        .Include("Rooms").Include("AccessAreas").FirstOrDefaultAsync();
    }

    public async Task<IEnumerable<Campus>> GetCampusesAsync() {
      return await _context.Campuses.Include("Rooms").Include("AccessAreas").ToListAsync();
    }

    public async Task<IEnumerable<CampusRoom>> GetCampusRoomsAsync(Guid campusId) {
       return await _context.CampusRooms.Where(x => x.CampusId == campusId).ToListAsync();
    }

    public async Task<bool> SaveAsync() {
      return await _context.SaveChangesAsync() >= 0;
    }
  }
}
