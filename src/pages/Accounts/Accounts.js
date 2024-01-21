import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadPostsAccounts } from "../../store/action_creators"
import '../../scss/components/_accounts.scss'
import { Post } from './Post'
import { BannerAccountsPage } from "./BannerAccountsPage/BannerAccountsPage"
import { Navigate } from "../../widgets"

const Accounts = () => {
  const postsInfo = useSelector(state => state.postsAccounts.postsAccounts)
  const activeTab = useSelector(state => state.ui.activeTab)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadPostsAccounts())
  }, [])
  return (
    <main className='container-accounts'>
      <BannerAccountsPage />
      <Navigate />
      <section className='section-accounts'>
        {
          activeTab !== 'all' 
          ? postsInfo
              .filter(({category}) => category === activeTab)
              .map(el => <Post post={el} key={el.slug}/>)
          : postsInfo
              .map(el => <Post post={el} key={el.slug}/>)
        }
      </section>
    </main>
  )
}

export { Accounts }