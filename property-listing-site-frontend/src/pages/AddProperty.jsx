import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProperties } from '../context/useProperties';

export default function AddProperty() {
  const { addProperty } = useProperties();
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: '', description: '', price: '', location: '', type: '', image: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    addProperty({ ...form, price: parseInt(form.price) });
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto grid gap-4">
      {['title', 'description', 'price', 'location', 'type', 'image'].map(field => (
        <input key={field} name={field} placeholder={field.charAt(0).toUpperCase() + field.slice(1)} value={form[field]} onChange={handleChange} className="border p-2" required />
      ))}
      <button type="submit" className="bg-green-600 text-white py-2 rounded">Add Property</button>
    </form>
  );
}