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
  public class CampusRoomControllerTest {
    private Mock<IVisitorLogRepository> _mockRepo;
    private IMapper _mapper;
    private CampusRoomController _controller;
    public CampusRoomControllerTest() {
      _mockRepo = new Mock<IVisitorLogRepository>();

      _mapper = new MapperConfiguration(cfg => {
        cfg.AddProfile(new CampusProfile());
      }).CreateMapper();

      _controller = new CampusRoomController(_mockRepo.Object, _mapper);
    }

    [Theory, AutoData]
    public async void GetCampusRooms_returns_Ok(Campus campus, List<CampusRoom> rooms) {
      // arrange
      _mockRepo.Setup(x => x.GetCampusRoomsAsync(campus.Id)).ReturnsAsync(rooms);
      _mockRepo.Setup(x => x.ExistsCampus(campus.Id)).ReturnsAsync(true);
      // act
      var result = await _controller.GetCampusRooms(campus.Id);
      // assert
      Assert.IsType<OkObjectResult>(result);
    }

    [Theory, AutoData]
    public async void GetCampusRooms_returns_NotFound(Campus campus) {
      // arrange
      _mockRepo.Setup(x => x.ExistsCampus(campus.Id)).ReturnsAsync(false);
      // act
      var result = await _controller.GetCampusRooms(campus.Id);
      // assert
      Assert.IsType<NotFoundResult>(result);
    }

    [Theory, AutoData]
    public async void GetCampusRooms_returns_CampusRoomDtos(Campus campus, List<CampusRoom> rooms) {
      // arrange
      _mockRepo.Setup(x => x.GetCampusRoomsAsync(campus.Id)).ReturnsAsync(rooms);
      _mockRepo.Setup(x => x.ExistsCampus(campus.Id)).ReturnsAsync(true);
      // act
      var result = await _controller.GetCampusRooms(campus.Id) as OkObjectResult;
      // assert
      Assert.NotNull(result.Value);
      Assert.IsType<List<CampusRoomDto>>(result.Value);
    }
  }
}
