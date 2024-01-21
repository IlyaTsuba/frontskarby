import { ButtonMore, MarkPost } from '../../../../../shared'

const PostAccount = ({account}) => {
  const {avatar, slug, name} = account;
  return (
    <div className='block-account'>
      <img 
        className='block-account__image'
        src={'http://127.0.0.1:8000/'+ avatar}
        alt='image1'
      />
      <h4 className='block-account__title'>{name}</h4>
        <div className='flex-box'>
          <MarkPost postInfo={account}/>
          <ButtonMore link={`/accounts/${slug}`} />
        </div>
    </div>
  )
}

export { PostAccount }