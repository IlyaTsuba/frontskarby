import {
  SET_POSTS_ACCOUNTS,
  SET_SELECTED_POST_ACCOUNT 
} from "../action_types";

const initialState = {
  postsAccounts: [],
  selectedPostAccount: null
}

const postsAccounts = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS_ACCOUNTS: {
      return ({
        ...state,
        postsAccounts: action.postsAccounts
      })
    }
    case SET_SELECTED_POST_ACCOUNT: {
      return ({
        ...state,
        selectedPostAccount: action.postAccount
      })
    }
    default : {
      return state
    }
  }
}

export { postsAccounts }