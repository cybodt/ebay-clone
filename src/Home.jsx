import React from 'react';
import './Home.css';
import HomeCarousel from './HomeCarousel';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import productsDailyDeals from './ArrayDailyDeals';
import DailyDeals from './DailyDeals';
import productsComputerWebcams from './ArrayComputerWebcams';
import ComputerWebcams from './ComputerWebcams';
import ExplorePopularBrands from './ExplorePopularBrands';
import productsExplorePopularBrands from './ArrayExplorePopularBrands';
import productsExplorePopularCategories from './ArrayExplorePopularCategories';
import ExplorePopularCategories from './ExplorePopularCategories';


function Home() {
  return (
    <div className='home'>
      <div className='nav-bar-container'>
        <div className='nav-bar-container__top-line'></div>
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
      <div className='home-carousel-container'>
        <HomeCarousel />
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
      <div className='home__dailyDeals'>
        <div className='home__dailyDeals-headings'>
          <div className='home__dailyDeals-explore'>
            <h2>Daily Deals</h2>
          </div>
          <div className='home__dailyDeals-seeAll'>
            <div>See all&nbsp;</div>
            <ArrowForwardIcon fontSize='large' />
          </div>
        </div>
        <div className='home__dailyDeals-deals'>
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
      <div className='home__computerWebcams'>
        <div className='home__computerWebcams-headings'>
          <div className='home__computerWebcams-explore'>
            <h2>Computer Webcams</h2>
          </div>
          <div className='home__computerWebcams-seeAll'>
            <div>See all&nbsp;</div>
            <ArrowForwardIcon fontSize='large' />
          </div>
          <div className='recommendedProducts'>Recommended for you</div>
        </div>
        <div className='home__computerWebcams-webcams'>
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
  )
}

export default Home;
