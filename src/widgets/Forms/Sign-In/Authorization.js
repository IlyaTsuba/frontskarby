import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { signIn } from '../../../store/action_creators'


const Authorization = ({cls}) => {
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
    <div className={cls.container_signIn_form}>
      <h1 className={cls.container_signIn_form__title}> 
        З ВЯРТАННЕМ! 
      </h1>
      <div className={cls.box_w_text}>
        <h3 className={cls.box_w_text__text}> 
          КАЛІ ЛАСКА, УВЯДЗІЦЕ СВАЕ ДАННЫЯ 
        </h3>
      </div>
      <div className={cls.block_w_form}>
        <h5 className={cls.block_w_form__text}>
          Ім’я або пошта
        </h5>
        <input
          className={cls.block_w_form__inpt} 
          placeholder='Увядзіце ім’я або пошту'
          type='email'
          value={input.email}
          onChange={(val) => handle(val, 'email')}
        />
        <h5 className={cls.block_w_form__text}>
          Пароль
        </h5>
        <input
          className={cls.block_w_form__inpt}
          placeholder='Увядзіце пароль'
          type='password'
          value={input.password}
          onChange={(val) => handle(val, 'password')}
        />
      </div>
      <button 
        className={cls.container_signIn_form__btn}
        onClick={ () => dispatch(signIn(input))}
      > Увайсці </button>
      <div className={cls.container_signIn__block_for_user}>
        <a 
          href='/restore' 
          className={cls.container_signIn_form__link}
        > Забылі пароль? </a>
        <a 
          href='/sign-up'
          className={cls.container_signIn_form__link}
        >
          / Зарэгістравацца
          </a>
      </div>
    </div>
  )
}

export { Authorization }