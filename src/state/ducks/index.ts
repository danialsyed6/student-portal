import { takeLatest } from 'redux-saga/effects';
import { workGetStudents } from './student/saga';

import { getStudentsRequest } from './student/slice';

function* rootSaga() {
  yield takeLatest(getStudentsRequest.type, workGetStudents);
}

export default rootSaga;
