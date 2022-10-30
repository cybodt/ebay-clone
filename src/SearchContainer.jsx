import React from 'react';
import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import './SearchContainer.css';
import { Box } from '@mui/material';

function SearchContainer() {
  return (
    <div className='searchContainer'>
      <Link to='/'>
        <img
          src='/images/eBay_logo.jpg'
          alt='eBay logo'
          className='searchContainer__eBayLogo'
        />
      </Link>
      <div className='searchContainer__shopByCategory'>
        <div>Shop by<br></br>category</div>
        <KeyboardArrowDownIcon fontSize='large' />
      </div>
      <div className='searchContainer__search'>
        <div className='searchContainer__searchInput'>
          <Box p={2}>
            <SearchIcon fontSize='large' />
          </Box>
          <input
            type='text'
            placeholder='Search for anything'
          />
        </div>
        <select className='searchContainer__searchSelect'>
          <option value='All Categories'>All Categories</option>
          <option value='Antiques'>Antiques</option>
          <option value='Art'>Art</option>
          <option value='Baby'>Baby</option>
        </select>
      </div>
      <button
        type='submit'
        className='searchContainer__buttonSearch'
      >
        Search
      </button>
      <div className='searchContainer__advancedSearch'>
        Advanced
      </div>
    </div>
  )
}

export default SearchContainer;