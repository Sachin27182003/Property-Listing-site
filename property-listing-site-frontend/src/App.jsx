import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import AddProperty from './pages/AddProperty.jsx';
import PropertyDetails from './pages/PropertyDetails.jsx';

export default function App() {
  return (
    <div className="p-4">
      <nav className="flex justify-between items-center mb-6">
        <Link to="/" className="text-xl font-bold">🏠 PropertyApp</Link>
        <Link to="/add" className="bg-blue-500 text-white px-4 py-2 rounded">Add Property</Link> 
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddProperty />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
      </Routes>
    </div>
   
  );
}