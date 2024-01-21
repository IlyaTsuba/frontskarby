import { PostArticle } from './PostArticle'


const RowPostsArticles = ({articles}) => {
  return (
    <article className='block-w-post-articles'>
      {
        Array.isArray(articles) && articles.map(el => <PostArticle key={el.slug} article={el} />)
      }
    </article>
  )
}

export { RowPostsArticles }