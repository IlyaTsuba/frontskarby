import { ButtonMore, ButtonDelete } from "../../Buttons"


const Mark = () => {
  return (
    <div className='block-mark'>
      <div className='block-w-info'>
        <img className='block-w-info__img'/>
        <h2 className='block-w-info__title'>RABIPILNA</h2>
      </div>
      <div className='block-w-btn'>
        <ButtonMore />
        <ButtonDelete />
      </div>
    </div>
  )
}

export { Mark }