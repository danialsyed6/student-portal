import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './ducks';
import dashboardSlice from './ducks/student/slice';

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: { dashboaed: dashboardSlice },
  middleware: [saga],
});

saga.run(rootSaga);

export default store;
