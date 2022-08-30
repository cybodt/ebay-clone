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

function Home() {
  return (
    <div className='home'>
      <div className='home__navBarContainer'>
        <div className='home__navBarContainer-topLine'></div>
        <div className='home__navBarContainer-navBar'>
          <div className='home__navBarContainer-home'><span>Home</span></div>
          <div className='home__navBarContainer-saved'><span>Saved</span></div>
          <div className='home__navBarContainer-electronics'><span>Electronics</span></div>
          <div className='home__navBarContainer-fashion'><span>Fashion</span></div>
          <div className='home__navBarContainer-health&Beauty'><span>Health & Beauty</span></div>
          <div className='home__navBarContainer-home&Garden'><span>Home & Garden</span></div>
          <div className='home__navBarContainer-sports'><span>Sports</span></div>
          <div className='home__navBarContainer-collectiblesAndArt'><span>Collectibles and Art</span></div>
          <div className='home__navBarContainer-industrialEquipment'><span>Industrial equipment</span></div>
          <div className='home__navBarContainer-motors'><span>Motors</span></div>
          <div className='home__navBarContainer-deals'><span>Deals</span></div>
          <div className='home__navBarContainer-sell'><span>Sell</span></div>
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
          <div className='sneakers'>
            <div className='containerBrandsOrCategories'>
              <img
                className='imageBrandsOrCategories'
                src='/images/Explore_Popular_Categories/Sneakers.jpg'
                alt='Sneakers'
              />
            </div>
            <div className='categoriesName'><h3>Sneakers</h3></div>
          </div>
          <div className='koreanBeauty'>
            <div className='containerBrandsOrCategories'>
              <img
                className='imageBrandsOrCategories'
                src='/images/Explore_Popular_Categories/Korean_beauty.jpg'
                alt='Korean beauty'
              />
            </div>
            <div className='categoriesName'><h3>Korean beauty</h3></div>
          </div>
          <div className='Wristwatches'>
            <div className='containerBrandsOrCategories'>
              <img
                className='imageBrandsOrCategories'
                src='/images/Explore_Popular_Categories/Wristwatches.jpg'
                alt='Wristwatches'
              />
            </div>
            <div className='categoriesName'><h3>Wristwatches</h3></div>
          </div>
          <div className='Fishing'>
            <div className='containerBrandsOrCategories'>
              <img
                className='imageBrandsOrCategories'
                src='/images/Explore_Popular_Categories/Fishing.jpg'
                alt='Fishing'
              />
            </div>
            <div className='categoriesName'><h3>Fishing</h3></div>
          </div>
          <div className='Collectibles'>
            <div className='containerBrandsOrCategories'>
              <img
                className='imageBrandsOrCategories'
                src='/images/Explore_Popular_Categories/Collectibles.jpg'
                alt='Collectibles'
              />
            </div>
            <div className='categoriesName'><h3>Collectibles</h3></div>
          </div>
          <div className='Smartphones'>
            <div className='containerBrandsOrCategories'>
              <img
                className='imageBrandsOrCategories'
                src='/images/Explore_Popular_Categories/Smartphones.jpg'
                alt='Smartphones'
              />
            </div>
            <div className='categoriesName'><h3>Smartphones</h3></div>
          </div>
          <div className='Sell'>
            <div className='containerBrandsOrCategories'>
              <img
                className='imageBrandsOrCategories'
                src='/images/Explore_Popular_Categories/Sell.jpg'
                alt='Sell'
              />
            </div>
            <div className='categoriesName'><h3>Sell</h3></div>
          </div>
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
