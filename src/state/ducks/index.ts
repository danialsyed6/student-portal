import { takeLatest } from 'redux-saga/effects';
import { workGetDashboard } from './dashboard/saga';

import { getDashboardRequest } from './dashboard/slice';

function* rootSaga() {
  yield takeLatest(getDashboardRequest.type, workGetDashboard);
}

export default rootSaga;
