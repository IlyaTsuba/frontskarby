import { useDispatch, useSelector } from 'react-redux'
import cls from './SelectedPostAccount.module.scss'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { SelectedPostAccountImage } from './SelectedPostAccountBlockImage'
import { Likes, Loader, MarkPost, SocialMediaLink } from '../../../../shared'
import { loadPostAccount } from '../../../../store/action_creators'
import { accountLinks, instagram, telegram, tiktok, youtube } from '../../../../assets/icons/accountLinks/accountLinks'

const SelectedPostAccount = () => {
  const {slug} = useParams()
  const dispatch = useDispatch();
  const userInfo = useSelector(state => state.user.user)
  const postInfo = useSelector(state => state.postsAccounts.selectedPostAccount)
  const post = useSelector(() => postInfo && Object
    .values(postInfo)
    .find(el => el === slug)
  )

  useEffect(() => {
    window.scrollTo(0, 0)
    const fetchDataAsync = async () => {
      await dispatch(loadPostAccount(slug, userInfo));
    }
    fetchDataAsync()
  }, [dispatch ,slug])
    
  return (
    <>
    { post ? (
      <main className={cls.choseAccount}>
        <div className={cls.choseAccount_container}>
          <div className={cls.choseAccount__head_title}>
            <div className={cls.choseAccount__block_w_info}>
              <div className={cls.choseAccount__block_about}>
                <div className={cls.choseAccount__avatar}>
                  <img 
                    className={cls.choseAccount__avatar_photo} 
                    src={postInfo?.avatar} 
                    alt={'photo' + 1}
                  />
                </div>
                <div className={cls.choseAccount__title}>
                  <h1 className={cls.choseAccount__title_title}>
                    {postInfo?.name}
                  </h1>
                  <h5 className={cls.choseAccount__title_description}>
                    {postInfo?.description}
                  </h5>
                </div>
              </div>
              <div className={cls.block_w_info__follow_block}>
                <Likes postInfo={postInfo} />
                <ul className={cls.follow_block__link}>
                  <SocialMediaLink 
                    className={cls.link_item} 
                    socialMedia={postInfo.social_media} 
                    svgIcons={accountLinks} 
                  />
                </ul>
              </div>

            </div>
            <div className={cls.choseAccount__block_on_right_side}>
              <MarkPost postInfo={postInfo} />
            </div>
          </div>
          <article className={cls.choseAccount__section_w_photo}>
            {postInfo?.photo?.map((el, i) => 
              <SelectedPostAccountImage cls={cls} photo={el} key={i} alt='photo' />
            )}
        </article>
        </div>
      </main> 
    ) : (
      <Loader />
    )}
    </>
  )
}

export { SelectedPostAccount };