import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalFooterContainer from './GlobalFooterContainer';
import HeaderContainer from './HeaderContainer';
import Home from './Home';
import ScrollToTop from './ScrollToTop';
import SearchContainer from './SearchContainer';


function App() {

  return (
    <BrowserRouter>
      <div className='app'>
        <Routes>
          <Route path='/' element={[
            <HeaderContainer key='1' />,
            <SearchContainer key='2' />,
            <Home key='3' />,
            <GlobalFooterContainer key='4' />
          ]} />
        </Routes>
        <ScrollToTop />
      </div>
    </BrowserRouter>
  );
}

export default App;
