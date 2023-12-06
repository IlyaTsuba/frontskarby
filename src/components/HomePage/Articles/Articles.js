import { Article } from "./Article"

const Articles = ({articles}) => {

  // {articlesArr?.map(el => 
  //   <Articles 
  //     key = {el} 
  //     article = {el}
  //   />
  // )} 
  return (
    <article className='block-w-articles'>
      <p className='block-w-articles__title'>Артыкулы</p>
      <Article/>
    </article>
  )
}

export { Articles }