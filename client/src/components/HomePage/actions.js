import { createAction } from 'redux-actions';

import * as C from './constants';

export const getExampleData = createAction(C.GET_EXAMPLE_DATA);
export const getExampleDataSuccess = createAction(C.GET_EXAMPLE_DATA_SUCCESS);
