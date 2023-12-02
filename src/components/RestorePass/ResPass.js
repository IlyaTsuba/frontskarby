import { LogImage } from "../LogImage"
import { Restore } from "../Forms"

const ResPass = () => {
  return (
    <div className='container-log'>
    <div className='container-log__block-img-a-form'>
      <LogImage/>
      <div className='block-w-form'> 
        <Restore />
      </div>
    </div>
  </div>
  )
}

export { ResPass }