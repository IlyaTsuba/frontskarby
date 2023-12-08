import { ButtonMore } from "../../../../Buttons/ButtonMore"


const PostAccount = ({account}) => {
  return (
    <div className='block-account'>
      <img 
        className='block-account__image'
        src={account?.avatar}
        alt='image1'
      />
      <ButtonMore onClick={() => window.location.pathname = '/accounts'} />
    </div>
  )
}

export { PostAccount }