import React from 'react';
import FooterCopyright from './FooterCopyright';
import './SignIn.css';

function SignIn() {
  return (
    <div className='signIn'>
      <div className='signIn__survey'></div>
      <div className='signIn__eBayLogo'></div>
      <div className='signIn__signInForm'></div>
      <div className='signIn__footer'>
        <FooterCopyright />
      </div>
    </div>
  );
}

export default SignIn;
