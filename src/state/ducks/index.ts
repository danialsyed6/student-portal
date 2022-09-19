import { useSelector } from 'react-redux';
import { TypedUseSelectorHook } from 'react-redux';
import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';

import studentReducer from './student/reducer';
import { studentSaga } from './student/saga';
import { IStudentState } from './student/types';

export interface IApplicationState {
  student: IStudentState;
}

export const useAppSelector: TypedUseSelectorHook<IApplicationState> =
  useSelector;

export const rootReducer = combineReducers<IApplicationState>({
  student: studentReducer,
});

export function* rootSaga() {
  yield all([fork(studentSaga)]);
}
