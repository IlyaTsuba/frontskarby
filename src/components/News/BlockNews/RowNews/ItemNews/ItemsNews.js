import { Button } from "../../../../Button"

const PostNews = ({post}) => {

  return (
    <div className='container-w-scroll'>
      <div className='block-post'>
        <div className='block-w-info'>
          <h3 className='block-w-info__title'>
            {post?.title}
          </h3>
          <p className='block-w-info__text'>
            {post?.content}
          </p>
        </div>
        <div className='flex-block-w-btn'>
          <button 
            className='flex-block-w-btn__marks'
            onClick={() => window.location.pathname = '/news'}
          > {post?.article_category} </button>
          <Button onClick={() => window.location.pathname = '/posts'} />
        </div>
      </div>
    </div>
  )
}

export { PostNews }