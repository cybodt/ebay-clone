import React from 'react';
import './GlobalFooterContainer.css';

function GlobalFooterContainer() {
  return (
    <div className='globalFooterContainer'>
      <div className='globalFooterContainer__footer'>
        <div className='globalFooterContainer__footer-menus'>
          <div className='column01'>
            <div className='buy'>
              <h3>Buy</h3>
              <div>Registration</div>
              <div>eBay Money Back Guarantee</div>
              <div>Bidding & buying help</div>
              <div>Stores</div>
            </div>
          </div>
          <div className='column02'></div>
          <div className='column03'></div>
          <div className='column04'></div>
          <div className='column05'></div>
        </div>
        <div className='globalFooterContainer__footer-copyright'>

        </div>
      </div>
    </div>
  );
}

export default GlobalFooterContainer;
