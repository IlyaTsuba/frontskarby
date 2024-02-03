import { Link } from 'react-router-dom'
import { RowPostsAccounts } from './RowPostsAccounts'

const PostsAccounts = ({accounts, cls}) => {
  return (
    <article className={cls.block_w_newAccounts}>
      <div className={cls.flex_block}>
        <p className={cls.flex_block__title}>Новыя акаўнты</p>
        <Link className={cls.flex_block__link} to={'accounts'}>Усe</Link>
      </div>
      <RowPostsAccounts accounts={accounts} cls={cls}/>
    </article>
  )
}

export { PostsAccounts }