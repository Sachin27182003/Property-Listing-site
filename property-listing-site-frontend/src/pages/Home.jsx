import React, { useState } from 'react';
import { useProperties } from '../context/useProperties.js';
import PropertyCard from '../components/PropertyCard.jsx';
import FilterBar from '../components/FilterBar.jsx';

export default function Home() {
  const { properties } = useProperties();
  const [filters, setFilters] = useState({ location: '', type: '', price: '' });

  const filtered = properties.filter(p => {
    return (
      (!filters.location || p.location === filters.location) &&
      (!filters.type || p.type === filters.type) &&
      (!filters.price || p.price <= parseInt(filters.price))
    );
  });

  return (
    <div>
      <FilterBar filters={filters} setFilters={setFilters} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {filtered.map(property => <PropertyCard key={property.id} property={property} />)}
      </div>
    </div>
  );
}