import React from 'react';
import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import './SearchContainer.css';
import { Box } from '@mui/material';

function SearchContainer() {
  return (
    <div className='search-container'>
      <Link to='/'>
        <img
          src='/images/eBay_logo.jpg'
          alt='eBay logo'
          className='search-container__ebay-logo'
        />
      </Link>
      <div className='search-container__shop-by-category'>
        <div>Shop by<br></br>category</div>
        <KeyboardArrowDownIcon fontSize='large' />
      </div>
      <div className='search-container__search'>
        <div className='search-container__search-input'>
          <Box p={2}>
            <SearchIcon fontSize='large' />
          </Box>
          <input
            type='text'
            placeholder='Search for anything'
          />
        </div>
        <select className='search-container__search-select'>
          <option value='All Categories'>All Categories</option>
          <option value='Antiques'>Antiques</option>
          <option value='Art'>Art</option>
          <option value='Baby'>Baby</option>
        </select>
      </div>
      <button
        type='submit'
        className='search-container__button-search'
      >
        Search
      </button>
      <div className='search-container__advanced-search'>
        Advanced
      </div>
    </div>
  );
}

export default SearchContainer;