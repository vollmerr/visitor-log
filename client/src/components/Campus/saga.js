import {
  all, takeEvery, call, put,
} from 'redux-saga/effects';
import { withAsync, api } from 'state-template';

import * as actions from './actions';
import * as C from './constants';

export function* getCampusesSaga() {
  const url = `${process.env.REACT_APP_API_URL}/campuses`;
  const data = yield call(api.request, url);
  yield put(actions.getCampusesSuccess(data));
}

export default function* campusSaga() {
  yield all([
    takeEvery(C.GET_CAMPUSES, withAsync(getCampusesSaga)),
  ]);
}
