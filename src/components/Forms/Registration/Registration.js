import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import AuthService from '../../../services/AuthService';
import { Context } from '../../..';



const Registration = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { store } = useContext(Context)


  

  const onSubmit = (data) => {
    const { email, name, password } = data

    console.log('Сработка функции отправки')

    store.Registration(email, name, password)

  };



  return (



    <div className="form">  

    <h2>З ВЯРТАННЕМ!</h2>

    <h3>КАЛІ ЛАСКА, УВЯДЗІЦЕ СВАЕ ДАННЫЯ</h3>

    <form   onSubmit={handleSubmit(onSubmit)}>
                Пошта
      <div >
        <input
          {...register('email', {
            required: 'Введите вашу почту',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Неверный формат почты'
            }
          })}
          type="email"
          placeholder="Увядзiце пошту"

        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

          Имя
      <div>
        <input
          {...register('name', {
            required: 'Введите ваше имя',
            minLength: {
              value: 2,
              message: 'Няверны формат'
            }
          })}
          placeholder="Увядзiце iм'я"

        />
        <div>{errors.name && <p>{errors.name.message}</p>}  </div> 
      </div>


Пароль
      <div>
        <input
          {...register('password', {
            required: 'Введите пароль',
            minLength: {
              value: 6,
              message: 'Слишком короткий пароль'
            }
          })}
          type="password"
          placeholder="Прыдумайце пароль"

        />
        {"Пароль павінен змяшчаць ад 6 да 16 сімвалаў"}
      </div>

      <button className='form--submit' type="submit">Стварыць</button>
    </form>
    

       <div className='form--btn'> 

       <span>Ужо ёсць акаунт ?</span>

        <button className='form--btn_modified'>Забылi пароль ?</button>
       
       </div>


    </div>
  );
};

export default Registration ;
