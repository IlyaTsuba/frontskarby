import {
  MarkPost,
  ButtonMore
} from '../../../../../../shared'

const PostAccount = ({account, cls}) => {
  const {avatar, slug, name} = account;
  return (
    <div className={cls.block_account}>
      <div className={cls.flex_box_upper}>
        <img 
          className={cls.block_account__image}
          src={'http://127.0.0.1:8000/'+ avatar}
          alt='image1'
        />
        <h4 className={cls.block_account__title}>{name}</h4>
      </div>
      <div className={cls.flex_box_bottom}>
        <MarkPost postInfo={account} cls={cls}/>
        <ButtonMore link={`/accounts/${slug}`} cls={cls}/>
      </div>
    </div>
  )
}

export { PostAccount }