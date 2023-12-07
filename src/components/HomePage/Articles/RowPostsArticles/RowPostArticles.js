import { Article } from "./Article/Article"


const RowPostArticles = ({articles}) => {
  const posts = articles.map(el => <Article key={el.slug} article={el} />)
  return (
    <article className='block-w-post-articles'>
      {
        posts
      }
    </article>
  )
}

export { RowPostArticles }