import React from 'react';
import { FilterState } from '../types';

interface FilterBarProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
}

export default function FilterBar({ filters, setFilters }: FilterBarProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 bg-gray-100 rounded-lg shadow-md">
      {/* location */}
      <select
        className="p-2 border rounded"
        value={filters.location}
        onChange={e => setFilters(prev => ({ ...prev, location: e.target.value }))}
      >
        <option value="">All Locations</option>
        <option value="Delhi">Delhi</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Bangalore">Bangalore</option>
      </select>

      {/* type */}
      <select
        className="p-2 border rounded"
        value={filters.type}
        onChange={e => setFilters(prev => ({ ...prev, type: e.target.value }))}
      >
        <option value="">All Types</option>
        <option value="Apartment">Apartment</option>
        <option value="Villa">Villa</option>
        <option value="Plot">Plot</option>
        <option value="House">House</option>
      </select>

      <select
        className="p-2 border rounded"
        value={filters.price}
        onChange={e => setFilters(prev => ({ ...prev, price: e.target.value }))}
      >
        <option value="">Any Price</option>
        <option value="2500000">Up to ₹25 Lakh</option>
        <option value="5000000">Up to ₹50 Lakh</option>
        <option value="10000000">Up to ₹1 crore</option>
      </select>
    </div>
  );
}
