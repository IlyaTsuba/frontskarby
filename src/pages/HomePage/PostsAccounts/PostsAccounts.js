import { Link } from 'react-router-dom'
import { RowPostsAccounts } from './RowPostsAccounts'

const PostsAccounts = ({accounts}) => {
  return (
    <article className='block-w-newAccounts'>
      <div className='flex-block'>
        <p className='flex-block__title'>Новые аккаунты</p>
        <Link className='flex-block__link' to={'accounts'}>Все</Link>
      </div>
      <RowPostsAccounts accounts={accounts} />
    </article>
  )
}

export { PostsAccounts }