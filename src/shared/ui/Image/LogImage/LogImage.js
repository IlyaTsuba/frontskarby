import { image_1, image_2, image_3 } from '../../../../assets/image/var/var-img'

const LogImage = ({cls}) => {
  return (
    <div className={cls.block_w_image}>
      <img className={cls.block_w_image__item_1} src={image_1} alt='image1' />
      <img className={cls.block_w_image__item_2} src={image_2} alt='image2' />
      <img className={cls.block_w_image__item_3} src={image_3} alt='image3' />
    </div>
  )
}

export { LogImage }