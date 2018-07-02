import { applyMiddleware, createStore } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import immutableTransform from 'redux-persist-transform-immutable';
import { createLogger } from 'redux-logger'
import Thunk from 'redux-thunk';
import Reducer from '../reducers/index';

// ログ
const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

// const persistConfig = {
//   key: 'root',
//   storage,
//   transforms: [immutableTransform()],
//   blacklist: ['modals', 'popovers', 'user_list'],
// };

export default function createFinalStore() {
  // const persistedReducer = persistReducer(persistConfig, Reducer);

  const middlewares = applyMiddleware(Thunk, loggerMiddleware);

  const store = createStore(Reducer, {}, middlewares);
  // const persistor = persistStore(store);

  return store;
}
