import { useDispatch } from "react-redux"
import { ButtonMore, ButtonDelete } from "../../Buttons"
import { removePostAccount } from "../../../store/action_creators"


const Mark = ({postInfo}) => {
  const dispatch = useDispatch()
  return (
    <div className='block-mark'>
      <div className='block-w-info'>
        <img className='block-w-info__img' src={postInfo.avatar}/>
        <h2 className='block-w-info__title'>{postInfo.name}</h2>
      </div>
      <div className='block-w-btn'>
        <ButtonMore link={`/accounts/${postInfo.slug}`}/>
        <ButtonDelete onClick={() => dispatch(removePostAccount(postInfo.slug))}/>
      </div>
    </div>
  )
}

export { Mark }