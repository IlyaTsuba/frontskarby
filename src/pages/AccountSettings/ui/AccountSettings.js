import cls from './AccountSettings.module.scss'
import { useState } from "react"
import { useDispatch } from "react-redux"
import { setEmail, setPassword } from "../../../store/action_creators"
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
    <section className={cls.container_accountSettings}>
      <ul className={cls.list_settings}>
        <li 
          className={cls.list_item}
          onClick={()=>handleClick('password')}
        >Змяніць пароль</li>
        {state === 'password' && 
          <div className={cls.block_w}>
            {typeof(success) === 'string' 
            ? <div>{success}</div>
            : <>
              <label>
                Новы пароль
                <input
                  className={cls.block_w__inpt}
                  type={'password'}
                  placeholder={'Новы пароль'}
                  value={input.password}
                  onChange={handler('new_password')}
                />
              </label>
              <label>
                Сучасны пароль
                <input
                  className={cls.block_w__inpt}
                  type={'password'}
                  placeholder={'Сучасны пароль'}
                  value={input.password}
                  onChange={handler('current_password')}
                />
              </label>
              <button
                className={cls.block_w__inpt}
                onClick={() => {
                  const filteredInput = Object.keys(input)
                    .filter(key => key !== 'undefined')
                    .reduce((acc, key) => {
                      acc[key] = input[key];
                      return acc
                    }, {});
                  dispatch(setPassword(filteredInput));
                  setSuccess('Пароль зменены паспяхова')
                }}
              >Змяніць</button>
            </>
            }
          </div>
        }
        <li 
          className={cls.list_item}
          onClick={()=>handleClick('email')}
        >Змяніць пошту</li>
        {state === 'email' && 
          <div className={cls.block_w}>
            {success 
            ? <div>{success}</div>
            : <>
            <label>
              Сучасны пароль
              <input
                className={cls.block_w__inpt}
                type='password'
                placeholder={'Сучасны пароль'}
                value={input.password}
                onChange={handler('current_password')}
              />
            </label>
            <label>
              Новая пошта
              <input
                className={cls.block_w__inpt}
                type={'email'}
                placeholder={'Новая пошта'}
                value={input.email}
                onChange={handler('new_email')}
              />
            </label>
            <button
              className={cls.block_w__inpt}
              onClick={() => {
                const filteredInput = Object.keys(input)
                  .filter(key => key !== 'undefined')
                  .reduce((acc, key) => {
                    acc[key] = input[key];
                    return acc
                  }, {});
                dispatch(setEmail(filteredInput))
                setSuccess('Пошта зменена паспяхова')
              }}
            >Змяніць</button>
            </>
          }
          </div>
        }
        <li 
          className={cls.list_item}
          onClick={()=>handleClick('delete')}
        >Выдаліць акаўнт</li>
        {state === 'delete' && 
          <div className='block-w delete-account'>
            delete
          </div>
        }
      </ul>
    </section>
  )
}

export { AccountSettings };