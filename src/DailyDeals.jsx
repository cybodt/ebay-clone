import React from 'react';
import './Home.css';

function DailyDeals(props) {
  const { productName, srcImg, altImg, price } = props;
  return (
    <div className={productName}>
      <div className='daily-deals-image-container'>
        <img
          className='daily-deals-image-container__image'
          src={srcImg}
          alt={altImg}
        />
      </div>
      <div className='daily-deals-price'>
        <span>{price}</span>
      </div>
    </div>
  );
}

export default DailyDeals;