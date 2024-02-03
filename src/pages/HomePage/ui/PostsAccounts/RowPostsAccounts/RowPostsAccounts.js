import { PostAccount } from "./PostAccount"

const RowPostsAccounts = ({accounts, cls}) => {
  return (
    <div className={cls.block_w_post_accounts}>
      { 
        Array.isArray(accounts) 
        && accounts
        .map(el => 
          <PostAccount 
            key={el.slug} 
            account={el}
            cls={cls}
          />
        )
      }
    </div>
  )
}

export { RowPostsAccounts }