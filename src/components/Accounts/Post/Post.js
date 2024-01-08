import { ButtonMore } from "../../Buttons"
import '../../../scss/components/_accounts.scss'

const Post = ({post}) => {
  const { avatar, name, slug } = post;
  return (
    <div className='block-account'>
      <img 
        className='block-account__image'
        src={'http://127.0.0.1:8000/'+ avatar}
        alt='image1'
      />
      <h4 className='block-account__title'>{name}</h4>
      <ButtonMore link={`/accounts/${slug}`} />
    </div>
  )
}

export { Post }