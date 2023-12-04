import { useDispatch } from 'react-redux'
import { useState } from 'react'
import '../../../scss/components/_signIn.scss'
import { signIn } from '../../../store/action_creators'


const Authorization = () => {
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    email: '',
    password: '',
  })

  const handle = (e, type) => {
    setInput({
      ...input,
      [type]: e.target.value,
    });
  };
  
  return (
    <div className='container-signIn-form'>
      <h1 className='container-signIn-form__title'> 
        З ВЯРТАННЕМ! 
      </h1>
      <div className='box-w-text'>
        <h3 className='box-w-text__text'> 
          КАЛІ ЛАСКА, УВЯДЗІЦЕ СВАЕ ДАННЫЯ 
        </h3>
      </div>
      <div className='block-w-form'>
        <h5 className='block-w-form__text'>
          Ім’я або пошта
        </h5>
        <input
          className='block-w-form__inpt' 
          placeholder='Увядзіце ім’я або пошту'
          type='email'
          value={input.email}
          onChange={(val) => handle(val, 'email')}
        />
        <h5 className='block-w-form__text'>
          Пароль
        </h5>
        <input
          className='block-w-form__inpt'
          placeholder='Увядзіце пароль'
          type='password'
          value={input.password}
          onChange={(val) => handle(val, 'password')}
        />
      </div>
      <button 
        className='container-signIn-form__btn'
        onClick={ () => dispatch(signIn(input))}
      > Увайсці </button>
      <a 
        href='/restore' 
        className='container-signIn-form__link'
      > Забылі пароль? </a>
    </div>
  )
}

export { Authorization }