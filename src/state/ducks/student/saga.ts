import axios from 'axios';
import { call, put } from 'redux-saga/effects';
import { getStudentsSuccess } from './slice';

async function getStudents() {
  const { data } = await axios.get('https://api.thecatapi.com/v1/breeds');
  data.length = 10;
  return data;
}

function* workGetStudents() {
  yield call(getStudents);
  yield put(getStudentsSuccess({ name: '' }));
}

export { workGetStudents };
