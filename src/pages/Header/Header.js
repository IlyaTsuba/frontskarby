import React, { useEffect, useState } from 'react';
import '../../scss/components/_header.scss'
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../store/action_creators/user_action_creator';

const Header = () => {
  const location = useLocation();
  const userInfo = useSelector(state => state.user.user);
  const dispatch = useDispatch();
  const [ state, setState ] = useState(false);

  const handleClickOutside = (event) => {
    const navElement = document.querySelector('.nav');
    if (navElement && !navElement.contains(event.target)) {
      setState(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handler = () => setState((prevState) => !prevState);

  const handleUserInfoClick = (event) => {
    event.stopPropagation();
    handler();
  };
  return (
    <header className={!state ? `container-header` : `container-header active`}>
      <a href = '/'>
        <h1 className='container-header__title'>Skarby</h1>
      </a>
      <nav className='navigate'>
        <ul className='navigate-list'>
          <div className='block-w-link'>
            <a href = '/'>
              <li className={location.pathname !== '/' ? `block-w-link__list` : `block-w-link__list-active`}>
                Галоуная
              </li>
            </a>
            <a href='/accounts'>
              <li className={location.pathname !== '/accounts' ? `block-w-link__list` : `block-w-link__list-active`}>
                Рамяство
              </li>
            </a>
            {/* <a href='/news'>
              <li className={location.pathname !== '/news' ? `block-w-link__list` : `block-w-link__list-active`}>
                Навины
              </li>
            </a> */}
          </div>
          {
          !userInfo 
          ? (<Link to={`/sign-in`}>
              <li className='block-w-userInfo' onClick={handleUserInfoClick}>
                <span className='block-w-userInfo__title'>Увайсці</span>
                <div className='block-w-userInfo__icon'>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Vector" d="M19.8377 18.9063C18.203 16.0802 15.5828 14.1507 12.547 13.4551C13.9895 12.864 15.1821 11.7904 15.921 10.4177C16.6598 9.04498 16.8991 7.45829 16.5979 5.92872C16.2967 4.39915 15.4738 3.02162 14.2697 2.03147C13.0655 1.04133 11.555 0.500015 9.99602 0.500015C8.43708 0.500015 6.9265 1.04133 5.72238 2.03147C4.51825 3.02162 3.6953 4.39915 3.39411 5.92872C3.09293 7.45829 3.3322 9.04498 4.07106 10.4177C4.80991 11.7904 6.00249 12.864 7.44506 13.4551C4.4132 14.1477 1.78901 16.0802 0.154342 18.9063C0.107022 18.9967 0.0964833 19.102 0.124927 19.2C0.15337 19.2981 0.218596 19.3813 0.30698 19.4324C0.395363 19.4835 0.500068 19.4985 0.599224 19.4742C0.69838 19.4499 0.784316 19.3882 0.839083 19.3021C2.77259 15.9565 6.19827 13.9587 9.99602 13.9587C13.7938 13.9587 17.2194 15.9565 19.153 19.3021C19.1877 19.3622 19.2376 19.4121 19.2976 19.4468C19.3577 19.4816 19.4259 19.4999 19.4953 19.5C19.5649 19.5002 19.6332 19.4817 19.6932 19.4465C19.784 19.394 19.8501 19.3076 19.8772 19.2063C19.9043 19.105 19.8901 18.9971 19.8377 18.9063ZM4.05895 7.23004C4.05895 6.0558 4.40715 4.90793 5.05953 3.93159C5.7119 2.95524 6.63914 2.19427 7.724 1.74491C8.80886 1.29555 10.0026 1.17798 11.1543 1.40706C12.306 1.63614 13.3638 2.20159 14.1942 3.03191C15.0245 3.86222 15.5899 4.9201 15.819 6.07178C16.0481 7.22346 15.9305 8.4172 15.4811 9.50206C15.0318 10.5869 14.2708 11.5142 13.2945 12.1665C12.3181 12.8189 11.1703 13.1671 9.99602 13.1671C8.42197 13.1653 6.91292 12.5392 5.7999 11.4262C4.68688 10.3131 4.06078 8.80409 4.05895 7.23004Z" fill="#2E2D2D"/>
                  </svg>
                </div>
              </li>
            </Link>) : (
            <>
              <li 
                className='block-w-userInfo'
                onClick={handleUserInfoClick}
                
              >
                <span className='block-w-userInfo__title'>{userInfo.username}</span>
                <div className='block-w-userInfo__icon'>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Vector" d="M19.8377 18.9063C18.203 16.0802 15.5828 14.1507 12.547 13.4551C13.9895 12.864 15.1821 11.7904 15.921 10.4177C16.6598 9.04498 16.8991 7.45829 16.5979 5.92872C16.2967 4.39915 15.4738 3.02162 14.2697 2.03147C13.0655 1.04133 11.555 0.500015 9.99602 0.500015C8.43708 0.500015 6.9265 1.04133 5.72238 2.03147C4.51825 3.02162 3.6953 4.39915 3.39411 5.92872C3.09293 7.45829 3.3322 9.04498 4.07106 10.4177C4.80991 11.7904 6.00249 12.864 7.44506 13.4551C4.4132 14.1477 1.78901 16.0802 0.154342 18.9063C0.107022 18.9967 0.0964833 19.102 0.124927 19.2C0.15337 19.2981 0.218596 19.3813 0.30698 19.4324C0.395363 19.4835 0.500068 19.4985 0.599224 19.4742C0.69838 19.4499 0.784316 19.3882 0.839083 19.3021C2.77259 15.9565 6.19827 13.9587 9.99602 13.9587C13.7938 13.9587 17.2194 15.9565 19.153 19.3021C19.1877 19.3622 19.2376 19.4121 19.2976 19.4468C19.3577 19.4816 19.4259 19.4999 19.4953 19.5C19.5649 19.5002 19.6332 19.4817 19.6932 19.4465C19.784 19.394 19.8501 19.3076 19.8772 19.2063C19.9043 19.105 19.8901 18.9971 19.8377 18.9063ZM4.05895 7.23004C4.05895 6.0558 4.40715 4.90793 5.05953 3.93159C5.7119 2.95524 6.63914 2.19427 7.724 1.74491C8.80886 1.29555 10.0026 1.17798 11.1543 1.40706C12.306 1.63614 13.3638 2.20159 14.1942 3.03191C15.0245 3.86222 15.5899 4.9201 15.819 6.07178C16.0481 7.22346 15.9305 8.4172 15.4811 9.50206C15.0318 10.5869 14.2708 11.5142 13.2945 12.1665C12.3181 12.8189 11.1703 13.1671 9.99602 13.1671C8.42197 13.1653 6.91292 12.5392 5.7999 11.4262C4.68688 10.3131 4.06078 8.80409 4.05895 7.23004Z" fill="#2E2D2D"/>
                  </svg>
                </div>
              </li>
              {state && (
                <nav className='nav'>
                  <ul className='nav_list'>
                    <Link to={'/user'}>
                      <li className='nav_list__item' onClick={()=>setState(false)}>Акаўнт</li>
                    </Link>
                    <Link to={'/user/account'}>
                      <li className='nav_list__item'  onClick={()=>setState(false)}>Захованне</li>
                    </Link>
                    <li className='nav_list__item' 
                      onClick={() => {
                        dispatch(setUser(null))
                        setState(false)
                        window.location.pathname = '/'
                      }}>Выйсці</li>
                  </ul>
                </nav>
              )}
            </>
            )
          }
        </ul>
      </nav>
    </header>
  );
};

export { Header };