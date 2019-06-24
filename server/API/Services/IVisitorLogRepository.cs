using API.Entities;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace API.Services {
  public interface IVisitorLogRepository {
    void AddCampus(Campus campus);
    Task<Campus> GetCampusByIdAsync(Guid campusId);
    Task<IEnumerable<Campus>> GetCampusesAsync();
    Task<CampusRoom> GetCampusRoomByIdAsync(Guid campusId, Guid roomId);
    Task<IEnumerable<CampusRoom>> GetCampusRoomsAsync(Guid campusId);
    Task<bool> SaveAsync();
  }
}
