import {
  banner_1,
  banner_2,
  banner_3
} from '../../../../assets/image/var/var-img'

const HomePageBanner = ({cls}) => {
  return (
    <div className={cls.block_w_image}>
      <img className={cls.block_w_image__item_1} src={banner_1} alt='image1' />
      <img className={cls.block_w_image__item_2} src={banner_2} alt='image2' />
      <img className={cls.block_w_image__item_3} src={banner_3} alt='image3' />
    </div>
  )
}

export { HomePageBanner }