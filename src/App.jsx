import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next'; // Import I18nextProvider
import i18n from './i18n'; // Import the i18n configuration
import HeaderComponent from './Components/Header/HeaderComponent.jsx';
import FooterComponent from './Components/Footer/Footer.jsx';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import Team from './Pages/Team/Team';

export default function App() {
  return (
    <I18nextProvider i18n={i18n}> {/* Wrap the app with I18nextProvider */}
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </I18nextProvider>
  );
}