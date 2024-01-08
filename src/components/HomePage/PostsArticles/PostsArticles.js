import { Link } from 'react-router-dom'
import { RowPostsArticles } from './RowPostsArticles'




const PostsArticles = ({articles}) => {
  return (
    <article className='block-w-articles'>
      <div className='flex-block'>
        <p className='flex-block__title'>Артыкулы</p>
        <Link className='flex-block__link' to={'news'}>Все</Link>
      </div>
        <RowPostsArticles articles={articles} />
    </article>
  )
}

export { PostsArticles }