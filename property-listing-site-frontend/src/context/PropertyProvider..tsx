import React, { useState, useEffect, ReactNode } from 'react';
import { PropertyContext } from './PropertyContext';
import { Property } from '../types';

const API_BASE_URL = 'http://localhost:5000/properties';

interface PropertyProviderProps {
  children: ReactNode;
}

export default function PropertyProvider({ children }: PropertyProviderProps) {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch(API_BASE_URL);
        if (!response.ok) throw new Error('Failed to fetch properties');
        const data: Property[] = await response.json();
        setProperties(data);
      } catch (error) {
        console.error('Error fetching properties:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  const addProperty = async (property: FormData) => {
    console.log("Adding property:", property);
    try {
      const response = await fetch(API_BASE_URL, {
        method: 'POST',
        body: property,
      });

      if (!response.ok) throw new Error('Failed to add property');

      const savedProperty: Property = await response.json();
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
}
