using System;
using System.Collections.Generic;

namespace API.Dtos {
  public class CampusDto {
    public Guid Id { get; set; }
    public string Name { get; set; }
    public bool IsActive { get; set; }
    public IEnumerable<CampusRoomDto> Rooms { get; set; }
    public IEnumerable<CampusAccessAreaDto> AccessAreas { get; set; }
  }
}
