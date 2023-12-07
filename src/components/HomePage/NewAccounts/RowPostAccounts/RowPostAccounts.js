import { PostAccount } from "./PostAccounts"

const RowPostAccounts = ({accounts}) => {
const posts = accounts.map(el => <PostAccount key={el.slug} account={el} />)
  return (
    <div className='block-w-post-accounts'>
      { 
        posts
      }
    </div>
  )
}

export { RowPostAccounts }