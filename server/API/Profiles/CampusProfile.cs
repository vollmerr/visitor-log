using AutoMapper;
using API.Dtos;
using API.Entities;

namespace API.Profiles {
  public class CampusProfile : Profile {
    public CampusProfile() {
      CreateMap<Campus, CampusDto>();
      CreateMap<CampusForCreationDto, Campus>();

      CreateMap<CampusRoom, CampusRoomDto>();

      CreateMap<CampusAccessArea, CampusAccessAreaDto>();
    }
  }
}
