import '../../../scss/components/_Restore.scss'

const Restore = () => {
  return (
    <div className='container-Restore-form'>
      <h1 className='container-Restore-form__title'> 
        Забылі пароль?
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
        />
      </div>
      <button 
        className='container-Restore-form__btn'
      > Адправіць </button>
      <span className='container-Restore-form__text'>
        Мы адправім паведамленне з унікальным кодам <br/>для аднаўлення пароля вашага ўліковага запісу
      </span>
    </div>
  )
}

export { Restore }