import React from 'react';
import './Home.css';
import MainCarousel from './MainCarousel';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import productsDailyDeals from './array-daily-deals';
import DailyDeals from './DailyDeals';
import productsComputerWebcams from './array-computer-webcams';
import ComputerWebcams from './ComputerWebcams';
import ExplorePopularBrands from './ExplorePopularBrands';
import productsExplorePopularBrands from './array-explore-popular-brands';
import productsExplorePopularCategories from './array-explore-popular-categories';
import ExplorePopularCategories from './ExplorePopularCategories';

function Home() {
  return (
    <div className='home'>
      <div className='nav-bar-container'>
        <div className='nav-bar-container__top-line' />
        <div className='nav-bar-container__nav-bar'>
          <div className='nav-bar-container__home'><span>Home</span></div>
          <div className='nav-bar-container__saved'><span>Saved</span></div>
          <div className='nav-bar-container__electronics'><span>Electronics</span></div>
          <div className='nav-bar-container__fashion'><span>Fashion</span></div>
          <div className='nav-bar-container__health-and-beauty'><span>Health & Beauty</span></div>
          <div className='nav-bar-container__home-and-garden'><span>Home & Garden</span></div>
          <div className='nav-bar-container__sports'><span>Sports</span></div>
          <div className='nav-bar-container__collectibles-and-art'><span>Collectibles and Art</span></div>
          <div className='nav-bar-container__industrial-equipment'><span>Industrial equipment</span></div>
          <div className='nav-bar-container__motors'><span>Motors</span></div>
          <div className='nav-bar-container__deals'><span>Deals</span></div>
          <div className='nav-bar-container__sell'><span>Sell</span></div>
        </div>
        <div className='nav-bar-container__bottom-line'></div>
      </div>
      <div className='main-carousel-container'>
        <MainCarousel />
      </div>
      <div className='popular-brands'>
        <div className='popular-brands__headings'>
          <div className='popular-brands__explore'>
            <h2>Explore popular brands</h2>
          </div>
          <div className='popular-brands__see-all'>
            <div>See all&nbsp;</div>
            <ArrowForwardIcon fontSize='large' />
          </div>
        </div>
        <div className='popular-brands__brands'>
          {productsExplorePopularBrands.map((el, i) => (
            <ExplorePopularBrands
              key={i}
              className={el.className}
              brandName={el.brandName}
              srcImg={el.srcImg}
              altImg={el.altImg}
            />
          ))}
        </div>
      </div>
      <div className='popular-categories'>
        <div className='popular-categories__headings'>
          <div className='popular-categories__explore'>
            <h2>Explore Popular Categories</h2>
          </div>
          <div className='popular-categories__see-all'>
            <div>See all&nbsp;</div>
            <ArrowForwardIcon fontSize='large' />
          </div>
        </div>
        <div className='popular-categories__categories'>
          {productsExplorePopularCategories.map((el, i) => (
            <ExplorePopularCategories
              key={i}
              className={el.className}
              categoryName={el.categoryName}
              srcImg={el.srcImg}
              altImg={el.altImg}
            />
          ))}
        </div>
      </div>
      <div className='daily-deals'>
        <div className='daily-deals__headings'>
          <div className='daily-deals__explore'>
            <h2>Daily Deals</h2>
          </div>
          <div className='daily-deals__see-all'>
            <div>See all&nbsp;</div>
            <ArrowForwardIcon fontSize='large' />
          </div>
        </div>
        <div className='daily-deals__deals'>
          {productsDailyDeals.map((el, i) => (
            <DailyDeals
              key={i}
              productName={el.productName}
              srcImg={el.srcImg}
              altImg={el.altImg}
              price={el.price}
            />
          ))}
        </div>
      </div>
      <div className='computer-webcams'>
        <div className='computer-webcams__headings'>
          <div className='computer-webcams__explore'>
            <h2>Computer Webcams</h2>
          </div>
          <div className='computer-webcams__see-all'>
            <div>See all&nbsp;</div>
            <ArrowForwardIcon fontSize='large' />
          </div>
          <div className='computer-webcams__recommended'>Recommended for you</div>
        </div>
        <div className='computer-webcams__webcams'>
          {productsComputerWebcams.map((el, i) => (
            <ComputerWebcams
              key={i}
              productName={el.productName}
              srcImg={el.srcImg}
              altImg={el.altImg}
              price={el.price}
              discount={el.discount}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;