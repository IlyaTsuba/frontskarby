import { BannerNewsPage } from "./BannerNewsPage"
import '../../scss/components/_newsPage.scss'
import { BlockPostsNews } from "./BlockPostsNews"
import { BlockPostsTop } from "./BlockPostsTop"
import { Navigate } from "../../widgets"


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