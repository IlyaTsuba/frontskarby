import '../../scss/components/_AccountSettings.scss'
import { useState } from "react"
import { useDispatch } from "react-redux"
import { setEmail, setPassword } from "../../store/action_creators"
import { debounce } from "lodash"

const AccountSettings = () => {
  const dispatch = useDispatch();

  const [ state, setState ] = useState(null);
  const [ success, setSuccess ] = useState(null)
  const [ input, setInput ] = useState((title) => ({
    [title]: '',
  }));
  
  const handleClick = (className) => {
    setState(className === state ? null : className)
    setSuccess(null)
  }

  const delayerHandler = debounce((title, value) => {
    setInput({
      ...input,
      [title]: value
    });
  }, 300)

  const handler = (title) => (e) => {
    delayerHandler(title, e.target.value)
  }

  return (
    <section className='container-accountSettings'>
      <ul className='list-settings'>
        <li 
          className={`list_item password ${state === 'list_item password' ? 'active' : ''}`}
          onClick={()=>handleClick('password')}
        >Сменить пароль</li>
        {state === 'password' && 
          <div className='block-w form-password'>
            {typeof(success) === 'string' 
            ? <div>{success}</div>
            : <>
              <label>
                Новый пароль
                <input
                  className='block-w__inpt'
                  type={'password'}
                  placeholder={'new password'}
                  value={input.password}
                  onChange={handler('new_password')}
                />
              </label>
              <label>
                Текущий пароль
                <input
                  className='block-w__inpt'
                  type={'password'}
                  placeholder={'current password'}
                  value={input.password}
                  onChange={handler('current_password')}
                />
              </label>
              <button
                className='block-w__btn'
                onClick={() => {
                  const filteredInput = Object.keys(input)
                    .filter(key => key !== 'undefined')
                    .reduce((acc, key) => {
                      acc[key] = input[key];
                      return acc
                    }, {});
                  dispatch(setPassword(filteredInput))
                  setSuccess('Пароль изменен успешно')
                }}
              >Submit</button>
            </>
            }
          </div>
        }
        <li 
          className={`list_item email ${state === 'list_item email' ? 'active' : ''}`}
          onClick={()=>handleClick('email')}
        >Сменить почту</li>
        {state === 'email' && 
          <div className='block-w form-email'>
            {success 
            ? <div>{success}</div>
            : <>
            <label>
              Текущий пароль
              <input
                className='block-w__inpt'
                type={'text'}
                placeholder={'current password'}
                value={input.password}
                onChange={handler('current_password')}
              />
            </label>
            <label>
              Новая почта
              <input
                className='block-w__inpt'
                type={'email'}
                placeholder={'new Email'}
                value={input.email}
                onChange={handler('new_email')}
              />
            </label>
            <button
              className='block-w__btn'
              onClick={() => {
                const filteredInput = Object.keys(input)
                  .filter(key => key !== 'undefined')
                  .reduce((acc, key) => {
                    acc[key] = input[key];
                    return acc
                  }, {});
                dispatch(setEmail(filteredInput))
                setSuccess('Почта изменена успешно')
              }}
            >Submit</button>
            </>
          }
          </div>
        }
        <li 
          className={`list_item delete ${state === 'list_item delete' ? 'active' : ''}`}
          onClick={()=>handleClick('delete')}
        >Удалить аккаунт</li>
        {state === 'delete' && 
          <div className='block-w delete-account'>
            delete
          </div>
        }
      </ul>
    </section>
  )
}

export { AccountSettings }