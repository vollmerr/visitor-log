using API.Dtos;
using API.Entities;
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

    [HttpPost]
    public async Task<IActionResult> AddCampus(CampusForCreationDto campus) {
      var campusEnitity = _mapper.Map<Campus>(campus);
      await _repository.AddCampus(campusEnitity);

      if (!await _repository.SaveAsync()) {
        throw new Exception("Failed to add campus on save");
      }

      var campusToReturn = _mapper.Map<CampusDto>(campusEnitity);
      return CreatedAtRoute("GetCampusById", new { campusId = campusToReturn.Id }, campusToReturn);
    }

    [HttpGet]
    public async Task<IActionResult> GetCampuses() {
      var campusEnitities = await _repository.GetCampusesAsync();
      var campusesToReturn = _mapper.Map<IEnumerable<CampusDto>>(campusEnitities);
      return Ok(campusesToReturn);
    }

    [HttpGet]
    [Route("{campusId}", Name = "GetCampusById")]
    public async Task<IActionResult> GetCampusById(Guid campusId) {
      var campusEntity = await _repository.GetCampusByIdAsync(campusId);

      if (campusEntity is null) {
        return NotFound();
      }

      var campusToReturn = _mapper.Map<CampusDto>(campusEntity);
      return Ok(campusToReturn);
    }
  }
}
