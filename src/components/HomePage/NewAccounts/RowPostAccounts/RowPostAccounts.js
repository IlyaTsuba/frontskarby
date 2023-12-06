import { PostAccount } from "./PostAccounts"

const RowPostAccounts = ({accounts}) => {

  return (
    <div className='block-w-post-accounts'>
      { accounts.length === 2 ?
      <>
        <PostAccount account={accounts[0]} />
        <PostAccount account={accounts[1]} />
      </>
        :
      <PostAccount account={accounts[0]} />
      }
    </div>
  )
}

export { RowPostAccounts }