import { ActionType } from 'typesafe-actions';
import { all, put, takeLatest } from 'redux-saga/effects';

import { getDashboard } from './actions';
import {
  getDashboardFail,
  getDashboardRequest,
  getDashboardSuccess,
} from './reducer';
import { DashboardActionTypes } from './types';

function* workgetDashboard({ payload }: ActionType<typeof getDashboard>) {
  try {
    yield put(getDashboardRequest());
    yield put(getDashboardSuccess(payload));
  } catch (err: any) {
    yield put(getDashboardFail(err?.message));
  }
}

function* dashboardSaga() {
  yield all([takeLatest(DashboardActionTypes.GET_DASHBOARD, workgetDashboard)]);
}

export { dashboardSaga };
