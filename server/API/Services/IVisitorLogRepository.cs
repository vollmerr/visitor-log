using API.Entities;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace API.Services {
  public interface IVisitorLogRepository {
    Task AddCampus(Campus campus);
    Task<bool> ExistsCampus(Guid campusId);
    Task<Campus> GetCampusByIdAsync(Guid campusId);
    Task<IEnumerable<Campus>> GetCampusesAsync();
    Task<IEnumerable<CampusRoom>> GetCampusRoomsAsync(Guid campusId);
    Task<bool> SaveAsync();
  }
}
