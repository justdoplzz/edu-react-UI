import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './scss/App.scss';

import Home from './Home';
import About from './About';
import Navigator from './Navigator';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigator />
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

