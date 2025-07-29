import { createContext } from 'react';
import { Property } from '../types';

interface PropertyContextType {
  properties: Property[];
  addProperty: (property: FormData) => Promise<void>;
  loading: boolean;
}

export const PropertyContext = createContext<PropertyContextType | undefined>(undefined);
