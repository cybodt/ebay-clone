import React from 'react';
import './Home.css';

function ExplorePopularBrands(props) {
  const { key, brandName, srcImg, altImg } = props;
  return (
    <div className={brandName} key={key}>
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
