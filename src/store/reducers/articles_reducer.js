import { SET_ARTS } from "../action_types";

const initialState = {
  articles: []
}

const articles = (state = initialState, action) => {
  switch (action.type) {
    case SET_ARTS: {
      return ({
        ...state,
        articles: action.articles
      })
    }
    default : {
      return state
    }
  }
}

export { articles }