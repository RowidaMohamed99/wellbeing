import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import HeaderComponent from './Components/Header/HeaderComponent.jsx';
import FooterComponent from './Components/Footer/Footer.jsx';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import Team from './Pages/Team/Team';
import PrivacyPolicyPage from './Pages/Policy/Policy.jsx';

export default function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/privacy-policy/:lang" element={<PrivacyPolicyPage />} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </I18nextProvider>
  );
}