import { useDispatch } from 'react-redux'
import '../../../scss/components/_signUp.scss'
import { useState } from 'react';
import { registration } from '../../../store/action_creators';
import { Error } from '../../Error/Error'

const Registration = () => {
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    email: '',
    username: '',
    password: '',
  })

  const [error, setError] = useState({
    email: '',
    username: '',
    password: '',
  })

  const handleError = (title, value) => {
    switch (title) {
      
      case 'username': 
        const requireName = /^[a-zA-Z0-9]+$/;        ;
        !requireName.test(String(value)) ? 
        setError({...error, username: 'Няверны формат'}) : setError({...error, username: ''})
        break;
      
      case 'email':
        const requireEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        !requireEmail.test(String(value).toLocaleLowerCase()) ? 
        setError({...error, email: 'Няверны формат пошты'}) : setError({...error, email: ''})
        break;
        
      case 'password':
        const requirePassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/        ;
        !requirePassword.test(String(value)) ? 
        setError({...error, password: 'Няверны формат пароля'}) : setError({...error, password: ''})
        break;

      default:
        break;
    }
  }

  const handle = (title) => (e) => {
    setInput({
      ...input,
      [title]: e.target.value,
    })
    handleError(title, e.target.value);
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
          title='email'
          value={input.email}
          onChange={handle('email')}
        />
        {error && <Error error={error.email} />}
        <h5 className='block-w-form__text'>
          Ім’я
        </h5>
        <input
          className='block-w-form__inpt'
          placeholder='Увядзіце ім’я'
          type='text'
          title='username'
          value={input.username}
          onChange={handle('username')}
        />
        {error && <Error error={error.username} />}
        <h5 className='block-w-form__text'>
          Пароль
        </h5>
        <input
          className='block-w-form__inpt'
          placeholder='Прыдумайце пароль'
          type='password'
          title='password'
          value={input.password}
          onChange={handle('password')}
        />
        {error && <Error error={error.password}/>}
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