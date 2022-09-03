import React from 'react';
import './Home.css';

function DailyDeals(props) {
  const { myKey, productName, srcImg, altImg, price } = props;
  return (
    <div className={productName} key={myKey}>
      <div className='containerDailyDeals'>
        <img
          className='imageDailyDeals'
          src={srcImg}
          alt={altImg}
        />
      </div>
      <div className='containerDailyDeals-price'>
        <span>{price}</span>
      </div>
    </div>
  );
}

export default DailyDeals;
