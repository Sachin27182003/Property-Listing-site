import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProperties } from '../context/useProperties';

export default function PropertyDetails() {
  const { id } = useParams();
  const { properties } = useProperties();
  const property = properties.find(p => p.id === parseInt(id));

  if (!property) return <p>Property not found</p>;

  return (
    <div className="max-w-xl mx-auto">
      <img src={property.image} alt={property.title} className="w-full h-64 object-cover rounded" />
      <h1 className="text-2xl font-bold mt-4">{property.title}</h1>
      <p className="text-gray-600">{property.location} • ₹{property.price}</p>
      <p className="mt-2">{property.description}</p>
      <Link to="/" className="inline-block mt-4 text-blue-500">← Back to Listings</Link>
    </div>
  );
}
