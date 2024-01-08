import {
  ADD_POST_ACCOUNT,
  REMOVE_POST_ACCOUNT,
  SET_LAST_POSTS_ACCOUNTS,
  SET_POSTS_ACCOUNTS,
  SET_SELECTED_POST_ACCOUNT, 
  SET_SELECTED_POST_ACCOUNT_WIDGET
} from "../action_types";

const initialState = {
  postsAccounts: [],
  postsLastAccounts: [],
  postsMarkAccounts: [],
  selectedPostAccount: null,
  selectedPostWidget: null,
}

const cacheState = () => {
  const postInfo = localStorage.getItem('postsAccounts');
  return postInfo ? JSON.parse(postInfo) : initialState;
}

const postsAccounts = (state = cacheState(), action) => {
  switch (action.type) {
    case SET_POSTS_ACCOUNTS: {
      return ({
        ...state,
        postsAccounts: action.postsAccounts
      })
    }
    case SET_LAST_POSTS_ACCOUNTS: {
      return ({
        ...state,
        postsLastAccounts: action.postsAccounts
      })
    }
    case SET_SELECTED_POST_ACCOUNT: {
      return ({
        ...state,
        selectedPostAccount: action.postAccount
      })
    }
    case ADD_POST_ACCOUNT: {
      if (state.postsMarkAccounts.filter(item => item.slug === action.postAccount.slug).length > 0) {
        return state
      } else {
        return {
          ...state,
          postsMarkAccounts: [...state.postsMarkAccounts, action.postAccount]
        }
      }
    }
    case REMOVE_POST_ACCOUNT: {
      return ({
        ...state,
        postsMarkAccounts: state.postsMarkAccounts.filter(el => el.slug !== action.slug)
      })
    }
    case SET_SELECTED_POST_ACCOUNT_WIDGET: {
      return ({
        ...state,
        selectedPostWidget: action.postAccount
      })
    }
    default : {
      return state
    }
  }
}

export { postsAccounts }