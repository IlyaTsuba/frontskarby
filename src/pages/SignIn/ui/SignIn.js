import cls from './SignIn.module.scss'
import { Authorization } from '../../../widgets'
import { LogImage } from '../../../shared'

const SignIn = () => {
  return (
    <div className={cls.container_log}>
      <div className={cls.container_log__block_img_a_form}>
        <LogImage cls={cls}/>
        <div className={cls.block_w_form}> 
          <Authorization cls={cls}/>
        </div>
      </div>
    </div>
  )
}
export { SignIn }