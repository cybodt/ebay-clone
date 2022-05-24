import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
            <Home />
          ]} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
