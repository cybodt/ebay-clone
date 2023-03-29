import React, { useEffect, useState } from 'react';
import './ScrollToTop.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function ScrollToTop() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // if scroller is below 400px from the top, scrollToTop button disappears
      (window.scrollY > 400) ? setShowScrollToTop(true) : setShowScrollToTop(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className='scroll-to-top'
      role='button'
      tabIndex={0}
      onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }}
      // use onKeyDown event for users with physical disabilities who cannot use a mouse, AT compatibility, and screenreader users
      onKeyDown={(e) => {
        if (e.key !== 'Tab' && e.key !== 'Shift' && e.key !== ' ') {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }
      }}
      style={{
        visibility: showScrollToTop ? 'visible' : 'hidden'
      }}
      title='Scroll to top'
    >
      <KeyboardArrowUpIcon fontSize='large' />
    </div>
  );
}

export default ScrollToTop;