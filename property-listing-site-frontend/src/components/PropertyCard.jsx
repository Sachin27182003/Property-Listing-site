import React from 'react';
import { Link } from 'react-router-dom';

export default function PropertyCard({ property }) {
    console.log("property" + property);
  return (
    <div className="border bg-white !bg-white rounded-lg shadow p-4">
      <img src={property.image} alt={property.title} className="w-full  h-48 object-cover rounded" />
      <h2 className="text-lg  font-semibold mt-2">{property.title}</h2>
      <p className="text-gray-600">{property.location} • ₹{property.price}</p>
      <Link to={`/property/${property._id}`} className="mt-2 inline-block text-blue-500">View Details</Link>
    </div>
  );
}