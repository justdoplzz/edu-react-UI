import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './scss/App.scss';

import Navigator from './Navigator';
import Home from './Home';
import About from './About';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigator />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/:parameter/*" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

