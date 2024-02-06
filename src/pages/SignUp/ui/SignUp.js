import { Registration } from "../../../widgets"
import { LogImage } from "../../../shared"
import cls from './SignUp.module.scss'


const SignUp = () => {
  return (
    <div className={cls.container_log}>
      <div className={cls.container_log__block_img_a_form}>
        <LogImage cls={cls}/>
        <div className={cls.block_w_form}> 
          <Registration cls={cls}/>
        </div>
      </div>
    </div>
  )
}

export { SignUp }