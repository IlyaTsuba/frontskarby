import { ButtonMore } from "../../../../Buttons"

const PostNews = ({post}) => {

  const {photo, slug, title, content} = post
  return (
    <div className='container-post'>
      <div className='block-w-info-a-img'>
        <div className='block-w-info'>
          <h3 className='block-w-info__title'>
            {title}
          </h3>
          <p className='block-w-info__text'>
            {content}
          </p>
        </div>
        {photo.length >= 1 ? <img className='img' src={photo && photo[0]?.photo} alt='img'/> : '' }
      </div>

      <div className='flex-block-w-btn'>
        <button 
          className='flex-block-w-btn__marks'
          onClick={() => window.location.pathname = '/news'}
        > Навіны </button>
        <ButtonMore onClick={() => window.location.pathname = `articles/${slug}`} />
      </div>
    </div>
  )
}

export { PostNews }