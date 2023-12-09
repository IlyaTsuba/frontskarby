import { PostsArticles } from "./Articles"
import { BannerHomePage } from "./BannerHomePage"
import { PostsAccounts } from "./NewAccounts"
import '../../scss/components/_homePage.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useMemo } from "react"
import { loadPostsAccounts, loadPostsArticles } from "../../store/action_creators"

const HomePage = () => {

  const articles = useSelector(state => state.postsArticles.postsArticles)
  const accounts = useSelector(state => state.postsAccounts.postsAccounts)
  // const page = useSelector(state => state.currentPage.currentPage)
  const dispatch = useDispatch()

  const memoizedAccounts = useMemo(() => accounts, [accounts])
  const memoizedArticles = useMemo(() => articles, [articles])

  useEffect(() => {
    dispatch(loadPostsArticles(articles))
    dispatch(loadPostsAccounts(accounts))
  }, [])
  
  return (
    <main className='container-homePage'>
      <BannerHomePage />
      <section className='section-interesting'>
        <PostsArticles articles = {articles} />
        <PostsAccounts accounts = {accounts} />
      </section>
    </main>
  )
}

export { HomePage }