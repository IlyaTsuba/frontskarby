import { useDispatch, useSelector } from 'react-redux'
import '../../scss/components/_selectedAccount.scss'
import { useParams } from 'react-router-dom';
import { loadPostAccount, setPostAccount } from '../../store/action_creators';
import { useEffect } from 'react';
import { SelectedPostAccountImage } from './SelectedPostAccountBlockImage';

const SelectedPostAccount = () => {
  window.scrollTo(0, 0)
  const postInfo = useSelector(state => state.postsAccounts.selectedPostAccount)
  const dispatch = useDispatch();
  const {slug} = useParams()
  useEffect(() => {
    dispatch(loadPostAccount(slug))
  }, [])

  return (
    <main className='container-choseAccount'>
      <div className='block-w-title'>
        <h1 className='block-w-title__title'>{postInfo?.name}</h1>
      </div>
      <div className='block-account'>
        <div className='block-w-info-account'>
          <h4 className='block-w-info-account__title'>{postInfo?.description}</h4>
          <div className='block-w-btn'>
            <div className='block-w-btn__mark'  onClick={() => dispatch(setPostAccount(postInfo))}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/>
              </svg>
            </div>
            <div className='block-w-btn__link-on-instagram'>
              <svg 
                viewBox="0 0 28 28" 
                xmlns="http://www.w3.org/2000/svg"
                
              >
                <path id="Vector" d="M14 9.1875C13.0482 9.1875 12.1177 9.46975 11.3263 9.99855C10.5349 10.5274 9.91808 11.279 9.55383 12.1583C9.18958 13.0377 9.09428 14.0053 9.27997 14.9389C9.46566 15.8724 9.92401 16.7299 10.597 17.403C11.2701 18.076 12.1276 18.5343 13.0611 18.72C13.9947 18.9057 14.9623 18.8104 15.8417 18.4462C16.721 18.0819 17.4726 17.4651 18.0014 16.6737C18.5303 15.8823 18.8125 14.9518 18.8125 14C18.8111 12.7241 18.3036 11.5009 17.4014 10.5986C16.4991 9.69644 15.2759 9.18895 14 9.1875ZM14 17.9375C13.2212 17.9375 12.46 17.7066 11.8124 17.2739C11.1649 16.8413 10.6602 16.2263 10.3622 15.5068C10.0642 14.7873 9.98623 13.9956 10.1382 13.2318C10.2901 12.468 10.6651 11.7664 11.2158 11.2158C11.7664 10.6651 12.468 10.2901 13.2318 10.1382C13.9956 9.98623 14.7873 10.0642 15.5068 10.3622C16.2263 10.6602 16.8413 11.1649 17.2739 11.8124C17.7066 12.46 17.9375 13.2212 17.9375 14C17.9375 15.0443 17.5227 16.0458 16.7842 16.7842C16.0458 17.5227 15.0443 17.9375 14 17.9375ZM19.25 3.0625H8.75C7.24211 3.06424 5.79649 3.66401 4.73025 4.73025C3.66401 5.79649 3.06424 7.24211 3.0625 8.75V19.25C3.06424 20.7579 3.66401 22.2035 4.73025 23.2698C5.79649 24.336 7.24211 24.9358 8.75 24.9375H19.25C20.7579 24.9358 22.2035 24.336 23.2698 23.2698C24.336 22.2035 24.9358 20.7579 24.9375 19.25V8.75C24.9358 7.24211 24.336 5.79649 23.2698 4.73025C22.2035 3.66401 20.7579 3.06424 19.25 3.0625ZM24.0625 19.25C24.0611 20.5259 23.5536 21.7491 22.6514 22.6514C21.7491 23.5536 20.5259 24.0611 19.25 24.0625H8.75C7.47409 24.0611 6.25085 23.5536 5.34865 22.6514C4.44644 21.7491 3.93895 20.5259 3.9375 19.25V8.75C3.93895 7.47409 4.44644 6.25085 5.34865 5.34865C6.25085 4.44644 7.47409 3.93895 8.75 3.9375H19.25C20.5259 3.93895 21.7491 4.44644 22.6514 5.34865C23.5536 6.25085 24.0611 7.47409 24.0625 8.75V19.25ZM20.5625 8.3125C20.5625 8.48556 20.5112 8.65473 20.415 8.79862C20.3189 8.94252 20.1822 9.05467 20.0223 9.12089C19.8625 9.18712 19.6865 9.20445 19.5168 9.17069C19.3471 9.13693 19.1912 9.05359 19.0688 8.93122C18.9464 8.80885 18.8631 8.65294 18.8293 8.4832C18.7956 8.31347 18.8129 8.13754 18.8791 7.97765C18.9453 7.81777 19.0575 7.68111 19.2014 7.58496C19.3453 7.48882 19.5144 7.4375 19.6875 7.4375C19.9196 7.4375 20.1421 7.52969 20.3062 7.69378C20.4703 7.85788 20.5625 8.08044 20.5625 8.3125Z" fill="#2E2D2D"/>
              </svg>
              <span className='link-on-instagram'>{postInfo?.instagram}</span>
            </div>
          </div>
        </div>
        <div className='block-w-avatar'>
          <img className='block-w-avatar__avatar' src={`http://127.0.0.1:8000/`+postInfo?.avatar}/>
        </div>
      </div>
      <article className='block-w-photo-account'>
        {postInfo?.photo.map((el, i) => 
          <SelectedPostAccountImage photo={el} key={i} alt='photo'/>
        )}
      </article>
    </main>
  )
}

export { SelectedPostAccount }