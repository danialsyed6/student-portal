import { ActionType } from 'typesafe-actions';
import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import { deleteStudent, getStudents } from './actions';
import { IStudent, StudentActionTypes } from './types';
import {
  getStudentsRequest,
  getStudentsSuccess,
  deleteStudentSuccess,
} from './reducer';
import { apiCaller } from '../../utils';

function* workGetStudents({ meta }: ActionType<typeof getStudents>) {
  yield put(getStudentsRequest());

  const students: IStudent[] = yield call(apiCaller, meta.method, meta.route);

  yield put(getStudentsSuccess(students));
}

function* workDeleteStudent({
  meta,
  payload,
}: ActionType<typeof deleteStudent>) {
  // yield put(deleteStudentRequest());

  yield call(apiCaller, meta.method, meta.route);

  yield put(deleteStudentSuccess(payload));
}

function* studentSaga() {
  yield all([
    takeEvery(StudentActionTypes.DELETE_STUDENT, workDeleteStudent),
    takeLatest(StudentActionTypes.GET_STUDENTS, workGetStudents),
  ]);
}

export { studentSaga };
