import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import AdminDashboard from './pages/AdminDashboard';
import InstructorDashboard from './pages/InstructorDashboard';

function App() {
  return (
    <div className="app-container">
      <nav className="navbar">
        <Link to="/admin" className="nav-link">Admin Dashboard</Link>
        <Link to="/instructor" className="nav-link">Instructor Dashboard</Link>
      </nav>

      <div className="content">
        <Routes>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/instructor" element={<InstructorDashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
