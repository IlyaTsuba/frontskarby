import { PostAccount } from "./PostAccount"

const RowPostsAccounts = ({accounts}) => {
  return (
    <div className='block-w-post-accounts'>
      { 
        Array.isArray(accounts) && accounts.map(el => <PostAccount key={el.slug} account={el} />)
      }
    </div>
  )
}

export { RowPostsAccounts }