import React, { useState, useEffect } from 'react';
import { PropertyContext } from './PropertyContext';

const API_BASE_URL = 'http://localhost:5000/properties'; // ✅ Replace with deployed URL in production

const PropertyProvider = ({ children }) => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all properties on mount
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch(API_BASE_URL);
        if (!response.ok) throw new Error('Failed to fetch properties');
        const data = await response.json();
        setProperties(data);
      } catch (error) {
        console.error('Error fetching properties:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  // Add new property
  const addProperty = async (property) => {
  console.log("Adding property:", property);
  try {
    const response = await fetch(API_BASE_URL, {
      method: 'POST',
      body: property, // This is FormData already
    });

    if (!response.ok) throw new Error('Failed to add property');

    const savedProperty = await response.json();
    setProperties((prev) => [...prev, savedProperty]);
  } catch (error) {
    console.error('Error adding property:', error);
  }
};


  return (
    <PropertyContext.Provider value={{ properties, addProperty, loading }}>
      {children}
    </PropertyContext.Provider>
  );
};

export default PropertyProvider;
