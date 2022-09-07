import React from 'react';
import './Home.css';

function ComputerWebcams(props) {
  const { productName, srcImg, altImg, price, discount } = props;
  return (
    <div className={productName}>
      <div className='containerComputerWebcams'>
        <img
          className='imageComputerWebcams'
          src={srcImg}
          alt={altImg}
        />
      </div>
      <div className='containerComputerWebcams-price'>
        <span className='computerWebcams-price'>
          {discount ? `$${Math.round(price - (price * discount / 100)).toFixed(2)}` : `$${price}`}
        </span>
        <span className='computerWebcams-discount'>
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
