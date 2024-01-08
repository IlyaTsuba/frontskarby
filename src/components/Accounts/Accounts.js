import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadPostsAccounts } from "../../store/action_creators"
import { Post } from "../../components"
import '../../scss/components/_accounts.scss'

const Accounts = () => {
  const postsInfo = useSelector(state => state.postsAccounts.postsAccounts)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadPostsAccounts())
  }, [])
  return (
    <section className='container-accounts'>
      {postsInfo.map(el => <Post post={el} key={el.slug}/>)}
    </section>
  )
}

export { Accounts }