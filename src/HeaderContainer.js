import React from 'react';
import './HeaderContainer.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function HeaderContainer() {
  return (
    <div>
      <div className='headerContainer'>
        <div className='headerLineOne'>
          <div className='headerLineOne__left'>
            <div className='signInAndRegister'>
              Hi!&nbsp;
              <span className='signIn'>Sign in</span>
              &nbsp;or&nbsp;
              <span className='register'>register</span>
            </div>
            <div className='globalDeals'>Daily Deals</div>
            <div className='helpAndContact'>Help & Contact</div>
          </div>
          <div className='headerLineOne__right'>
            <div className='shipTo'>Ship to</div>
            <div className='sell'>Sell</div>
            <div className='watchlist'>
              <span>Watchlist</span>
              <KeyboardArrowDownIcon />
            </div>
            <div className='my_ebay'>
              <span>My eBay</span>
              <KeyboardArrowDownIcon />
            </div>
            <div className='notifications'>
              <NotificationsNoneIcon />
            </div>
            <div className='shoppingCart'>
              <ShoppingCartOutlinedIcon />
            </div>
          </div>
        </div>
      </div>
      <div className='headerBottomLine'></div>
    </div>
  )
}

export default HeaderContainer;
