import { Articles } from "./Articles"
import { Banner } from "./Banner"
import { NewAccounts } from "./NewAccounts"
import '../../scss/components/_homePage.scss'

const HomePage = () => {
  return (
    <main className='container-homePage'>
      <Banner />
      <section className='section-interesting'>
        <Articles />
        <NewAccounts />
      </section>
    </main>
  )
}

export { HomePage }