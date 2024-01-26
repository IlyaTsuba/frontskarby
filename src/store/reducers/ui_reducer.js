import { ACTIVE_TAB } from "../action_types";

const initialState = {
  activeTab: 'all'
}

// const cacheState = () => {
//   const uiInfo = localStorage.getItem('ui');
//   return uiInfo ? JSON.parse(uiInfo) : initialState;
// }

const ui = (state = initialState, action ) => {
  switch (action.type) {
    case ACTIVE_TAB: {
      return ({
        ...state,
        activeTab: action.tabs
      })
    }
    default: {
      return state
    }
  }
}

export { ui }