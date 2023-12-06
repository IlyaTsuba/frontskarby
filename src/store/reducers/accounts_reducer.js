import { SET_ACCS } from "../action_types";

const initialState = {
  accounts: []
}

const accounts = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACCS: {
      return ({
        ...state,
        accounts: action.accounts
      })
    }
    default : {
      return state
    }
  }
}

export { accounts }