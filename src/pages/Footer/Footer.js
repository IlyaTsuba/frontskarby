import '../../scss/components/_footer.scss'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='block-w-info'>
        <div className='block-upper'>
          <span className='block-up__text'>
            Для сувязі:{' '}
          </span>
          <a href='/' className='block-up__link'>
            admin@mail.com
          </a>
        </div>
        <div className='block-down'>
          <span className='bock-down__text'>
            Усе правы абаронены
          </span>
        </div>
      </div>
    </div>
  )
}

export { Footer }