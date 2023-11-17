import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './scss/App.scss';
import Header from './Header';
import WikiPage from './WikiPage'
import Error404 from './Error404'


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<WikiPage />} />
          <Route path="/w/:pageName" element={<WikiPage />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

