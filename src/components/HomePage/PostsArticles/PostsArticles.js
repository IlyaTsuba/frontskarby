import { RowPostsArticles } from './RowPostsArticles'




const PostsArticles = ({articles}) => {
  return (
    <article className='block-w-articles'>
      <p className='block-w-articles__title'>Артыкулы</p>
        <RowPostsArticles articles={articles} />
    </article>
  )
}

export { PostsArticles }