import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadPostsAccounts } from "../../../store/action_creators"
import cls from './Accounts.module.scss'
import { Post } from './Post'
import { BannerAccountsPage } from "../ui/BannerAccountsPage/BannerAccountsPage"
import { Navigate } from "../../../widgets"

const Accounts = () => {
  const postsInfo = useSelector(state => state.postsAccounts.postsAccounts)
  const activeTab = useSelector(state => state.ui.activeTab)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadPostsAccounts())
  }, [])
  return (
    <main className={cls.container_accounts}>
      <BannerAccountsPage cls={cls}/>
      <Navigate cls={cls}/>
      <section className={cls.section_accounts}>
        {
          activeTab !== 'all' 
          ? postsInfo
              .filter(({category}) => category === activeTab)
              .map(el => <Post post={el} key={el.slug} cls={cls}/>)
          : postsInfo
              .map(el => <Post post={el} key={el.slug} cls={cls}/>)
        }
      </section>
    </main>
  )
}

export { Accounts }