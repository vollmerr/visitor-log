using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities {
  public class CampusBase : AuditableEntity {
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public Guid Id { get; set; }

    [Required]
    public string Name { get; set; }

    public bool IsActive { get; set; } = true;
  }
}
