import { HomePageBanner } from "../../Image"
import { Link } from "react-router-dom"


const Banner = () => {
  return (
    <article className='block-banner'>
      <div className='block-w-text'>
        <h2 className='block-w-text__title'>
          Крамы, мерапрыемствы <br/> і тавары ад беларусаў беларусам
        </h2>
        <Link to = '/sign-up'>
          <h2 className='block-w-text__text'>
            Рэгіструйся і захоўвай сабе каб не згубіць!
          </h2>
        </Link>
      </div>
      <div className='block-w-img'>
        <HomePageBanner />
      </div>
    </article>
  )
}

export { Banner }