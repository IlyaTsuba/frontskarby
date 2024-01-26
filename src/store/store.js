  import { 
    combineReducers, 
    createStore, 
    applyMiddleware
  } from "redux";
  import { all } from 'redux-saga/effects';
  import { 
    watcherPostsAccounts, 
    watcherUser,
    watcherPostsArticles,
  } from "./action_creators";
  import createSagaMiddleware from 'redux-saga';
  import { 
    postsAccounts, 
    user, 
    postsArticles,
    ui
  } from "./reducers";
  import { composeWithDevTools } from 'redux-devtools-extension';


  const sagaMiddleware = createSagaMiddleware();
  function* rootSaga(){
    yield all([
      watcherPostsArticles(),
      watcherPostsAccounts(),
      watcherUser(),
    ])
  }

  const store = createStore(combineReducers({
    user,
    postsAccounts,
    postsArticles,
    ui
  }), composeWithDevTools(applyMiddleware(sagaMiddleware)))

  const handleChange = () => {
    const currentValue = store.getState()
    localStorage.setItem('user', `${JSON.stringify(currentValue.user)}`);
    localStorage.setItem('postsAccounts', `${JSON.stringify(currentValue.postsAccounts)}`);
    // localStorage.setItem('ui', `${JSON.stringify(currentValue.ui)}`);
  }

  store.subscribe(handleChange)

  sagaMiddleware.run(rootSaga);

  export { store }