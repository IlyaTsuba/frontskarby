import { BannerNews } from "./Banner"
import { Navigate } from "./Navigate"
import '../../scss/components/_news.scss'
import { BlockNews } from "./BlockNews"


const News = () => {
  return (
    <main className='container-news'>
      
      <BannerNews/>

      <Navigate />

      <BlockNews />
    </main>
  )
}

export { News }