import React from 'react';
import './Home.css';

function ComputerWebcams(props) {
  const { key, productName, srcImg, altImg, price, discount } = props;
  return (
    <div className={productName} key={key}>
      <div className='containerComputerWebcams'>
        <img
          className='imageComputerWebcams'
          src={srcImg}
          alt={altImg}
        />
      </div>
      <div className='containerComputerWebcams-price'>
        <span className='computerWebcams-price'>
          {discount ? `$${Math.round(price - (price * discount / 100)).toFixed(2)}` : price}
        </span>
        <span className='computerWebcams-discount'>
          <span>{discount ? `$${price}` : ''}</span>{discount ? ` - ${discount}% off` : ''}
        </span>
      </div>
    </div>
  );
}

export default ComputerWebcams;
