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
      <div className='navBarContainer'>
        <div className='navBarContainer__topLine'></div>
        <div className='navBarContainer__navBar'>
          <div className='navBarContainer__home'><span>Home</span></div>
          <div className='navBarContainer__saved'><span>Saved</span></div>
          <div className='navBarContainer__electronics'><span>Electronics</span></div>
          <div className='navBarContainer__fashion'><span>Fashion</span></div>
          <div className='navBarContainer__health&Beauty'><span>Health & Beauty</span></div>
          <div className='navBarContainer__home&Garden'><span>Home & Garden</span></div>
          <div className='navBarContainer__sports'><span>Sports</span></div>
          <div className='navBarContainer__collectiblesAndArt'><span>Collectibles and Art</span></div>
          <div className='navBarContainer__industrialEquipment'><span>Industrial equipment</span></div>
          <div className='navBarContainer__motors'><span>Motors</span></div>
          <div className='navBarContainer__deals'><span>Deals</span></div>
          <div className='navBarContainer__sell'><span>Sell</span></div>
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
        </div>
        <div className='home__popularBrands-brands'>
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
      <div className='home__popularCategories'>
        <div className='home__popularCategories-headings'>
          <div className='home__popularCategories-explore'>
            <h2>Explore Popular Categories</h2>
          </div>
          <div className='home__popularCategories-seeAll'>
            <div>See all&nbsp;</div>
            <ArrowForwardIcon fontSize='large' />
          </div>
        </div>
        <div className='home__popularCategories-categories'>
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
