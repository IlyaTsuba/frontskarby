import { 
  ACTIVATION_REGISTRATION, 
  REGISTRATION, 
  SIGN_IN, 
  GET_USER_DATA, 
  SET_USER, 
  SET_EMAIL,
  SET_PASSWORD
} from '../action_types'
import { takeEvery, put } from 'redux-saga/effects'
import { getToken } from '../../utils'


const activateRegistration = (activationInfo) => ({
  type: ACTIVATION_REGISTRATION,
  activationInfo
})

const registration = (user) => ({
  type: REGISTRATION,
  user
})

const signIn = (actionSignIn) => ({
  type: SIGN_IN,
  actionSignIn
})

const userData = () => ({
  type: GET_USER_DATA
})

const setUser = (userInfo) => ({
  type: SET_USER,
  userInfo
})

const setEmail = (userInfo) => ({
  type: SET_EMAIL,
  userInfo
})

const setPassword = (userInfo) => ({
  type: SET_PASSWORD,
  userInfo
})

function* fetchActivationRegistration(action) {
  const response = yield fetch('http://127.0.0.1:8000/users/accounts/', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(action.activationInfo)
  });
  if (response.status === 204) {
    window.location.pathname = '/confirmed'
  }
}

function* fetchRegistration(action) {
  const response = yield fetch('http://127.0.0.1:8000/users/auth/users/', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(action.user)
  })
  if (response.status === 201) {
    // const userData = response.json().then(data => console.log(data));
    // yield put(setUser(userData))
    window.location.pathname = '/registration'
  }
}

function* fetchUserDataBase(action) {
  const token = yield getToken();
  const response = yield fetch('http://127.0.0.1:8000/users/auth/users/me/', {
    headers: { 
      'Authorization': `Bearer ${token}`,
    }
  });
  const data = yield response.json();
  yield put(setUser(data))
  if(!action) {
    window.location.pathname = '/'
  }
}

function* fetchSignIn(action) {
  const response = yield fetch('http://127.0.0.1:8000/users/auth/jwt/create/', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(action.actionSignIn)
  })
  const data = yield response.json();
  if (response.status === 200) {
    localStorage.setItem('access', `${data.access}`);
    localStorage.setItem('refresh', `${data.refresh}`);
    yield put(userData())
  }
}

function* fetchSetEmail(action) {
    const token = yield getToken();
    const response = yield fetch('http://127.0.0.1:8000/users/auth/users/set_email/', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(action.userInfo)
    })
    if(response.status === 204) {
      yield fetchUserDataBase(true)
  }
}

function* fetchSetPassword(action) {
  console.log(action)
  const token = yield getToken();
  const response = yield fetch('http://127.0.0.1:8000/users/auth/users/set_password/', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(action.userInfo)
  })
  if(response.status === 204) {
    const userInfo = localStorage.getItem('user')
    console.log(userInfo)
  }
}

function* watcherUser() {
  yield takeEvery(ACTIVATION_REGISTRATION, fetchActivationRegistration)
  yield takeEvery(REGISTRATION, fetchRegistration)
  yield takeEvery(SIGN_IN, fetchSignIn)
  yield takeEvery(GET_USER_DATA, fetchUserDataBase)
  yield takeEvery(SET_EMAIL, fetchSetEmail)
  yield takeEvery(SET_PASSWORD, fetchSetPassword)
}

export { 
  activateRegistration, 
  registration, 
  watcherUser,
  signIn,
  setUser,
  setEmail,
  setPassword,
}