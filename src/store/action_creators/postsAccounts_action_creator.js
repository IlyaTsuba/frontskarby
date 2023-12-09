import { put, takeEvery } from 'redux-saga/effects'
import { 
  LOAD_POST_ACCOUNT,
  LOAD_POSTS_ACCOUNTS,
  SET_POSTS_ACCOUNTS,
  SET_SELECTED_POST_ACCOUNT
} from '../action_types'

const loadPostsAccounts = (payload) => ({
  type: LOAD_POSTS_ACCOUNTS,
  payload
})

const setPostsAccounts = (postsAccounts) => ({
  type: SET_POSTS_ACCOUNTS,
  postsAccounts
})

const setSelectedPostAccount = (postAccount) => ({
  type: SET_SELECTED_POST_ACCOUNT,
  postAccount
})

const loadPostAccount = (slug) => ({
  type: LOAD_POST_ACCOUNT,
  slug
})

function* fetchLoadPostsAccounts (action) {
  const response = yield fetch(`http://127.0.0.1:8000/accounts`)
  const data = yield response.json()
  yield put(setPostsAccounts(data))
}

function* fetchLoadPostAccount (action) {
  const response = yield fetch(`http://127.0.0.1:8000/accounts/${action.slug}`)
  const data = yield response.json()
  console.log(data)
  yield put(setSelectedPostAccount(data))
}

function* watcherPostsAccounts() {
  yield takeEvery(LOAD_POSTS_ACCOUNTS, fetchLoadPostsAccounts)
  yield takeEvery(LOAD_POST_ACCOUNT, fetchLoadPostAccount)
}

export {
  watcherPostsAccounts,
  setPostsAccounts,
  loadPostsAccounts,
  setSelectedPostAccount,
  loadPostAccount
}