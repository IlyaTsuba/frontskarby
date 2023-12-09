import { PostAccount } from "./PostAccounts"

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