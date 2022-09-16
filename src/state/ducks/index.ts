import { useSelector } from 'react-redux';
import { TypedUseSelectorHook } from 'react-redux';
import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';

import studentReducer from './student/reducer';
import dashboardReducer from './dashboard/reducer';
import { studentSaga } from './student/saga';
import { IStudentState } from './student/types';
import { IDashboardState } from './dashboard/types';
import { dashboardSaga } from './dashboard/saga';

export interface IApplicationState {
  student: IStudentState;
  dashboard: IDashboardState;
}

export const useAppSelector: TypedUseSelectorHook<IApplicationState> =
  useSelector;

export const rootReducer = combineReducers<IApplicationState>({
  student: studentReducer,
  dashboard: dashboardReducer,
});

export function* rootSaga() {
  yield all([fork(studentSaga), fork(dashboardSaga)]);
}
