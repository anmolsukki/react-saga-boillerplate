import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../Reducer/appReducers';
import usersSaga from "../Sagas/Watchers/sagas";

const sagaMiddleware = createSagaMiddleware();

export function configureStore(initialState) {
  const middleware = [sagaMiddleware];

  const logger = store => {
    return next => {
      return action => {
        console.log("[Middleware] dispatching", action);
        const result = next(action);
        console.log("[Middleware] next state", store.getState())
        return result;
      }
    }
  }

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middleware, logger)));
  sagaMiddleware.run(usersSaga);

  return store;
}
