import React from 'react';
import './Home.css';

function ExplorePopularCategories(props) {
  const { className, categoryName, srcImg, altImg } = props;
  return (
    <div className={className}>
      <div className='brands-or-categories-image-container'>
        <img
          className='brands-or-categories-image-container__image'
          src={srcImg}
          alt={altImg}
        />
      </div>
      <div className='categories-name'>
        <h3>{categoryName}</h3>
      </div>
    </div>
  );
}

export default ExplorePopularCategories;