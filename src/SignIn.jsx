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
          <div
            className='sign-in__notice-attention'
            style={{ display: 'flex' }}
          >
            <div className='sign-in__notice-attention-icon'>
              <img
                src='/images/other-icons/exclamation-point-red.png'
                alt='Red Exclamation Point'
              />
            </div>
            <div className='sign-in__notice-attention-text'>
              Oops, that's not a match.
            </div>
          </div>
          {/* add `&nbsp;` after `<br />` to take effect in all browsers when `<br />` is used in flexbox */}
          <br />&nbsp;
          <div className='sign-in__email-or-username-container'>
            <input
              type='text'
              className='sign-in__email-or-username-input'
              required
            />
            <label>Email or username</label>
            <br />&nbsp;
            <button
              type='submit'
              className='sign-in__continue-btns
                sign-in__email-or-username-btn-continue'
              style={{
                color: '#fff',
                backgroundColor: '#3665F3'
              }}
            >
              Continue
            </button>
          </div>
          <div className='sign-in__social-wrapper'>
            <div className='sign-in__separator'>
              <div className='sign-in__separator-line animate'></div>
              <div className='sign-in__separator-content animate'>
                <mark>or</mark>
              </div>
            </div>
            <div className='sign-in__social-buttons'>
              <button
                type='button'
                className='sign-in__continue-btns
                sign-in__fb-btn'
              >
                <img
                  src='/images/logos-on-buttons/facebook-logo.png'
                  alt='Facebook logo'
                />
                <span>Continue with Facebook</span>
              </button>
              <button
                type='button'
                className='sign-in__continue-btns
                sign-in__google-btn'
              >
                <img
                  src='/images/logos-on-buttons/google-logo.png'
                  alt='Google logo'
                />
                <span>Continue with Google</span>
              </button>
              <button
                type='button'
                className='sign-in__continue-btns
                sign-in__apple-btn'
              >
                <img
                  src='/images/logos-on-buttons/apple-logo.png'
                  alt='Apple logo'
                />
                <span>Continue with Apple</span>
              </button>
            </div>
          </div>
          <div className='sign-in__kmsi-container'>
            <label htmlFor='kmsi-checkbox'>
              <div>
                <input
                  type='checkbox'
                  id='kmsi-checkbox'
                  name='kmsi'
                  className='sign-in__kmsi-checkbox'
                // checked
                />
                <span>Stay signed in</span>
              </div>
            </label>
            <p>
              Using a public or shared device?<br />
              Uncheck to protect your account.
            </p>
            <button
              type='button'
              className='sign-in__kmsi-more-info-btn'
            >
              Learn more
            </button>
            <div className='sign-in__kmsi-more-info-container'>
              <div className='sign-in__kmsi-more-info-icon'>
                <InfoIcon
                  fontSize='small'
                  style={{
                    color: 'white',
                    backgroundColor: '#3665f3'
                  }}
                />
              </div>
              <div className='sign-in__kmsi-more-info-text'>
                With this box checked, we'll keep you signed in, making it easier to bid and buy. You'll also be all set to pay if you've saved your payment info. You can always turn off this feature in My eBay. We may ask you to sign in again for some activities, such as making changes to your account.
              </div>
            </div>
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