import { ButtonMore } from '../../../../shared';

const Post = ({post, cls}) => {
  const { avatar, name, slug } = post;
  return (
    <div className={cls.block_account}>
      <img 
        className={cls.block_account__image}
        src={'http://127.0.0.1:8000/'+ avatar}
        alt='image1'
      />
      <h4 className={cls.block_account__title}>{name}</h4>
      <ButtonMore link={`/accounts/${slug}`} cls={cls}/>
    </div>
  )
}

export { Post }