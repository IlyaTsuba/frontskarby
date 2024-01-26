import '../../scss/components/_signIn.scss'
import { Authorization } from '../../widgets'
import { LogImage } from '../../shared'

const SignIn = () => {
  return (
    <div className='container-log'>
      <div className='container-log__block-img-a-form'>
        <LogImage />
        <div className='block-w-form'> 
          <Authorization />
        </div>
      </div>
    </div>
  )
}
export { SignIn }