import { 
  combineReducers, 
  createStore, 
  applyMiddleware
} from "redux";
import { all } from 'redux-saga/effects';
import { 
  watcherPostsAccounts, 
  watcherUser,
  watcherPostsArticles
} from "./action_creators";
import createSagaMiddleware from 'redux-saga';
import { 
  postsAccounts, 
  user, 
  postsArticles
} from "./reducers";


const sagaMiddleware = createSagaMiddleware();
function* rootSaga(){
  yield all([
    watcherPostsArticles(),
    watcherPostsAccounts(),
    watcherUser()
  ])
}

const store = createStore(combineReducers({
  user: user,
  postsAccounts: postsAccounts,
  postsArticles: postsArticles,
}), applyMiddleware(sagaMiddleware))

const handleChange = () => {
  const currentValue = store.getState()
  localStorage.setItem('user', `${JSON.stringify(currentValue.user)}`);
  localStorage.setItem('postsAccounts', `${JSON.stringify(currentValue.postsAccounts)}`);
}

store.subscribe(handleChange)

sagaMiddleware.run(rootSaga);

export { store }