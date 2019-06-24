import { createSelector } from 'reselect';

export const selectHome = state => state.home;

export const getExampleData = () => createSelector(
  selectHome,
  state => state.exampleData,
);

export const getLastFetched = () => createSelector(
  selectHome,
  state => state.lastFetched,
);
