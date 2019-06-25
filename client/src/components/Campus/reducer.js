import { handleActions } from 'redux-actions';
import { normalize } from 'normalizr';

import * as C from './constants';
import * as schema from './schema';

export const initialState = {
  campuses: {},
  accessAreas: {},
  rooms: {},
  lastFetched: null,
};

const getCampusesReducer = (state, action) => {
  const { entities } = normalize(action.payload, schema.campuses);

  return {
    campuses: entities.campuses,
    accessAreas: entities.accessAreas,
    rooms: entities.rooms,
    lastFetched: Date.now(),
  };
};

export default handleActions({
  [C.GET_CAMPUSES_SUCCESS]: getCampusesReducer,
}, initialState);
