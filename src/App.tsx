import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import { DashboardContainer, StudentFormContainer } from './containers';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardContainer />} />
        <Route path="/addStudent" element={<StudentFormContainer />} />
        <Route path="/editStudent/:id" element={<StudentFormContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
