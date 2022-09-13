import axios from 'axios';
import { call, put } from 'redux-saga/effects';
import { getDashboardSuccess } from './slice';

async function getDashboard() {
  const { data } = await axios.get('https://api.thecatapi.com/v1/breeds');
  data.length = 10;
  return data;
}

function* workGetDashboard() {
  yield call(getDashboard);
  yield put(getDashboardSuccess({ name: '' }));
}

export { workGetDashboard };
