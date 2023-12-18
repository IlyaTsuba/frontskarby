import { PostAccount } from "./PostAccount"

const RowPostsAccounts = ({accounts}) => {

  return (
    <div className='block-w-post-accounts'>
      { 
        accounts.map(el => <PostAccount key={el.slug} account={el} />)
      }
    </div>
  )
}

export { RowPostsAccounts }