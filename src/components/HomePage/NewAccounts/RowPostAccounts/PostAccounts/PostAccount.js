import { ButtonMore } from "../../../../Buttons/ButtonMore"

const PostAccount = ({account}) => {
  const {avatar, slug} = account
  return (
    <div className='block-account'>
      <img 
        className='block-account__image'
        src={avatar}
        alt='image1'
      />
      <ButtonMore onClick={() => window.location.pathname = `/accounts/${slug}`} />
    </div>
  )
}

export { PostAccount }