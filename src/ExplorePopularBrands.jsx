import React from 'react';
import './Home.css';

function ExplorePopularBrands(props) {
  const { className, brandName, srcImg, altImg } = props;
  return (
    <div className={className}>
      <div className='brands-or-categories-image-container'>
        <img
          className='brands-or-categories-image-container__image'
          src={srcImg}
          alt={altImg}
        />
      </div>
      <div className='brands-name'>
        <h3>{brandName}</h3>
      </div>
    </div>
  );
}

export default ExplorePopularBrands;