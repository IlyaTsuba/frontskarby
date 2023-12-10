import { ButtonMore } from "../../../../Buttons/ButtonMore"

const PostAccount = ({account}) => {
  const {avatar, slug} = account
  return (
    <div className='block-account'>
      <img 
        className='block-account__image'
        src={'http://127.0.0.1:8000/'+ avatar}
        alt='image1'
      />
      <ButtonMore link={`/accounts/${slug}`} />
    </div>
  )
}

export { PostAccount }