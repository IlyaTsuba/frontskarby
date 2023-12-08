import { BannerNews } from "./Banner"
import { Navigate } from "./Navigate"
import '../../scss/components/_news.scss'
import { BlockNews } from "./BlockNews"
import { BlockTop } from "./BlockTop"


const News = () => {
  return (
    <main className='container-news'>
      
      <BannerNews/>

      <Navigate />

      <BlockNews />

      <BlockTop />
    </main>
  )
}

export { News }