import { createAction } from 'redux-actions';

import * as C from './constants';

export const getCampuses = createAction(C.GET_CAMPUSES);
export const getCampusesSuccess = createAction(C.GET_CAMPUSES_SUCCESS);
