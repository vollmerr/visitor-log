using API.Dtos;
using API.Services;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace API.Controllers {
  [Route("api/campuses/{campusId}/rooms")]
  [ApiController]
  public class CampusRoomController : ControllerBase {
    private readonly IVisitorLogRepository _repository;
    private readonly IMapper _mapper;

    public CampusRoomController(IVisitorLogRepository repository, IMapper mapper) {
      _repository = repository;
      _mapper = mapper;
    }

    [HttpGet]
    public async Task<IActionResult> GetCampusRooms(Guid campusId) {
      if (!await _repository.ExistsCampus(campusId)) {
        return NotFound();
      }

      var roomEnitities = await _repository.GetCampusRoomsAsync(campusId);
      var roomsToReturn = _mapper.Map<IEnumerable<CampusRoomDto>>(roomEnitities);
      return Ok(roomsToReturn);
    }
  }
}
