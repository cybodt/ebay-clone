import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalFooter from './GlobalFooter';
import Header from './Header';
import Home from './Home';
import ScrollToTop from './ScrollToTop';
import SearchContainer from './SearchContainer';
import SignIn from './SignIn';


function App() {

  return (
    <BrowserRouter>
      <div className='app'>
        <Routes>
          <Route path='/signin' element={[
            <SignIn key='1' />
          ]} />
          <Route path='/' element={[
            <Header key='1' />,
            <SearchContainer key='2' />,
            <Home key='3' />,
            <GlobalFooter key='4' />
          ]} />
        </Routes>
        <ScrollToTop />
      </div>
    </BrowserRouter>
  );
}

export default App;
