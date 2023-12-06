import {banner_1, banner_2, banner_3} from '../../../assets/image/var/var-img'

const HomePageBanner = () => {
  return (
    <div className='block-w-image'>
      <img className='block-w-image__item-1' src={banner_1} alt='image1' />
      <img className='block-w-image__item-2' src={banner_2} alt='image2' />
      <img className='block-w-image__item-3' src={banner_3} alt='image3' />
    </div>
  )
}

export { HomePageBanner }