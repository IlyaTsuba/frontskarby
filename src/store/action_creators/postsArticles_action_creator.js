import { put, takeEvery } from 'redux-saga/effects'
import { 
  LOAD_POSTS_ARTICLES, LOAD_POST_ARTICLE, SET_POSTS_ARTICLES, SET_SELECTED_POST_ARTICLE,
} from '../action_types'

const loadPostsArticles = (payload) => ({
  type: LOAD_POSTS_ARTICLES,
  payload
})

const setPostsArticles = (postsArticles) => ({
  type: SET_POSTS_ARTICLES,
  postsArticles
})

const setSelectedPostArticle = (postArticle) => ({
  type: SET_SELECTED_POST_ARTICLE,
  postArticle
})

const loadPostArticle = (slug) => ({
  type: LOAD_POST_ARTICLE,
  slug
})

function* fetchLoadPostsArticles (action) {
  const response = yield fetch(`http://127.0.0.1:8000/articles`)
  const data = yield response.json()
  yield put(setPostsArticles(data))
}

function* fetchLoadPostArticle (action) {
  const response = yield fetch(`http://127.0.0.1:8000/articles/${action.slug}`)
  const data = yield response.json()
  yield put(setSelectedPostArticle(data))
}

function* watcherPostsArticles() {
  yield takeEvery(LOAD_POSTS_ARTICLES, fetchLoadPostsArticles)
  yield takeEvery(LOAD_POST_ARTICLE, fetchLoadPostArticle)
}

export {
  watcherPostsArticles,
  setPostsArticles,
  loadPostsArticles,
  setSelectedPostArticle,
  loadPostArticle,
}