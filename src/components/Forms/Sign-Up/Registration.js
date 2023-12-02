import { useDispatch } from 'react-redux'
import '../../../scss/components/_signUp.scss'
import { useState } from 'react';
import { registration } from '../../../store/action_creators';

const Registration = () => {
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    email: '',
    username: '',
    password: '',
  })

  const handle = (e, type) => {
    setInput({
      ...input,
      [type]: e.target.value,
    })
  }

  return (
    <div className='container-signUp-form'>
      <h1 className='container-signUp-form__title'> 
        Вітаем!
      </h1>
      <div className='box-w-text'>
        <h3 className='box-w-text__text'> 
          КАЛІ ЛАСКА, УВЯДЗІЦЕ СВАЕ ДАННЫЯ 
        </h3>
      </div>
      <div className='block-w-form'>
        <h5 className='block-w-form__text'>
          Пошта
        </h5>
        <input
          className='block-w-form__inpt' 
          placeholder='Увядзіце пошту'
          type='email'
          value={input.email}
          onChange={(val) => handle(val, 'email')}
        />
        <h5 className='block-w-form__text'>
          Ім’я
        </h5>
        <input
          className='block-w-form__inpt'
          placeholder='Увядзіце ім’я'
          type='userName'
          value={input.userName}
          onChange={(val) => handle(val, 'username')}
        />
        <h5 className='block-w-form__text'>
          Пароль
        </h5>
        <input
          className='block-w-form__inpt'
          placeholder='Прыдумайце пароль'
          type='password'
          value={input.password}
          onChange={(val) => handle(val, 'password')}
        />
      </div>
      <button 
        className='container-signUp-form__btn'
        onClick={ () => dispatch(registration(input))}
      > Стварыць </button>
      <span 
        className='container-signUp-form__text'
      >   Ужо ёсць акаўнт? </span>
      <a 
        href='/sign-in' 
        className='container-signUp-form__link'
      > Увайсці </a>
    </div>
  )
}

export { Registration }