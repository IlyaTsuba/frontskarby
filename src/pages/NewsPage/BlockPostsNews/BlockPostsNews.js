import { useDispatch, useSelector } from 'react-redux'
import { RowPostsNews } from './RowPostsNews'
import { useEffect } from 'react';
import { loadPostsArticles } from '../../../store/action_creators';

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

const BlockPostsNews = () => {
  const postsNews = useSelector(state => state.postsArticles.postsArticles)
  const activeTabInfo = useSelector(state => state.ui.activeTab);
  const dispatch = useDispatch()
  useEffect(() => {
    // switch (activeTabInfo) {
    //   case 'all': dispatch(loadPostsArticles())
    // }
    dispatch(loadPostsArticles(postsNews))
  }, [])
  return (
    <section className='section-news'>
      {
        activeTabInfo !== 'all'
        ? splitPosts(postsNews)
            .filter(({category}) => category === activeTabInfo)
            .map(el => 
              <RowPostsNews 
                key={el.reduce((prev, cur) => prev+ '.' +cur.slug, '')}
                posts={el}
              />
            )
        : splitPosts(postsNews)
            .map(el => 
              <RowPostsNews 
                key={el.reduce((prev, cur) => prev+ '.' +cur.slug, '')}
                posts={el}
              />
            )
      }
    </section>
  )
}

export { BlockPostsNews }