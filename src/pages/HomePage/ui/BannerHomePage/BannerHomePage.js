import { Link } from "react-router-dom"
import { HomePageBanner } from "../../../../shared/ui/Image"

const BannerHomePage = ({cls}) => {
  return (
    <article className={cls.block_banner}>
      <div className={cls.block_w_text}>
        <h2 className={cls.block_w_text__title}>
          Крамы, мерапрыемствы <br/> і тавары ад беларусаў беларусам
        </h2>
        <Link to = '/sign-up'>
          <h2 className={cls.block_w_text__text}>
            Рэгіструйся і захоўвай сабе каб не згубіць!
          </h2>
        </Link>
      </div>
      <div className={cls.block_w_img}>
        <HomePageBanner cls={cls}/>
      </div>
    </article>
  )
}

export { BannerHomePage }