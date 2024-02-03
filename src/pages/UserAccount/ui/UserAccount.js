import { useSelector } from "react-redux"
import { PostMarked } from "../../../widgets"
import cls from './UserAccount.module.scss'

const UserAccount = () => {
  window.scrollTo(0, 0)
  const userInfo = useSelector(state => state.user.user)
  const postInfo = useSelector(state => state.postsAccounts.postsMarkAccounts)
  return (
    <div className={cls.container_userAccount}>
      <div className={cls.block_userName}>
        <h1 className={cls.block_userName__name}>
          {userInfo?.username}
        </h1>
      </div>
      <section className={cls.block_w_userMarks}>
        <div className={cls.block_title}>
          <h2 className={cls.block_title__title}>Захванае</h2>
        </div>
        {postInfo.length > 0 ?
          postInfo.map(el => (
            <PostMarked
              postInfo={el} 
              key={el.slug}
              link={el.slug}
              cls={cls}
            />
          )
        ) : <p>Пуста</p>
        }
      </section>
    </div>
  )
}

export { UserAccount };