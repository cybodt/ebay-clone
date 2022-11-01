import React from 'react';
import FooterCopyright from './FooterCopyright';
import './SignIn.css';

function SignIn() {
  return (
    <div className='sign-in'>
      <div className='sign-in__survey'>
        Tell us what you think
      </div>
      <div className='sign-in__ebay-logo'>
        <img
          src='/images/eBay_logo.jpg'
          alt='eBay logo'
        />
      </div>
      <div className='sign-in__container'>
        <div className='sign-in__intro'>
          <h1 className='sign-in__intro-heading'>Hello</h1>
          <div className='sign-in__intro-sub-heading'>
            Sign in to eBay or&nbsp;
            <div id='sign-in__create-account-link'>
              create an account
            </div>
          </div>
        </div>
        <form className='sign-in__form'>
          <div className='sign-in__notice-attention'>
            <div className='sign-in__notice-attention-icon'></div>
            <div className='sign-in__notice-attention-text'>
              Oops, that's not a match.
            </div>
          </div>
          <div className='sign-in__email-or-username-container'>
            
          </div>
        </form>
      </div>
      <div className='sign-in__footer'>
        <FooterCopyright />
      </div>
    </div>
  );
}

export default SignIn;