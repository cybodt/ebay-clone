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
      <div className='signIn__signInForm'></div>
      <div className='signIn__footer'>
        <FooterCopyright />
      </div>
    </div>
  );
}

export default SignIn;
