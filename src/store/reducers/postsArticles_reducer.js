import { 
  SET_LAST_POSTS_ARTICLES,
  SET_POSTS_ARTICLES,
  SET_SELECTED_POST_ARTICLE
} from "../action_types";

const initialState = {
  postsArticles: [],
  postsLastArticles: [],
  selectedPostArticle: null
}

const postsArticles = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS_ARTICLES: {
      return ({
        ...state,
        postsArticles: action.postsArticles
      })
    }
    case SET_LAST_POSTS_ARTICLES: {
      return ({
        ...state,
        postsLastArticles: action.postsArticles
      })
    }
    case SET_SELECTED_POST_ARTICLE: {
      return ({
        ...state,
        selectedPostArticle: action.postArticle
      })
    }
    default : {
      return state
    }
  }
}

export { postsArticles }