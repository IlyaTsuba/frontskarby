import { useSelector } from "react-redux"
import { Mark } from "./Mark"
import '../../scss/components/_userAccount.scss'

const UserAccount = () => {
  const userInfo = useSelector(state => state.user.user)
  const postInfo = useSelector(state => state.postsAccounts.postsMarkAccounts)
  return (
    <div className='container-userAccount'>
      <div className='block-userName'>
        <h1 className='block-userName__name'>{userInfo.username}</h1>
      </div>
      <section className='block-w-userMarks'>
        <div className='block-title'>
          <h2 className='block-title__title'>Захванае</h2>
        </div>
        {postInfo.length > 0 ?
          postInfo.map(el => <Mark postInfo={el} key={el.slug}/>)
          :
          <p>Пусто</p>
        }
      </section>
    </div>
  )
}

export { UserAccount }