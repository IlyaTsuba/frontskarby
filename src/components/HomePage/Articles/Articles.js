import { RowPostArticles } from './RowPostsArticles'




const Articles = ({articles}) => {
  return (
    <article className='block-w-articles'>
      <p className='block-w-articles__title'>Артыкулы</p>
        <RowPostArticles articles={articles} />
    </article>
  )
}

export { Articles }