using System;

namespace API.Dtos {
  public class CampusAccessAreaDto {
    public Guid Id { get; set; }
    public string Name { get; set; }
    public bool IsActive { get; set; }
    public Guid CampusId { get; set; }
  }
}
