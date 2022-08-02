import React from 'react';
import './Home.css';
import HomeCarousel from './HomeCarousel';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import productsDailyDeals from './ArrayDailyDeals';
import DailyDeals from './DailyDeals';

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
        </div>
        <div className='home__popularBrands-brands'>
          <div className='apple'>
            <div className='containerBrandsOrCategories'>
              <img
                className='imageBrandsOrCategories'
                src='/images/Explore_popular_brands/Apple.jpg'
                alt='Apple'
              />
            </div>
            <div className='brandsName'><h3>Apple</h3></div>
          </div>
          <div className='samsung'>
            <div className='containerBrandsOrCategories'>
              <img
                className='imageBrandsOrCategories'
                src='/images/Explore_popular_brands/Samsung.jpg'
                alt='Samsung'
              />
            </div>
            <div className='brandsName'><h3>Samsung</h3></div>
          </div>
          <div className='sony'>
            <div className='containerBrandsOrCategories'>
              <img
                className='imageBrandsOrCategories'
                src='/images/Explore_popular_brands/Sony.jpg'
                alt='Sony'
              />
            </div>
            <div className='brandsName'><h3>Sony</h3></div>
          </div>
          <div className='ugreen'>
            <div className='containerBrandsOrCategories'>
              <img
                className='imageBrandsOrCategories'
                src='/images/Explore_popular_brands/Ugreen.jpg'
                alt='Ugreen'
              />
            </div>
            <div className='brandsName'><h3>Ugreen</h3></div>
          </div>
          <div className='xiaomi'>
            <div className='containerBrandsOrCategories'>
              <img
                className='imageBrandsOrCategories'
                src='/images/Explore_popular_brands/Xiaomi.jpg'
                alt='Xiaomi'
              />
            </div>
            <div className='brandsName'><h3>Xiaomi</h3></div>
          </div>
          <div className='nike'>
            <div className='containerBrandsOrCategories'>
              <img
                className='imageBrandsOrCategories'
                src='/images/Explore_popular_brands/Nike.jpg'
                alt='Nike'
              />
            </div>
            <div className='brandsName'><h3>Nike</h3></div>
          </div>
          <div className='bornPretty'>
            <div className='containerBrandsOrCategories'>
              <img
                className='imageBrandsOrCategories'
                src='/images/Explore_popular_brands/Born_Pretty.jpg'
                alt='Born Pretty'
              />
            </div>
            <div className='brandsName'><h3>Born Pretty</h3></div>
          </div>
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
            />)
          )}
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
          <div className='recommended'>Recommended for you</div>
        </div>
      </div>
    </div>
  )
}

export default Home;
