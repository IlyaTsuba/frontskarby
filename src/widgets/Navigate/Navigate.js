import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Tab } from "./Tab";
import { activeTab } from "../../store/action_creators";
import { useLocation } from "react-router-dom";

const Navigate = () => {
  const postsAccountsCategoryInfo = useSelector(state => state.postsAccounts.postsAccounts)
  const postsArticlesCategoryInfo = useSelector(state => state.postsArticles.postsArticles)
  const arrayCategoryFromAccounts = Array.from(new Set(postsAccountsCategoryInfo.map(({category}) => category )))
  const arrayCategoryFromArticles = Array.from(new Set(postsArticlesCategoryInfo.map(({category}) => category )))
  const tabInfo = useSelector(state => state.ui.activeTab)
  const dispatch = useDispatch();
  const [ active, setActive ] = useState(tabInfo);
  const location = useLocation();
  useEffect(() => {
    dispatch(activeTab(active));
  }, [dispatch]);

  const handleClick = (id) => {
    setActive(id)
    dispatch(activeTab(id))
  }
  return (
    <div className='block-navigate'>
      <div
        id={'all'}
        className={`nav ${tabInfo === 'all' ? 'active' : ''}`}
        onClick={() => handleClick('all')}
      >
        <span>
          Усе
        </span>
      </div>
      {
        location.pathname === '/accounts' ?
        (arrayCategoryFromAccounts.map(el => 
          <Tab
            id={el}
            key={el}
            text={el}
            isActive={tabInfo === el}
            callback={handleClick}
          />
        ))
        : 
        (arrayCategoryFromArticles.map(el => 
          <Tab 
            id={el}
            key={el}
            text={el}
            isActive={tabInfo === el}
            callback={handleClick}
          />
        ))
      }
    </div>
  )
}

export { Navigate }