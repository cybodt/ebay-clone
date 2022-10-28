import React from 'react';
import './Header.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <div className='header'>
        <div className='header__nav'>
          <div className='header__nav-left'>
            <div>
              Hi!&nbsp;
              <Link to='/signin'>
                <span className='header__sign-in'>
                  Sign in
                </span>
              </Link>
              &nbsp;or&nbsp;
              <span className='header__register'>register</span>
            </div>
            <div className='header__global-deals'>Daily Deals</div>
            <div className='header__help-and-contact'>Help & Contact</div>
          </div>
          <div className='header__nav-right'>
            <div className='header__ship-to'>Ship to</div>
            <div className='header__sell'>Sell</div>
            <div className='header__watchlist'>
              <span>Watchlist</span>
              <KeyboardArrowDownIcon />
            </div>
            <div className='header__my-ebay'>
              <span>My eBay</span>
              <KeyboardArrowDownIcon />
            </div>
            <div className='header__notifications'>
              <NotificationsNoneIcon />
            </div>
            <div className='header__shopping-cart'>
              <ShoppingCartOutlinedIcon />
            </div>
          </div>
        </div>
      </div>
      <div className='header-bottom-line'></div>
    </div>
  );
}

export default Header;