import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalFooterContainer from './GlobalFooterContainer';
import HeaderContainer from './HeaderContainer';
import Home from './Home';
import SearchContainer from './SearchContainer';
import './App.css';
import { useEffect, useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


function App() {

  const [showScrollToTop, setShowScrollToTop] = useState(true);

  useEffect(() => {
    const handleScroll = event => {
      console.log('window.scrollY', window.scrollY);
      // if scroller is below 400px from the top, scrollToTop button disappears
      (window.scrollY > 400) ? setShowScrollToTop(true) : setShowScrollToTop(false)
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className='app'>
        <Routes>
          <Route path='/' element={[
            <HeaderContainer />,
            <SearchContainer />,
            <Home />,
            <GlobalFooterContainer />
          ]} />
        </Routes>
        <div className='scrollToTop'
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
          }}
          style={{
            visibility: showScrollToTop ? 'visible' : 'hidden'
          }}
          title='Scroll to top'
        ><KeyboardArrowUpIcon className='arrowUpIcon' fontSize='large'/></div>
      </div>
    </BrowserRouter>
  );
}

export default App;
