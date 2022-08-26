import React, { useEffect, useState } from 'react';
import './ScrollToTop.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


function ScrollToTop() {

  const [showScrollToTop, setShowScrollToTop] = useState(true);

  useEffect(() => {
    const handleScroll = event => {
      // if scroller is below 400px from the top, scrollToTop button disappears
      (window.scrollY > 400) ? setShowScrollToTop(true) : setShowScrollToTop(false)
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className='scrollToTop'
      onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }}
      style={{
        visibility: showScrollToTop ? 'visible' : 'hidden'
      }}
      title='Scroll to top'
    >
      <KeyboardArrowUpIcon className='arrowUpIcon' fontSize='large' />
    </div>
  );
};

export default ScrollToTop;