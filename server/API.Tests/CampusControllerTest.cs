using API.Controllers;
using API.Dtos;
using API.Entities;
using API.Profiles;
using API.Services;
using AutoFixture.Xunit2;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Moq;
using System;
using System.Collections.Generic;
using Xunit;

namespace API.Tests {
  public class CampusControllerTest {
    private Mock<IVisitorLogRepository> _mockRepo;
    private IMapper _mapper;
    private CampusController _controller;
    public CampusControllerTest() {
      _mockRepo = new Mock<IVisitorLogRepository>();
      _mockRepo.Setup(x => x.SaveAsync()).ReturnsAsync(true);

      _mapper = new MapperConfiguration(cfg => {
        cfg.AddProfile(new CampusProfile());
      }).CreateMapper();

      _controller = new CampusController(_mockRepo.Object, _mapper);
    }

    [Theory, AutoData]
    public async void AddCampus_returnsCreatedAt(CampusForCreationDto campus) {
      // arrange
      // act
      var result = await _controller.AddCampus(campus);
      // assert
      Assert.IsType<CreatedAtRouteResult>(result);
    }

    [Theory, AutoData]
    public async void AddCampus_returnsCampusDto(CampusForCreationDto campus) {
      // arrange
      // act
      var result = await _controller.AddCampus(campus) as CreatedAtRouteResult;
      // assert
      Assert.NotNull(result.Value);
      Assert.IsType<CampusDto>(result.Value);
    }

    [Theory, AutoData]
    public async void AddCampus_throws_onSaveError(CampusForCreationDto campus) {
      // arrange
      _mockRepo.Setup(x => x.SaveAsync()).ReturnsAsync(false);

      // assert
      await Assert.ThrowsAsync<Exception>(
        // act
        async() => await _controller.AddCampus(campus)
      );
    }

    [Fact]
    public async void GetCampuses_returnsOk() {
      // arrange
      // act
      var result = await _controller.GetCampuses();
      // assert
      Assert.IsType<OkObjectResult>(result);
    }

    [Theory, AutoData]
    public async void GetCampuses_returnsCampusDtos(List<Campus> campuses) {
      // arrange
      _mockRepo.Setup(x => x.GetCampusesAsync()).ReturnsAsync(campuses);
      // act
      var result = await _controller.GetCampuses() as OkObjectResult;
      // assert
      Assert.NotNull(result.Value);
      Assert.IsType<List<CampusDto>>(result.Value);
    }

    [Theory, AutoData]
    public async void GetCampusById_returnsOk(Campus campus) {
      // arrange
      _mockRepo.Setup(x => x.GetCampusByIdAsync(campus.Id)).ReturnsAsync(campus);
      // act
      var result = await _controller.GetCampusById(campus.Id);
      // assert
      Assert.IsType<OkObjectResult>(result);
    }

    [Theory, AutoData]
    public async void GetCampusById_returnsCampusDto(Campus campus) {
      // arrange
      _mockRepo.Setup(x => x.GetCampusByIdAsync(campus.Id)).ReturnsAsync(campus);
      // act
      var result = await _controller.GetCampusById(campus.Id) as OkObjectResult;
      // assert
      Assert.NotNull(result.Value);
      Assert.IsType<CampusDto>(result.Value);
    }

    [Theory, AutoData]
    public async void GetCampusById_returnsNotFound_whenNoCampus(Campus campus) {
      // arrange
      // act
      var result = await _controller.GetCampusById(campus.Id);
      // assert
      Assert.IsType<NotFoundResult>(result);
    }
  }
}
