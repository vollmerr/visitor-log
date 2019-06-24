using System;

namespace API.Dtos {
  public class CampusDto {
    public Guid Id { get; set; }
    public string Name { get; set; }
    public bool IsActive { get; set; }
  }
}
