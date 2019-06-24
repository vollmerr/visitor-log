using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities {
  public class Campus {
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public Guid Id { get; set; }

    [Required]
    public string Name { get; set; }

    public bool IsActive { get; set; } = true;

    public IEnumerable<CampusRoom> Rooms { get; set; } = new List<CampusRoom>();
  }
}
