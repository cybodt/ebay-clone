import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderContainer from './HeaderContainer';
import Home from './Home';
// import HomeCarousel from './HomeCarousel';
import SearchContainer from './SearchContainer';
// import TestDiv from './TestDiv';
import Carousel2 from './Carousel2';


function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Routes>
          <Route path='/' element={[
            <HeaderContainer />,
            <SearchContainer />,
            <Home />,
            // <TestDiv />,
            // <HomeCarousel />
            <Carousel2 />
          ]} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
