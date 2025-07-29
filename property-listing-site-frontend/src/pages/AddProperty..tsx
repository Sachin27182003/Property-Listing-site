import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProperties } from "../context/useProperties";

export default function AddProperty() {
  const { addProperty } = useProperties();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    contact: "",
    location: "",
    type: "",
    bedrooms: "",
    bathrooms: "",
    area: "",
    image: null, // For file input
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      setForm({ ...form, image: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const propertyData = {
      title: form.title,
      description: form.description,
      location: form.location,
      type: form.type,
      bedrooms: parseInt(form.bedrooms),
      bathrooms: parseInt(form.bathrooms),
      area: parseInt(form.area),
      price: parseInt(form.price),
      contact: "+91-" + form.contact,
    };

    // If you're using FormData to send files to backend:
    const formData = new FormData();
    for (const key in propertyData) {
      formData.append(key, propertyData[key]);
    }
    if (form.image) {
      formData.append("image", form.image);
    }

    console.log("Form Data:", formData);

    await addProperty(formData); // Make sure your backend accepts multipart/form-data
    navigate("/");
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-evenly min-h-screen bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="max-w-xl w-full grid gap-1 p-10 shadow-2xl bg-white rounded-lg"
        encType="multipart/form-data"
      >
        <div>
          <h1 className="text-2xl font-bold mb-4 text-center">
            Add New Property
          </h1>
        </div>
        <div className="w-full">
          <label
            htmlFor="title"
            className="block m-1 font-medium text-gray-700"
          >
            Title <span className="text-red-500">*</span>
          </label>
          <input
            className="w-full border border-gray-300 p-2 rounded"
            name="title"
            placeholder="Title of the property"
            value={form.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="price"
            className="block m-1 font-medium text-gray-700"
          >
            Price <span className="text-red-500">*</span>
          </label>
          <input
            className="w-full border border-gray-300 p-2 rounded"
            name="price"
            type="number"
            placeholder="₹ Price of the property"
            value={form.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="contact"
            className="block m-1 font-medium text-gray-700"
          >
            Contact <span className="text-red-500">*</span>
          </label>
          <input
            className="w-full border border-gray-300 p-2 rounded"
            name="contact"
            type="String"
            placeholder="Your contact number"
            value={form.contact}
            onChange={handleChange}
            required
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="description"
            className="block m-1 font-medium text-gray-700"
          >
            Description <span className="text-red-500">*</span>
          </label>
          <input
            className="w-full border border-gray-300 p-2 rounded"
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="bedrooms"
            className="block m-1 font-medium text-gray-700"
          >
            Bedrooms
          </label>
          <input
            className="w-full border border-gray-300 p-2 rounded"
            name="bedrooms"
            placeholder="Number of Bedrooms"
            value={form.bedrooms}
            onChange={handleChange}
          />
        </div>

        <div className="w-full">
          <label
            htmlFor="bathrooms"
            className="block m-1 font-medium text-gray-700"
          >
            Bathrooms
          </label>
          <input
            className="w-full border border-gray-300 p-2 rounded"
            name="bathrooms"
            placeholder="Number of Bathrooms"
            value={form.bathrooms}
            onChange={handleChange}
          />
        </div>
        <div className="w-full">
          <label htmlFor="area" className="block m-1 font-medium text-gray-700">
            Area <span className="text-red-500">*</span>
          </label>
          <input
            className="w-full border border-gray-300 p-2 rounded"
            name="area"
            placeholder="Total Area (in Sq. ft)"
            value={form.area}
            onChange={handleChange}
            required
          />
        </div>

        <div className="w-full">
          <label htmlFor="type" className="block m-1 font-medium text-gray-700">
            Type <span className="text-red-500">*</span>
          </label>
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded bg-white"
          >
            <option value="">Select Type</option>
            <option value="Apartment">Apartment</option>
            <option value="House">House</option>
            <option value="Villa">Villa</option>
            <option value="Plot">Plot</option>
          </select>
        </div>
        <div className="w-full">
          <label
            htmlFor="location"
            className="block m-1 font-medium text-gray-700"
          >
            Location <span className="text-red-500">*</span>
          </label>
          <select
            name="location"
            value={form.location}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded bg-white"
          >
            <option value="">Select Location</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Bangalore">Bangalore</option>
          </select>
        </div>

        <div className="w-full">
          <label
            htmlFor="image"
            className="block m-1 font-medium text-gray-700"
          >
            Image <span className="text-red-500">*</span>
          </label>
          <input
            className="w-full border border-gray-300 p-2 rounded"
            name="image"
            type="file"
            accept="image/*"
            onChange={handleChange}
            required
          />
        </div>

        {form.image && typeof form.image === "object" && (
          <img
            src={URL.createObjectURL(form.image)}
            alt="preview"
            className="w-40 h-40 object-cover rounded shadow mx-auto mt-2"
          />
        )}

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
        >
          Add Property
        </button>
      </form>

      <div className="hidden md:flex items-center justify-center">
        <img
          src="/property.png"
          alt="Decoration"
          className="h-180 w-auto object-contain mix-blend-multiply"
        />
      </div>
    </div>
  );
}
