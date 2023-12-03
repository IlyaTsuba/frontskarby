import Registration from "../components/Forms/Registration/Registration"
import Auth from "../components/Forms/Login/Auth"
import img_present from '../assets/image/Pic.svg'
import {useContext} from "react";
import {Context} from "../index";

//   <Registration />



const Enter = ( props ) => {
  const { store } = useContext(Context)


  console.log(store.isAuth,'- проверка')

  //console.log(props.Registration, ' пропсы ')

  const RegistrationComponent = props.form;

  console.log( RegistrationComponent, ' пропсы ')


  return (
  <div className="authorization">

    <div className="authorization--imagePresent"> 
      <img src={img_present} alt="Изображение" />
    </div>


    <div className="authorization--form"> 
    <RegistrationComponent />
    </div>

  </div>
  )}
  
export default Enter
  