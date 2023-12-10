import { put, takeEvery } from 'redux-saga/effects'
import { 
  ADD_POST_ACCOUNT,
  LOAD_LAST_POSTS_ACCOUNTS,
  LOAD_POST_ACCOUNT,
  LOAD_POSTS_ACCOUNTS,
  REMOVE_POST_ACCOUNT,
  SET_LAST_POSTS_ACCOUNTS,
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

const loadLastPostsAccounts = (payload) => ({
  type: LOAD_LAST_POSTS_ACCOUNTS,
  payload
})

const setLastPostsAccounts = (postsAccounts) => ({
  type: SET_LAST_POSTS_ACCOUNTS,
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

const setPostAccount = (postAccount) => ({
  type: ADD_POST_ACCOUNT,
  postAccount
})

const removePostAccount = (slug) => ({
  type: REMOVE_POST_ACCOUNT,
  slug
})

function* fetchLoadPostsAccounts (action) {
  const response = yield fetch(`http://127.0.0.1:8000/accounts`)
  const data = yield response.json()
  yield put(setPostsAccounts(data))
}

function* fetchLoadLastPostsAccounts (action) {
  const response = yield fetch(`http://127.0.0.1:8000/last-accounts`)
  const data = yield response.json()
  yield put(setLastPostsAccounts(data))
}

function* fetchLoadPostAccount (action) {
  const response = yield fetch(`http://127.0.0.1:8000/accounts/${action.slug}`)
  const data = yield response.json()
  yield put(setSelectedPostAccount(data))
}

function* watcherPostsAccounts() {
  yield takeEvery(LOAD_POSTS_ACCOUNTS, fetchLoadPostsAccounts)
  yield takeEvery(LOAD_POST_ACCOUNT, fetchLoadPostAccount)
  yield takeEvery(LOAD_LAST_POSTS_ACCOUNTS, fetchLoadLastPostsAccounts)
}

export {
  watcherPostsAccounts,
  loadPostsAccounts,
  loadPostAccount,
  loadLastPostsAccounts,
  setPostAccount,
  removePostAccount
}