import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProperties } from '../context/useProperties';

export default function PropertyDetails() {
  const { _id } = useParams();
  console.log("Property ID:", _id);
  const { properties } = useProperties();
  const property = properties.find(p => p._id === _id);

  if (!property) return <p>Property not found</p>;

  return (
    <div className="max-w-xl mx-auto p-6 bg-white !bg-white rounded-xl shadow-2xl border-2 border-neutral-400">
      <img src={property.image} alt={property.title} className="w-full h-64 object-cover rounded border-2 border-b-cyan-400" />
      <h1 className="text-2xl font-bold mt-4">{property.title}</h1>
      <p className="text-gray-600 font-bold">{property.location} • ₹{property.price}</p>
      <p className="mt-1">Description :- {property.description}</p>
      <h1 className="mt-1 font-bold text-xl">{property.type}</h1>
      <p className="">No. of Bedrooms :- {property.bedrooms}</p>
      <p className="">No. of Bathrooms :- {property.bathrooms}</p>
      <p className="">Total Area :- {property.area} Sq. ft</p>
      <p className="mt-2 font-bold">Contact :- {property.contact}</p>
      <Link to="/" className="inline-block mt-4 text-blue-500">← Back to Listings</Link>
    </div>
  );
}
