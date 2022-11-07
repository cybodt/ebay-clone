import React from 'react';
import FooterCopyright from './FooterCopyright';
import './SignIn.css';
import InfoIcon from '@mui/icons-material/Info';

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
            <div className='sign-in__create-account-link'>
              create an account
            </div>
          </div>
        </div>
        <form className='sign-in__form'>
          <div className='sign-in__notice-attention'>
            <div className='sign-in__notice-attention-icon'></div>
            <div
              className='sign-in__notice-attention-text'
              style={{ display: 'none' }}
            >
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
              <p>
                Using a public or shared device?<br />
                Uncheck to protect your account.
              </p>
              <button className='sign-in__kmsi-more-info-btn'>Learn more</button>
              <div
                className='sign-in__kmsi-more-info-container'
                style={{ display: 'block' }}
              >
                <div className='sign-in__kmsi-more-info-icon'>
                  <InfoIcon
                    fontSize='small'
                    style={{
                      color: 'white',
                      backgroundColor: 'grey'
                    }}
                  />
                </div>
                <div className='sign-in__kmsi-more-info-text'>
                  With this box checked, we'll keep you signed in, making it easier to bid and buy. You'll also be all set to pay if you've saved your payment info. You can always turn off this feature in My eBay. We may ask you to sign in again for some activities, such as making changes to your account.
                </div>
              </div>
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