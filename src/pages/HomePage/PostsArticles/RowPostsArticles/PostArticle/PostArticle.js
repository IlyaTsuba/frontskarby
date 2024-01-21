import { ButtonMore } from '../../../../../shared'

const PostArticle = ({article}) => {
  const {photo, slug, title, content} = article
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
        {photo?.length > 1 ? <img className='img' src={photo && photo[0]?.photo}/> : ''}
      </div>

      <div className='flex-block-w-btn'>
        <button 
          className='flex-block-w-btn__marks'
          onClick={() => window.location.pathname = '/news'}
        > Навіны </button>
        <ButtonMore link={`articles/${slug}`} />
      </div>
    </div>
  )
}

export { PostArticle }