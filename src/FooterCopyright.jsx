import React from 'react';
import './FooterCopyright.css';

function FooterCopyright() {
  return (
    <div className='footer-copyright'>
      Copyright &copy; 1995-2022 eBay Inc. All Rights Reserved.&nbsp;<div>Accessibility</div>,&nbsp;<div>User Agreement</div>,&nbsp;<div>Privacy</div>,&nbsp;<div>Payments Terms of Use</div>,&nbsp;<div>Cookies</div>,&nbsp;<div>Do not sell my personal information</div>&nbsp;and&nbsp;
      <div className='ad-choice'>
        <span>AdChoice</span>
        <img
          src='/images/other-icons/ad-choice-icon.png'
          alt='Ad choice icon'
        />
      </div>
    </div>
  );
}

export default FooterCopyright;