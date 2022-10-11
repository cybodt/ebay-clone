import React from 'react';
import './GlobalFooterContainer.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FooterCopyright from './FooterCopyright';

function GlobalFooterContainer() {
  return (
    <div className='globalFooterContainer'>
      <div className='globalFooterContainer__footer'>
        <div className='globalFooterContainer__footer-menus'>
          <div className='column01'>
            <div className='buyMenu'>
              <h3>Buy</h3>
              <div className='listMenu'>Registration</div>
              <div className='listMenu'>eBay Money Back Guarantee</div>
              <div className='listMenu'>Bidding & buying help</div>
              <div className='listMenu'>Stores</div>
            </div>
          </div>
          <div className='column02'>
            <div className='sellMenu'>
              <h3>Sell</h3>
              <div className='listMenu'>Start selling</div>
              <div className='listMenu'>Learn to sell</div>
              <div className='listMenu'>Affiliates</div>
            </div>
            <div className='toolsAndAppsMenu'>
              <h3>Tools & apps</h3>
              <div className='listMenu'>Developers</div>
              <div className='listMenu'>Security center</div>
              <div className='listMenu'>Site map</div>
            </div>
          </div>
          <div className='column03'>
            <div className='stayConnectedMenu'>
              <h3>Stay connected</h3>
              <div className='listMenu'>eBay's Blogs</div>
              <div className='listMenu'>Facebook</div>
              <div className='listMenu'>Twitter</div>
            </div>
          </div>
          <div className='column04'>
            <div className='aboutEBayMenu'>
              <h3>About eBay</h3>
              <div className='listMenu'>Company info</div>
              <div className='listMenu'>News</div>
              <div className='listMenu'>Investors</div>
              <div className='listMenu'>Careers</div>
              <div className='listMenu'>Government relations</div>
              <div className='listMenu'>Advertise with us</div>
              <div className='listMenu'>Policies</div>
              <div className='listMenu'>Verified Rights Owner (VeRO) Program</div>
            </div>
          </div>
          <div className='column05'>
            <div className='helpAndContactMenu'>
              <h3>Help & Contact</h3>
              <div className='listMenu'>Seller Information Center</div>
              <div className='listMenu'>Contact us</div>
            </div>
            <div className='communityMenu'>
              <h3>Community</h3>
              <div className='listMenu'>Announcements</div>
              <div className='listMenu'>Discussion boards</div>
              <div className='listMenu'>eBay Giving Works</div>
            </div>
            <div className='eBaySitesMenu'>
              <h3>eBay Sites</h3>
              <div className='eBaySitesMenu-expanded listMenu'>
                <div>natFlag</div>
                <div>United States</div>
                <div>
                  <ArrowDropDownIcon fontSize='small' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='globalFooterContainer__footer-copyright'>
          <FooterCopyright />
        </div>
      </div>
    </div>
  );
}

export default GlobalFooterContainer;
