import { PostArticle } from "./Article/PostArticle"


const RowPostsArticles = ({articles}) => {
  const posts = articles.map(el => <PostArticle key={el.slug} article={el} />)
  return (
    <article className='block-w-post-articles'>
      {
        posts
      }
    </article>
  )
}

export { RowPostsArticles }