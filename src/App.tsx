import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import OnStartingOut from './pages/ThoughsOnSE';
import Contact from './pages/Contact';
import Colophon from './pages/Colophon';
import GlobalStyles from './styles/GlobalStyles';
import Interests from './pages/Interests';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/on-starting-out" element={<OnStartingOut />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/colophon' element={<Colophon />} />
        <Route path='/interests' element={<Interests />} />
      </Routes>
    </>
  );
};

export default App;
