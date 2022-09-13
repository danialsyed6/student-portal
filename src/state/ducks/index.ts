import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';
import { studentSaga } from './student/saga';
import studentReducer from './student/reducer';
import { IStudentState } from './student/types';

export interface IApplicationState {
  student: IStudentState;
}

export const rootReducer = combineReducers<IApplicationState>({
  student: studentReducer,
});

export function* rootSaga() {
  yield all([fork(studentSaga)]);
}
