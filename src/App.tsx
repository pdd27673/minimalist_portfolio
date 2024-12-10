import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import OnStartingOut from './pages/ThoughsOnSE';
import Contact from './pages/Contact';
import Colophon from './pages/Colophon';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/on-starting-out" element={<OnStartingOut />} />
      <Route path='/contact' element={<Contact />}/>
      <Route path='/colophon' element={<Colophon />}/>
    </Routes>
  );
};

export default App;
