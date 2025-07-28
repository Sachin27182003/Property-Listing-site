import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import AddProperty from "./pages/AddProperty.jsx";
import PropertyDetails from "./pages/PropertyDetails.jsx";
import "./App.css";

export default function App() {
  return (
    <div className="p-4 ">
      <nav className="flex justify-between items-center mb-6">
        <Link to="/" className="text-xl font-bold text-black">
          🏠 PropertyApp
        </Link>
        <Link
          to="/add"
          className="bg-blue-200 rounded text-black text-xl font-bold px-4 py-2  border-2 border-black"
        >
          + Add Property
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddProperty />} />
        <Route path="/property/:_id" element={<PropertyDetails />} />
      </Routes>
      <nav className="bottom-0 left-0 right-0 mt-4 bg-white shadow-md p-4 flex justify-between items-center z-50">
        <span className="text-gray-600 text-xl font-bold">
          Thank you for visiting our Property Listing Site!
        </span>

        <div className="flex space-x-4 text-sm text-blue-500">
          <a href="/" className="hover:underline">
            Home
          </a>
          <a href="/about" className="hover:underline">
            About
          </a>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
        </div>
      </nav>
    </div>
  );
}
