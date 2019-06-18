import {
  all, takeEvery, call, put,
} from 'redux-saga/effects';
import { withAsync, api } from 'state-template';

import * as actions from './actions';
import * as C from './constants';

export function* getExampleData() {
  const url = `${process.env.REACT_APP_EXAMPLE_API}/todos`;
  const data = yield call(api.request, url);
  yield put(actions.getExampleDataSuccess(data));
}

export default function* exampleSaga() {
  yield all([
    takeEvery(C.GET_EXAMPLE_DATA, withAsync(getExampleData)),
  ]);
}
