using System;
using System.ComponentModel.DataAnnotations;

namespace API.Entities {
  public class CampusRoom : CampusBase {
    [Required]
    public Guid CampusId { get; set; }
  }
}
