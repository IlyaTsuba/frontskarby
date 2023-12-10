import { BannerNewsPage } from "./BannerNewsPage"
import { Navigate } from "./Navigate"
import '../../scss/components/_newsPage.scss'
import { BlockPostsNews } from "./BlockPostsNews"
import { BlockPostsTop } from "./BlockPostsTop"


const News = () => {
  window.scrollTo(0, 0)
  return (
    <main className='container-news'>
      
      <BannerNewsPage/>

      <Navigate />

      <BlockPostsNews />

      <BlockPostsTop />
    </main>
  )
}

export { News }