import { 
  ACTIVATION_REGISTRATION, 
  REGISTRATION, 
  SIGN_IN, 
  GET_USER_DATA, 
  SET_USER 
} from '../action_types'
<<<<<<< HEAD
=======
// import { getToken } from "../../utils";
>>>>>>> 06c3e43373360997c6550ab1002b3fd3b8012ce4
import { takeEvery, put } from 'redux-saga/effects'


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

function* fetchActivationRegistration(action) {
  const response = yield fetch('https://studapi.teachmeskills.by/auth/users/activation/', {
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
  console.log(action)
  const response = yield fetch('http://127.0.0.1:8000/users/auth/users/', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(action.user)
  })
  console.log(response)
  // if (response.status === 201) {
  //   window.location.pathname = '/registration'
  // }
}

function* fetchUserDataBase() {
  // const token = yield getToken();
  // const response = yield fetch('https://studapi.teachmeskills.by/auth/users/me/', {
  //   headers: { 
  //     'Authorization': `Bearer ${token}`,
  //   }
  // });
  // const data = yield response.json();
  // yield put(setUser(data))
  // window.location.pathname = '/posts'
}

function* fetchSignIn(action) {
  const response = yield fetch('https://studapi.teachmeskills.by/auth/jwt/create/', {
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

function* watcherUser() {
  yield takeEvery(ACTIVATION_REGISTRATION, fetchActivationRegistration)
  yield takeEvery(REGISTRATION, fetchRegistration)
  yield takeEvery(SIGN_IN, fetchSignIn)
  yield takeEvery(GET_USER_DATA, fetchUserDataBase)
}

export { 
  activateRegistration, 
  registration, 
  watcherUser,
  signIn,
  setUser
}