import { PostAccount } from "./PostAccount"

const RowPostsAccounts = ({accounts}) => {
const posts = accounts.map(el => <PostAccount key={el.slug} account={el} />)
  return (
    <div className='block-w-post-accounts'>
      { 
        posts
      }
    </div>
  )
}

export { RowPostsAccounts }