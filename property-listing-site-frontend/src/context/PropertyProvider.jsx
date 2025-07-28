import React, { useState, useEffect } from 'react';
import sampleData from '../Data/SampleData';
import { PropertyContext } from './PropertyContext';


const PropertyProvider = ({ children }) => {
  const [properties, setProperties] = useState(() => {
    const saved = localStorage.getItem('properties');
    return saved ? JSON.parse(saved) : sampleData;
  });

  useEffect(() => {
    localStorage.setItem('properties', JSON.stringify(properties));
  }, [properties]);

  const addProperty = (property) => {
    setProperties([...properties, { ...property, id: Date.now() }]);
  };

  return (
    <PropertyContext.Provider value={{ properties, addProperty }}>
      {children}
    </PropertyContext.Provider>
  );
};

export default PropertyProvider;

