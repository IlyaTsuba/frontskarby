import { SET_USER } from "../action_types";

const initialState = {
  user: null
}

const cacheState = () => {
  const userInfo = localStorage.getItem('user');
  return userInfo ? JSON.parse(userInfo) : initialState;
}

const user = (state = cacheState(), action) => {
  switch (action.type) {
    case SET_USER: {
      return ({
        ...state,
        user: action.userInfo
      })
    }
    default: return state
  }
}

export { user }