import cls from './HomePage.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react"
import { 
  loadLastPostsAccounts,
  loadLastPostsArticles
} from "../../../store/action_creators"
import { BannerHomePage } from './BannerHomePage/BannerHomePage'
import { PostsAccounts } from './PostsAccounts/PostsAccounts'

const HomePage = () => {
  window.scrollTo(0, 0)
  const articles = useSelector(state => state.postsArticles.postsLastArticles)
  const accounts = useSelector(state => state.postsAccounts.postsLastAccounts)
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadLastPostsArticles(articles))
    dispatch(loadLastPostsAccounts(accounts))
  }, [])

  return (
    <main className={cls.container_homePage}>
      <BannerHomePage cls={cls}/>
      <section className={cls.section_interesting}>
        {/* <PostsArticles articles = {articles} /> */}
        <PostsAccounts accounts={accounts} cls={cls}/>
      </section>
    </main>
  )
}

export { HomePage }