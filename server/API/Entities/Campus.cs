using System.Collections.Generic;

namespace API.Entities {
  public class Campus : CampusBase {
    public IEnumerable<CampusRoom> Rooms { get; set; } = new List<CampusRoom>();
  }
}
