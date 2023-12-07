import { Articles } from "./Articles"
import { BannerHomePage } from "./BannerHomePage"
import { NewAccounts } from "./NewAccounts"
import '../../scss/components/_homePage.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useMemo } from "react"
import { loadAccounts, loadArticles } from "../../store/action_creators"

const HomePage = () => {

  const articles = useSelector(state => state.articles.articles)
  const accounts = useSelector(state => state.accounts.accounts)
  // const page = useSelector(state => state.currentPage.currentPage)
  const dispatch = useDispatch()

  const memoizedAccounts = useMemo(() => accounts, [accounts])
  const memoizedArticles = useMemo(() => articles, [articles])


  useEffect(() => {
    dispatch(loadArticles(articles))
    dispatch(loadAccounts(accounts))
  }, [])
  
  return (
    <main className='container-homePage'>
      <BannerHomePage />
      <section className='section-interesting'>
        <Articles articles = {articles} />
        <NewAccounts accounts = {accounts} />
      </section>
    </main>
  )
}

export { HomePage }