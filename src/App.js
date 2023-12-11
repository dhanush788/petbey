import './App.css';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Hero7 from './components/Hero7';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { ThemeProvider } from './context/Theme';
import React from 'react';
import PrivacyPolicy from './pages/Privacy';
import TermsAndConditions from './pages/Terms';


function App() {
  return (
    <div>
      <ThemeProvider>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsAndConditions />} />
        </Routes>
      </BrowserRouter>
      <Hero7 />
      <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
