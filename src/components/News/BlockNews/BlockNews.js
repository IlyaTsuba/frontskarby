import { useDispatch, useSelector } from 'react-redux'
import { RowNews } from './index'
import { useEffect } from 'react';
import { loadArticles } from '../../../store/action_creators';

const splitPosts = (arr) => {
  let resultArr = [];
  for (let i = 0, isFirst = true; i < arr.length;) {
    if(isFirst) {
      const tempArr = [arr[i], arr[i+1]].filter(el => el);
      if (tempArr.length > 0) resultArr.push(tempArr);
      i += 2;
    } 
  }
  return resultArr
}

const BlockNews = () => {
  const postsNews = useSelector(state => state.articles.articles)
  console.log(postsNews)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadArticles(postsNews))
  }, [])
  return (
    <section className='section-news'>
      {splitPosts(postsNews).map(el => 
        <RowNews 
          key={el.reduce((prev, cur) => prev+ '.' +cur.slug, '')}
          posts={el}
        />
      )}
    </section>
  )
}

export { BlockNews }