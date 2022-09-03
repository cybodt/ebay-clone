import React from 'react';
import './Home.css';

function ExplorePopularBrands(props) {
  const { myKey, className, brandName, srcImg, altImg } = props;
  return (
    <div className={className} key={myKey}>
      <div className='containerBrandsOrCategories'>
        <img
          className='imageBrandsOrCategories'
          src={srcImg}
          alt={altImg}
        />
      </div>
      <div className='brandsName'>
        <h3>{brandName}</h3>
      </div>
    </div>
  );
}

export default ExplorePopularBrands;
