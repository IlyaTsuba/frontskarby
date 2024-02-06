import { useDispatch } from "react-redux"
import { ButtonMore, ButtonDelete } from "../../shared"
import { removePostAccount } from "../../store/action_creators"
import { Link } from "react-router-dom"


const PostMarked = ({postInfo, link, cls}) => {
  const dispatch = useDispatch()
  return (
    <div className={cls.block_mark}>
      <div className={cls.block_w_info}>
        <Link to={`/accounts/${link}`}>
          <img className={cls.block_w_info__img} src={'http://127.0.0.1:8000' + postInfo.avatar}/>
          <h2 className={cls.block_w_info__title}>{postInfo.name}</h2>
        </Link>
      </div>
      <div className={cls.block_w_btn}>
        <ButtonMore link={`/accounts/${link}`} cls={cls}/>
        <ButtonDelete onClick={() => dispatch(removePostAccount(postInfo.slug))} cls={cls}/>
      </div>
    </div>
  )
}

export { PostMarked }