import { ActionType } from 'typesafe-actions';
import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import { addStudent, deleteStudent, editStudent, getStudents } from './actions';
import { IStudent, StudentActionTypes } from './types';
import {
  getStudentsRequest,
  getStudentsSuccess,
  deleteStudentSuccess,
  addStudentSuccess,
  editStudentSuccess,
  editStudentFail,
  addStudentFail,
  getStudentsFail,
  deleteStudentFail,
} from './reducer';
import { apiCaller } from '../../utils';

function* workGetStudents({ meta }: ActionType<typeof getStudents>) {
  try {
    yield put(getStudentsRequest());

    const students: IStudent[] = yield call(apiCaller, meta.method, meta.route);

    yield put(getStudentsSuccess(students));
  } catch (err: any) {
    yield put(getStudentsFail(err?.message));
  }
}

function* workDeleteStudent({
  meta,
  payload,
}: ActionType<typeof deleteStudent>) {
  try {
    yield call(apiCaller, meta.method, meta.route);

    yield put(deleteStudentSuccess(payload));
  } catch (err: any) {
    yield put(deleteStudentFail(err?.message));
  }
}

function* workAddStudent({ meta, payload }: ActionType<typeof addStudent>) {
  try {
    const createdAt = new Date(Date.now()).toISOString();

    const student: IStudent = yield call(apiCaller, meta.method, meta.route, {
      ...payload,
      createdAt,
    });

    yield put(addStudentSuccess(student));
  } catch (err: any) {
    yield put(addStudentFail(err?.message));
  }
}

function* workEditStudent({ meta, payload }: ActionType<typeof editStudent>) {
  try {
    const student: IStudent = yield call(
      apiCaller,
      meta.method,
      meta.route,
      payload
    );

    yield put(editStudentSuccess(student));
  } catch (err: any) {
    yield put(editStudentFail(err?.message));
  }
}

function* studentSaga() {
  yield all([
    takeLatest(StudentActionTypes.GET_STUDENTS, workGetStudents),
    takeLatest(StudentActionTypes.ADD_STUDENT, workAddStudent),
    takeLatest(StudentActionTypes.EDIT_STUDENT, workEditStudent),
    takeEvery(StudentActionTypes.DELETE_STUDENT, workDeleteStudent),
  ]);
}

export { studentSaga };
