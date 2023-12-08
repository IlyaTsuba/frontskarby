import { Link } from "react-router-dom"
import { ButtonMore } from '../../index'

const BannerNews = () => {
  return (
    <article className='block-banner'>
      <div className='block-w-text'>
        <h2 className='block-w-text__title'>
          Кінафестываль «Паўночнае ззянне» агучыў праграму
        </h2>
        <Link to = '/'>
          <h2 className='block-w-text__text'>
            Што будзем глядзець?
          </h2>
        </Link>
      </div>
      <div className='block-banner__btn'>
        <ButtonMore onClick={() => window.location.pathname = '/posts'} />
      </div>
    </article>
  )
}

export { BannerNews }