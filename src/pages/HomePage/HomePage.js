import { 
  PostsArticles,
  PostsAccounts,
  BannerHomePage
} from './index'
import '../../scss/components/_homePage.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react"
import { 
  loadLastPostsAccounts,
  loadLastPostsArticles
} from "../../store/action_creators"

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
    <main className='container-homePage'>
      <BannerHomePage />
      <section className='section-interesting'>
        {/* <PostsArticles articles = {articles} /> */}
        <PostsAccounts accounts = {accounts} />
      </section>
    </main>
  )
}

export { HomePage }