import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { loadPostArticle } from "../../store/action_creators";


const SelectedPostArticle = () => {
  const postInfo = useSelector(state => state.postsArticles.selectedPostArticle)
  console.log(postInfo)
  const dispatch = useDispatch();
  const {slug} = useParams()
  useEffect(() => {
    dispatch(loadPostArticle(slug))
  }, [slug])
  return (
    <div>
      post
    </div>
  )
}

export { SelectedPostArticle  }