import {
  createStore,
  applyMiddleware,
} from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import rootReducer from 'reducers';
import rootSaga from 'sagas';
import immatureHistory from './history';
import {
  router,
  saga,
} from './middlewares';

const store = createStore(rootReducer, {}, applyMiddleware(saga, router));
const history = syncHistoryWithStore(immatureHistory, store);

saga.run(rootSaga);

export {
  store,
  history,
};
