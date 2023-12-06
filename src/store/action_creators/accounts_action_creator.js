import { put, takeEvery } from 'redux-saga/effects'
import { 
  LOAD_ACCS,
  SET_ACCS
} from '../action_types'

const loadAccounts = (payload) => ({
  type: LOAD_ACCS,
  payload
})

const setAccounts = (accounts) => ({
  type: SET_ACCS,
  accounts
})

function* fetchLoadAccounts (action) {
  const response = yield fetch(`http://127.0.0.1:8000/accounts`)
  const data = yield response.json()
  console.log(data)
  yield put(setAccounts(data))
}

function* watcherAccounts() {
  yield takeEvery(LOAD_ACCS, fetchLoadAccounts)
}

export {
  watcherAccounts,
  setAccounts,
  loadAccounts
}