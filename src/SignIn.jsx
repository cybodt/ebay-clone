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
          src='/images/ebay-logo.jpg'
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
            <input
              type='text'
              placeholder='Email or username'
              className='sign-in__email-or-username-input'
            />
            <button className='sign-in__email-or-username-btn-continue'>Continue</button>
          </div>
          <div className='sign-in__separator'></div>
          <div className='sign-in__social-buttons'>
            <button className='sign-in__fb-btn'>
              <span>Continue with Facebook</span>
            </button>
            <button className='sign-in__google-btn'>
              <span>Continue with Google</span>
            </button>
            <button className='sign-in__apple-btn'>
              <span>Continue with Apple</span>
            </button>
          </div>
          <div className='sign-in__kmsi-container'>
            <label htmlFor='kmsi-checkbox'>
              <input
                type='checkbox'
                id='kmsi-checkbox'
                name='kmsi'
                className='sign-in__kmsi-checkbox'
                checked
              />
              <span>Stay signed in</span>
            </label>
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