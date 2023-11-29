import './App.css';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Hero7 from './components/Hero7';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';

//create a route

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Hero7 />
      <Footer />
    </div>
  );
}

export default App;
