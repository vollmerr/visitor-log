using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using API.Entities;

namespace API.Dtos {
  public class CampusForCreationDto {
    [Required(AllowEmptyStrings = false)]
    public string Name { get; set; }
    public bool IsActive { get; set; } = true;
    public IEnumerable<CampusRoom> Rooms { get; set; } = new List<CampusRoom>();
  }
}
