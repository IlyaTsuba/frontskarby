import { Link } from "react-router-dom"
import { ButtonMore } from '../../../../shared'

const BannerAccountsPage = ({cls}) => {
  return (
    <article className={cls.block_banner}>
      <div className={cls.block_w_text}>
        <h2 className={cls.block_w_text__title}>
          Кінафестываль «Паўночнае ззянне» агучыў праграму
        </h2>
        <Link to = '/'>
          <h2 className={cls.block_w_text__text}>
            Што будзем глядзець?
          </h2>
        </Link>
      </div>
      <div className={cls.block_banner__btn}>
        <ButtonMore link='/posts' cls={cls}/>
      </div>
    </article>
  )
}

export { BannerAccountsPage }