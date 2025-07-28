import { useContext } from "react";
import { PropertyContext } from './PropertyContext';

export const useProperties = () => useContext(PropertyContext);