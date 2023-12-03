import React from 'react';
import { Link } from 'react-router-dom';

const Confirmed = (props) => {
  const { text } = props;
  return (
    <div className='container-confirmed'>
      <div className='container-confirmed_block'>
        <Link to='/'>
          <p className='container-confirmed__link'>
            Back to home
          </p>
        </Link>
        <div className='flex-container'>
          <div className='block-w-info'>
          {!text ? 
            <p className='container-confirmed__text'>
              Email confirmed.
              <React.Fragment><br/></React.Fragment>
              Your registration is now completed!
              <React.Fragment><br/></React.Fragment>
            </p>
            :
            <p className='container-confirmed__text'>{text}</p>
          }
            <button
              className='btn-confirmed'
            > Go </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export { Confirmed };