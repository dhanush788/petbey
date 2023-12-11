import './App.css';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { ThemeProvider } from './context/Theme';
import React from 'react';
import PrivacyPolicy from './pages/Privacy';
import TermsAndConditions from './pages/Terms';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Navbar />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsAndConditions />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
