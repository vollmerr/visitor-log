using System;

namespace API.Dtos {
  public class CampusRoomDto {
    public Guid Id { get; set; }
    public string Name { get; set; }
    public bool IsActive { get; set; }
    public Guid CampusId { get; set; }
  }
}
