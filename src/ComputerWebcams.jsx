import React from 'react';
import './Home.css';

function ComputerWebcams(props) {
  const { productName, srcImg, altImg, price, discount } = props;
  return (
    <div className={productName}>
      <div className='computer-webcams-image-container'>
        <img
          className='computer-webcams-image-container__image'
          src={srcImg}
          alt={altImg}
        />
      </div>
      <div className='computer-webcams-price-container'>
        <span className='computer-webcams-price-container__price'>
          {discount ? `$${Math.round(price - (price * (discount / 100))).toFixed(2)}` : `$${price}`}
        </span>
        <span className='computer-webcams-price-container__discount'>
          <span>{discount ? `$${price}` : ''}</span>
          {/* middle dot */}
          <span>{discount ? '\u00b7' : ''}</span>
          {discount ? `${discount}% off` : ''}
        </span>
      </div>
    </div>
  );
}

export default ComputerWebcams;