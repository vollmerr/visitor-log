import { handleActions } from 'redux-actions';

import * as C from './constants';

export const initialState = {
  exampleData: [],
  lastFetched: null,
};

const getExampleDataSuccess = (state, action) => ({
  ...state,
  exampleData: action.payload,
  lastFetched: Date.now(),
});

export default handleActions({
  [C.GET_EXAMPLE_DATA_SUCCESS]: getExampleDataSuccess,
}, initialState);
