import './App.css';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Views from './components/view/Views';
import Cartmain from './components/cart/Cartmain';
import AboutUs from './components/about/AboutUs';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function App() {
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    document.body.className = theme === 'light' ? 'bg-light' : 'bg-dark';
  }, [theme]);
  return (
    <>
      <Router>
        <div className='bg-darks'>
        <Routes>
        <Route path="/" element={<Home />} />
        </Routes>
        
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/view/:id" element={<Views />} />
          <Route path="/cart-main" element={<Cartmain />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
