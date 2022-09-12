import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import { AddStudent, Dashboard, EditStudent } from './views/pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addStudent" element={<AddStudent />} />
        <Route path="/editStudent" element={<EditStudent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
