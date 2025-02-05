import "./App.css";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { ThemeProvider } from "./context/Theme";
import React from "react";
import PrivacyPolicy from "./pages/Privacy";
import TermsAndConditions from "./pages/Terms";
import Delete from "./pages/Delete";
import Hero7 from "./components/Hero7";
import SafetyStandards from "./pages/Safety_Standards";

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
                <Hero7 />
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
                <Hero7 />
                <Footer />
              </>
            }
          />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/delete" element={<Delete />} />
          <Route path="/safety-standards" element={<SafetyStandards />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
