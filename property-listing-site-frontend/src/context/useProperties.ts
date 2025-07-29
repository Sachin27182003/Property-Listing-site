import { useContext } from "react";
import { PropertyContext } from './PropertyContext';

export const useProperties = () => {
  const context = useContext(PropertyContext);
  if (!context) throw new Error("useProperties must be used within PropertyProvider");
  return context;
};
