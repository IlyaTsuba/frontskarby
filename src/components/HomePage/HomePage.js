import { Articles } from "./Articles"
import { Banner } from "./Banner"
import { NewAccounts } from "./NewAccounts"
import '../../scss/components/_homePage.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react"
import { loadAccounts, loadArticles } from "../../store/action_creators"

const HomePage = () => {

  const articles = useSelector(state => state.articles.articles)
  const accounts = useSelector(state => state.accounts.accounts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadArticles(articles))
    dispatch(loadAccounts(accounts))
  }, [])

  console.log(accounts)
  console.log(articles)
  return (
    <main className='container-homePage'>
      <Banner />
      <section className='section-interesting'>
        <Articles articles = {articles} />
        <NewAccounts accounts = {accounts} />
      </section>
    </main>
  )
}

export { HomePage }