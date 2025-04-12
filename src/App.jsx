import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/login';
import Header from './components/Header';
import TabDetails from './pages/TabDetails';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tab/:tabId" element={<TabDetails />} />
      </Routes>
    </Router>
  );
}

export default App;