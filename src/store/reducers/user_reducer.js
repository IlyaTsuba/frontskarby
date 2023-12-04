import { SET_USER } from "../action_types";

const initialState = {
  user: null
}

const cacheState = () => {
  const userInfo = localStorage.getItem('user');
  return userInfo ? JSON.parse(userInfo) : initialState;
}

export default (state = cacheState(), action) => {
  console.log(action);
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