import React from 'react';
import './Home.css';
import HomeCarousel from './HomeCarousel';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Home() {
  return (
    <div className='home'>
      <div className='home__navBarContainer'>
        <div className='home__navBarContainer-topLine'></div>
        <div className='home__navBarContainer-navBar'>
          <div className='home__navBarConatiner-home'><span>Home</span></div>
          <div className='home__navBarConatiner-saved'><span>Saved</span></div>
          <div className='home__navBarConatiner-electronics'><span>Electronics</span></div>
          <div className='home__navBarConatiner-fashion'><span>Fashion</span></div>
          <div className='home__navBarConatiner-health&Beauty'><span>Health & Beauty</span></div>
          <div className='home__navBarConatiner-home&Garden'><span>Home & Garden</span></div>
          <div className='home__navBarConatiner-sports'><span>Sports</span></div>
          <div className='home__navBarConatiner-collectiblesAndArt'><span>Collectibles and Art</span></div>
          <div className='home__navBarConatiner-industrialEquipment'><span>Industrial equipment</span></div>
          <div className='home__navBarConatiner-motors'><span>Motors</span></div>
          <div className='home__navBarConatiner-deals'><span>Deals</span></div>
          <div className='home__navBarConatiner-sell'><span>Sell</span></div>
        </div>
        <div className='home__navBarContainer-bottomLine'></div>
      </div>
      <div className='home__carouselContainer'>
        <HomeCarousel />
      </div>
      <div className='home__popularBrands'>
        <div className='home__popularBrands-headings'>
          <div className='home__popularBrands-explore'>
            <h2>Explore popular brands</h2>
          </div>
          <div className='home__popularBrands-seeAll'>
            <div>See all&nbsp;</div>
            <ArrowForwardIcon fontSize='large' />
          </div>
          <div className='home__popularBrands-brands'>

          </div>
        </div>

      </div>
      <div className='home__popularCategories'></div>
      <div className='home__dailyDeals'></div>
      <div className='home__computerWebcams'></div>
    </div>
  )
}

export default Home;
