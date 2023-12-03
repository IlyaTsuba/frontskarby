import React from 'react';
import {Link} from 'react-router-dom'


const RegistrationConfirmation = (props) => {
  const {text, email} = props;
  return (
    <div className='container-registrationConfirmation'>
      <div className='container-registrationConfirmation_block'>
        <Link to='/'>
          <p className='block__link'>
            Back to home
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
            <button className='block-w-info__btn'> go </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export { RegistrationConfirmation }