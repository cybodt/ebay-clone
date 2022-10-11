import React from 'react';
import './Home.css';

function ExplorePopularCategories(props) {
  const { className, categoryName, srcImg, altImg } = props;
  return (
    <div className={className}>
      <div className='containerBrandsOrCategories'>
        <img
          className='imageBrandsOrCategories'
          src={srcImg}
          alt={altImg}
        />
      </div>
      <div className='categoriesName'><h3>{categoryName}</h3></div>
    </div>
  );
}


export default ExplorePopularCategories;
