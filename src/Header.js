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
          <div className='header__navLeft'>
            <div>
              Hi!&nbsp;
              <Link to='/signin'>
                <span className='header__signIn'>
                  Sign in
                </span>
              </Link>
              &nbsp;or&nbsp;
              <span className='header__register'>register</span>
            </div>
            <div className='header__globalDeals'>Daily Deals</div>
            <div className='header__helpAndContact'>Help & Contact</div>
          </div>
          <div className='header__navRight'>
            <div className='header__shipTo'>Ship to</div>
            <div className='header__sell'>Sell</div>
            <div className='header__watchlist'>
              <span>Watchlist</span>
              <KeyboardArrowDownIcon />
            </div>
            <div className='header__myEBay'>
              <span>My eBay</span>
              <KeyboardArrowDownIcon />
            </div>
            <div className='header__notifications'>
              <NotificationsNoneIcon />
            </div>
            <div className='header__shoppingCart'>
              <ShoppingCartOutlinedIcon />
            </div>
          </div>
        </div>
      </div>
      <div className='header__bottomLine'></div>
    </div>
  )
}

export default Header;
