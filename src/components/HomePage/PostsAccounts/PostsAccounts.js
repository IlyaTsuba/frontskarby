import { RowPostsAccounts } from './RowPostsAccounts'

const PostsAccounts = ({accounts}) => {
  return (
    <article className='block-w-newAccounts'>
      <p className='block-w-newAccounts__title'>Новыя акаўнты</p>
      <RowPostsAccounts accounts={accounts} />
    </article>
  )
}

export { PostsAccounts }