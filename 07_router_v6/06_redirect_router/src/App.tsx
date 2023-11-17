import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './scss/App.scss';

import Navigator from './Navigator';
import Home from './Home';
import About from './About';
import Member from './Member';

function App() {
  return (
    <BrowserRouter>
      <Navigator />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/:parameter/*" element={<About />} />
        <Route path="/member" element={<Member />} />
        <Route path="/member/:name" element={<Member />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

