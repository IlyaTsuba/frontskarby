import { combineReducers, createStore, applyMiddleware } from "redux";
import user_reducer from './reducers/user_reducer'
import { all } from 'redux-saga/effects';
import { watcherUser } from "./action_creators";
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
function* rootSaga(){
  yield all([
    watcherUser()
  ])
}

const store = createStore(combineReducers({
  user: user_reducer,
}), applyMiddleware(sagaMiddleware))

const handleChange = () => {
  const currentValue = store.getState()
  localStorage.setItem('user', `${JSON.stringify(currentValue.user)}`);
}

store.subscribe(handleChange)

sagaMiddleware.run(rootSaga);

export { store }