using API.Controllers;
using API.Dtos;
using API.Entities;
using API.Profiles;
using API.Services;
using AutoFixture.Xunit2;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Moq;
using System.Collections.Generic;
using Xunit;

namespace API.Tests {
  public class CampusControllerTest {
    private Mock<IVisitorLogRepository> _mockRepo;
    private IMapper _mapper;
    private CampusController _controller;
    public CampusControllerTest() {
      _mockRepo = new Mock<IVisitorLogRepository>();

      _mapper = new MapperConfiguration(cfg => {
        cfg.AddProfile(new CampusProfile());
      }).CreateMapper();

      _controller = new CampusController(_mockRepo.Object, _mapper);
    }

    [Fact]
    public async void GetCampuses_returns_200() {
      // arrange
      // act
      var result = await _controller.GetCampuses();
      // assert
      Assert.IsType<OkObjectResult>(result);
    }

    [Theory, AutoData]
    public async void GetCampuses_returns_CampusDtos(List<Campus> campuses) {
      // arrange
      _mockRepo.Setup(x => x.GetCampusesAsync()).ReturnsAsync(campuses);
      // act
      var result = await _controller.GetCampuses() as OkObjectResult;
      // assert
      Assert.NotNull(result.Value);
      Assert.IsType<List<CampusDto>>(result.Value);
    }

    [Theory, AutoData]
    public async void GetCampus_returns_200(Campus campus) {
      // arrange
      _mockRepo.Setup(x => x.GetCampusByIdAsync(campus.Id)).ReturnsAsync(campus);
      // act
      var result = await _controller.GetCampusById(campus.Id);
      // assert
      Assert.IsType<OkObjectResult>(result);
    }

    [Theory, AutoData]
    public async void GetCampus_returns_404(Campus campus) {
      // arrange
      // act
      var result = await _controller.GetCampusById(campus.Id);
      // assert
      Assert.IsType<NotFoundResult>(result);
    }

    [Theory, AutoData]
    public async void GetCampus_returns_CampusDto(Campus campus) {
      // arrange
      _mockRepo.Setup(x => x.GetCampusByIdAsync(campus.Id)).ReturnsAsync(campus);
      // act
      var result = await _controller.GetCampusById(campus.Id) as OkObjectResult;
      // assert
      Assert.NotNull(result.Value);
      Assert.IsType<CampusDto>(result.Value);
    }
  }
}
