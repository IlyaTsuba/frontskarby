import { combineReducers, createStore, applyMiddleware } from "redux";
import { all } from 'redux-saga/effects';
import { watcherAccounts, watcherArticles, watcherUser } from "./action_creators";
import createSagaMiddleware from 'redux-saga';
import { accounts, user, articles } from "./reducers";

const sagaMiddleware = createSagaMiddleware();
function* rootSaga(){
  yield all([
    watcherArticles(),
    watcherAccounts(),
    watcherUser()
  ])
}

const store = createStore(combineReducers({
  user: user,
  accounts: accounts,
  articles: articles,
}), applyMiddleware(sagaMiddleware))

const handleChange = () => {
  const currentValue = store.getState()
  localStorage.setItem('user', `${JSON.stringify(currentValue.user)}`);
}

store.subscribe(handleChange)

sagaMiddleware.run(rootSaga);

export { store }