import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalFooterContainer from './GlobalFooterContainer';
import HeaderContainer from './HeaderContainer';
import Home from './Home';
import SearchContainer from './SearchContainer';

function App() {
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
      </div>
    </BrowserRouter>
  );
}

export default App;
