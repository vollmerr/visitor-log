using API.Dtos;
using API.Services;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace API.Controllers {
  [Route("api/campuses")]
  [ApiController]
  public class CampusController : ControllerBase {
    private readonly IVisitorLogRepository _repository;
    private readonly IMapper _mapper;

    public CampusController(IVisitorLogRepository repository, IMapper mapper) {
      _repository = repository;
      _mapper = mapper;
    }

    [HttpGet]
    public async Task<IActionResult> GetCampuses() {
      var campusEnitities = await _repository.GetCampusesAsync();
      var campuses = _mapper.Map<IEnumerable<CampusDto>>(campusEnitities);
      return Ok(campuses);
    }

    [HttpGet]
    [Route("{id}")]
    public async Task<IActionResult> GetCampusById(Guid campusId) {
      var campusEntity = await _repository.GetCampusByIdAsync(campusId);

      if (campusEntity == null) {
        return NotFound();
      }

      var campus = _mapper.Map<CampusDto>(campusEntity);
      return Ok(campus);
    }
  }
}
