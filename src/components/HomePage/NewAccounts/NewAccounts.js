import { RowPostAccounts } from "./RowPostAccounts"

const NewAccounts = ({accounts}) => {
  return (
    <article className='block-w-newAccounts'>
      <p className='block-w-newAccounts__title'>Новыя акаўнты</p>
      <RowPostAccounts accounts={accounts} />
    </article>
  )
}

export { NewAccounts }