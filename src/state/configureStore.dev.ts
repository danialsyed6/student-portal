import { configureStore, Store } from '@reduxjs/toolkit';

import { rootSaga, rootReducer, IApplicationState } from './ducks';
import { saga } from './middlewares';

const configStore = (initialState: IApplicationState): Store => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [saga],
    preloadedState: initialState,
  });

  saga.run(rootSaga);

  return store;
};

export default configStore;
