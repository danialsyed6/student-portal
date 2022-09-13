import { call, put, takeLatest } from 'redux-saga/effects';
import { apiCaller } from '../../utils';
import { getStudentsSuccess } from './reducer';
import { IStudent, StudentActionTypes } from './types';

function* workGetStudents() {
  const students: IStudent[] = yield call(apiCaller, 'GET', '/students');

  yield put(getStudentsSuccess(students));
}

function* studentSaga() {
  yield takeLatest(StudentActionTypes.GET_STUDENTS, workGetStudents);
}

export { studentSaga };
