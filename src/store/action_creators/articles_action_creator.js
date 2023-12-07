import { put, takeEvery } from 'redux-saga/effects'
import { 
  LOAD_ARTS,
  SET_ARTS
} from '../action_types'

const loadArticles = (payload) => ({
  type: LOAD_ARTS,
  payload
})

const setArticles = (articles) => ({
  type: SET_ARTS,
  articles
})

function* fetchLoadArticles (action) {
  const response = yield fetch(`http://127.0.0.1:8000/articles`)
  const data = yield response.json()
  yield put(setArticles(data))
}

function* watcherArticles() {
  yield takeEvery(LOAD_ARTS, fetchLoadArticles)
}

export {
  watcherArticles,
  setArticles,
  loadArticles
}