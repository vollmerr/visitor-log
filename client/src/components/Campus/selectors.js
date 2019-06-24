import { createSelector } from 'reselect';
import { api } from 'state-template';

export const selectCampus = state => state.campus;
export const selectCampuses = state => selectCampus(state).campuses;
export const selectCampusRooms = state => selectCampus(state).rooms;

export const getCampuses = () => createSelector(
  selectCampuses,
  campuses => Object.values(campuses),
);

export const getCampusById = campusId => createSelector(
  selectCampuses,
  campuses => campuses[campusId],
);

export const getCampusRooms = campusId => createSelector(
  [selectCampuses, selectCampusRooms],
  (campuses, rooms) => campuses[campusId].rooms.map(roomId => rooms[roomId]),
);

export const getShouldFetch = () => createSelector(
  selectCampus,
  state => api.shouldFetch(state.lastFetched),
);
