import { createSelector } from 'reselect';
import { api } from 'state-template';

export const selectCampus = state => state.campus;

export const getCampuses = () => createSelector(
  selectCampus,
  state => state.campuses,
);

export const getShouldFetch = () => createSelector(
  selectCampus,
  state => api.shouldFetch(state.lastFetched),
);
