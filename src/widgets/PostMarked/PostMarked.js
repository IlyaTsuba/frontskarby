import { useDispatch } from "react-redux"
import { ButtonMore, ButtonDelete } from "../../shared"
import { removePostAccount } from "../../store/action_creators"
import { Link } from "react-router-dom"


const PostMarked = ({postInfo, link}) => {
  const dispatch = useDispatch()
  return (
    <div className='block-mark'>
      <div className='block-w-info'>
        <Link to={`/accounts/${link}`}>
          <img className='block-w-info__img' src={'http://127.0.0.1:8000/'+ postInfo.avatar}/>
          <h2 className='block-w-info__title'>{postInfo.name}</h2>
        </Link>
      </div>
      <div className='block-w-btn'>
        <ButtonMore link={`/accounts/${link}`}/>
        <ButtonDelete onClick={() => dispatch(removePostAccount(postInfo.slug))}/>
      </div>
    </div>
  )
}

export { PostMarked }