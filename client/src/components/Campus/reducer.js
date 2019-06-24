import { handleActions } from 'redux-actions';

import * as C from './constants';

export const initialState = {
  campuses: [],
  lastFetched: null,
};

const getCampusesReducer = (state, action) => ({
  campuses: action.payload,
  lastFetched: Date.now(),
});

export default handleActions({
  [C.GET_CAMPUSES_SUCCESS]: getCampusesReducer,
}, initialState);
