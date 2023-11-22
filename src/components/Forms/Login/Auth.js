import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
//import AuthService from '../../../services/AuthService';
import { Context } from '../../..';
import AuthService from '../../../services/AuthService';


const Authorization= () => {


  
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { store } = useContext(Context)


  console.log(store.isAuth,'- магазин')
  

  const onSubmit = (data) => {
    const { email, password } = data

   store.login(email, password)
  
  };



  return (



  <div className="form">  

    <h2>Вiтаем !</h2>
    <h3>КАЛІ ЛАСКА, УВЯДЗІЦЕ СВАЕ ДАННЫЯ</h3>


    <form   onSubmit={handleSubmit(onSubmit)}>
                Пошта
      <div >
        <input
          {...register('email', {
            required: 'Введите вашу почту aбо iмя',
   
          })}
          type="email"
          placeholder="Увядзiце пошту або iмя"

        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>


      <div>
        <input
          {...register('password', {
            required: 'Введите пароль',

          })}
          type="password"
          placeholder="Ваш пароль"

        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>



      <button className='form--submit' type="submit">Увайсці</button>
    </form>
    

       <div className='form--btn'> 
          <button className='form--btn_modified'>Забылi пароль ?</button>
       </div>

  </div>

  
  );
};

export default  Authorization ;


/*

            minLength: {
              value: 6,
              message: 'Слишком короткий пароль'
            }

                 minLength: {
              value: 6,
              message: 'Слишком короткий пароль'
            }



*/