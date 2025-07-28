import React from 'react';

export default function FilterBar({ filters, setFilters }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 bg-gray-100 rounded-md shadow-md">
      <select
        className="p-2 border rounded"
        value={filters.location}
        onChange={e => setFilters(prev => ({ ...prev, location: e.target.value }))}
      >
        <option value="">All Locations</option>
        <option value="Delhi">Delhi</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Bangalore">Bangalore</option>
        {/* Add more locations if needed */}
      </select>

      <select
        className="p-2 border rounded"
        value={filters.type}
        onChange={e => setFilters(prev => ({ ...prev, type: e.target.value }))}
      >
        <option value="">All Types</option>
        <option value="Apartment">Apartment</option>
        <option value="Villa">Villa</option>
        <option value="Plot">Plot</option>
        <option value="House">Plot</option>
        {/* Add more types if needed */}
      </select>

      <select
        className="p-2 border rounded"
        value={filters.price}
        onChange={e => setFilters(prev => ({ ...prev, price: e.target.value }))}
      >
        <option value="">Any Price</option>
        <option value="500000">Up to ₹5 Lakh</option>
        <option value="1000000">Up to ₹10 Lakh</option>
        <option value="2000000">Up to ₹20 Lakh</option>
        {/* Add more ranges as needed */}
      </select>
    </div>
  );
}
