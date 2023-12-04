import { image_1, image_2, image_3 } from '../../../assets/image/var/var-img'

const LogImage = () => {
  return (
    <div className='block-w-image'>
      <img className='block-w-image__item-1' src={image_1} alt='image' />
      <img className='block-w-image__item-2' src={image_2} alt='image' />
      <img className='block-w-image__item-3' src={image_3} alt='image' />
    </div>
  )
}

export { LogImage }