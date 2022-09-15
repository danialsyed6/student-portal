import { call, put, takeLatest } from 'redux-saga/effects';

import { getStudentsSuccess } from './reducer';
import { IStudent, StudentActionTypes } from './types';
import { apiCaller } from '../../utils';

function* workGetStudents() {
  const students: IStudent[] = yield call(apiCaller, 'GET', '/students');

  yield put(getStudentsSuccess(students));
}

function* studentSaga() {
  yield takeLatest(StudentActionTypes.GET_STUDENTS, workGetStudents);
}

export { studentSaga };
