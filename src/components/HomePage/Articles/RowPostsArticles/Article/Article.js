import { Button } from '../../../../Button/Button'

const Article = ({article}) => {
  return (
    <div className='container-w-scroll'>
      <div className='block-post'>
        <div className='block-w-info'>
          <h3 className='block-w-info__title'>
            {article?.title}
          </h3>
          <p className='block-w-info__text'>
            {article?.content}
          </p>
        </div>
        <div className='flex-block-w-btn'>
          <button 
            className='flex-block-w-btn__marks'
            onClick={() => window.location.pathname = '/news'}
          > Навіны </button>
          <Button onClick={() => window.location.pathname = '/posts'} />
        </div>
      </div>
    </div>
  )
}

export { Article }