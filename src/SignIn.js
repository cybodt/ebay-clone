import React from 'react';
import FooterCopyright from './FooterCopyright';
import './SignIn.css';

function SignIn() {
  return (
    <div className='signIn'>
      <div className='signIn__survey'>
        Tell us what you think
      </div>
      <div className='signIn__eBayLogo'>
        <img
          src='/images/eBay_logo.jpg'
          alt='eBay logo'
        />
      </div>
      <div className='signIn__container'>
        <div className='signIn__container-intro'>
          <h1 className='heading'>Hello</h1>
          <div className='sub-heading'>
            Sign in to eBay or&nbsp;
            <div id='create-account-link'>
              create an account
            </div>
          </div>
        </div>
        <form className='signIn__container-form'>
          <div className='signIn__container-form__noticeAttention'>
            <div className='signIn__container-form__noticeAttention-icon'></div>
            <div className='signIn__container-form__noticeAttention-text'>
              Oops, that's not a match.
            </div>
          </div>
          <div className='signIn__container-form__emailOrUsernameContainer'>
            
          </div>
        </form>
      </div>
      <div className='signIn__footer'>
        <FooterCopyright />
      </div>
    </div>
  );
}

export default SignIn;
