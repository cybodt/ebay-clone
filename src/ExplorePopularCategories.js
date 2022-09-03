import React from 'react';
import './Home.css';

function ExplorePopularCategories(props) {
  const { myKey, className, categoryName, srcImg, altImg } = props;
  return (
    <div className={className} key={myKey}>
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
