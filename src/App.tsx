import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import { DashboardContainer } from './containers';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
