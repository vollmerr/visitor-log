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
      var roomEnitities = await _repository.GetCampusRoomsAsync(campusId);
      var rooms = _mapper.Map<IEnumerable<CampusRoomDto>>(roomEnitities);
      return Ok(rooms);
    }

    [HttpGet]
    [Route("{id}")]
    public async Task<IActionResult> GetCampusRoomById(Guid campusId, Guid roomId) {
      var roomEntity = await _repository.GetCampusRoomByIdAsync(campusId, roomId);

      if (roomEntity == null) {
        return NotFound();
      }

      var room = _mapper.Map<CampusRoomDto>(roomEntity);
      return Ok(room);
    }
  }
}
