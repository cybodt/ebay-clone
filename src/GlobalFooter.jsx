import React from 'react';
import './GlobalFooter.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FooterCopyright from './FooterCopyright';

function GlobalFooter() {
  return (
    <div className='global-footer'>
      <div className='global-footer__container'>
        <div className='global-footer__menus'>
          <div className='global-footer__column-01'>
            <div className='global-footer__buy-menu'>
              <h3>Buy</h3>
              <div className='global-footer__list-menu'>Registration</div>
              <div className='global-footer__list-menu'>eBay Money Back Guarantee</div>
              <div className='global-footer__list-menu'>Bidding & buying help</div>
              <div className='global-footer__list-menu'>Stores</div>
            </div>
          </div>
          <div className='global-footer__column-02'>
            <div className='global-footer__sell-menu'>
              <h3>Sell</h3>
              <div className='global-footer__list-menu'>Start selling</div>
              <div className='global-footer__list-menu'>Learn to sell</div>
              <div className='global-footer__list-menu'>Affiliates</div>
            </div>
            <div className='global-footer__tools-and-apps-menu'>
              <h3>Tools & apps</h3>
              <div className='global-footer__list-menu'>Developers</div>
              <div className='global-footer__list-menu'>Security center</div>
              <div className='global-footer__list-menu'>Site map</div>
            </div>
          </div>
          <div className='global-footer__column-03'>
            <div className='global-footer__stay-connected-menu'>
              <h3>Stay connected</h3>
              <div className='global-footer__list-menu'>eBay's Blogs</div>
              <div className='global-footer__list-menu'>Facebook</div>
              <div className='global-footer__list-menu'>Twitter</div>
            </div>
          </div>
          <div className='global-footer__column-04'>
            <div className='global-footer__about-ebay-menu'>
              <h3>About eBay</h3>
              <div className='global-footer__list-menu'>Company info</div>
              <div className='global-footer__list-menu'>News</div>
              <div className='global-footer__list-menu'>Investors</div>
              <div className='global-footer__list-menu'>Careers</div>
              <div className='global-footer__list-menu'>Government relations</div>
              <div className='global-footer__list-menu'>Advertise with us</div>
              <div className='global-footer__list-menu'>Policies</div>
              <div className='global-footer__list-menu'>Verified Rights Owner (VeRO) Program</div>
            </div>
          </div>
          <div className='global-footer__column-05'>
            <div className='global-footer__help-and-contact-menu'>
              <h3>Help & Contact</h3>
              <div className='global-footer__list-menu'>Seller Information Center</div>
              <div className='global-footer__list-menu'>Contact us</div>
            </div>
            <div className='global-footer__community-menu'>
              <h3>Community</h3>
              <div className='global-footer__list-menu'>Announcements</div>
              <div className='global-footer__list-menu'>Discussion boards</div>
              <div className='global-footer__list-menu'>eBay Giving Works</div>
            </div>
            <div className='global-footer__ebay-sites-menu'>
              <h3>eBay Sites</h3>
              <div className='global-footer__ebay-sites-menu-expanded global-footer__list-menu'>
                <div>natFlag</div>
                <div>United States</div>
                <div>
                  <ArrowDropDownIcon fontSize='small' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='global-footer__footer-copyright'>
          <FooterCopyright />
        </div>
      </div>
    </div>
  );
}

export default GlobalFooter;