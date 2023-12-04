import { Registration } from "../Forms";
import { LogImage } from "../Image";


const SignUp = () => {
  return (
    <div className='container-log'>
      <div className='container-log__block-img-a-form'>
        <LogImage />
        <div className='block-w-form'> 
          <Registration />
        </div>
      </div>
    </div>
  )
}

export { SignUp }