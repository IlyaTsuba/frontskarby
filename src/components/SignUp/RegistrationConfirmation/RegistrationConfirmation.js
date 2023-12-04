import React from 'react';
import {Link} from 'react-router-dom'


const RegistrationConfirmation = (props) => {
  const {text, email} = props;
  return (
    <div className='container-registrationConfirmation'>
        <Link className='block-return-to-hp' to='/sign-up'>
          <svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512">
            <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
          </svg>
          <p className='block-return-to-hp__link'>
            Вярнуцца
          </p>
        </Link>
        <div className='flex-container'>
          <div className='block-w-info'>
          {!text ? 
            <p className='block-w-info__text'>
              Please activate your account with the activation
              <React.Fragment><br/></React.Fragment>
              link, in the email <b>{email}</b>.
              <React.Fragment><br/></React.Fragment>
              Please, check your email.
            </p>
            :
            <p className='block-w-info__text'>{text}</p>
          }
            <button 
              className='block-w-info__btn'
              onClick={() => window.location.pathname = '/'}
            > Вярнуцца на галоўную </button>
          </div>
        </div>
    </div>
  )
}

export { RegistrationConfirmation }