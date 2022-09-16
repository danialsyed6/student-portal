import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import { DashboardContainer, StudentFormContainer } from './containers';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardContainer />} />
        <Route path="/student" element={<StudentFormContainer />} />
        <Route path="/student/:id" element={<StudentFormContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
