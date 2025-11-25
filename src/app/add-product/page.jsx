"use client";

import useAuth from "@/hooks/useAuth";
import { useState } from "react";
import { toast } from "react-hot-toast";

const AddProductForm = () => {
  const { user } = useAuth(); 
  const [formData, setFormData] = useState({
    product_title: "",
    short_description: "",
    long_description: "",
    category: "",
    price: "",
    specification: "",
    rating: "",
    product_image: "",
    availability: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.product_title || !formData.price) {
      toast.error("Please fill in all required fields!");
      return;
    }

    // Add user's email to the data
    const dataToSend = {
      ...formData,
      userEmail: user?.email || "unknown",
      price: Number(formData.price),
      rating: formData.rating ? Number(formData.rating) : 0,
      specification: formData.specification.split(",").map(s => s.trim()),
    };

    try {
      const res = await fetch("http://localhost:5000/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      });

      if (!res.ok) throw new Error("Failed to add product");

      toast.success("Product added successfully!");

      setFormData({
        product_title: "",
        short_description: "",
        long_description: "",
        category: "",
        price: "",
        specification: "",
        rating: "",
        product_image: "",
        availability: true,
      });
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-5 py-10">
      <h1 className="text-3xl font-bold mb-6">Add Product</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>

        <input
          type="text"
          name="product_title"
          placeholder="Product Title"
          value={formData.product_title}
          onChange={handleChange}
          className="border rounded px-3 py-2"
          required
        />

        <div className="flex gap-4">
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            className="border rounded px-3 py-2 flex-1"
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            className="border rounded px-3 py-2 flex-1"
            required
          />
        </div>

        <input
          type="text"
          name="specification"
          placeholder="Specifications (comma separated)"
          value={formData.specification}
          onChange={handleChange}
          className="border rounded px-3 py-2"
        />

        <input
          type="number"
          name="rating"
          placeholder="Rating (0-5)"
          value={formData.rating}
          onChange={handleChange}
          className="border rounded px-3 py-2"
          step="0.1"
          min="0"
          max="5"
        />

        <textarea
          name="short_description"
          placeholder="Short Description"
          value={formData.short_description}
          onChange={handleChange}
          className="border rounded px-3 py-2"
          rows={2}
        />

        <textarea
          name="long_description"
          placeholder="Full Description"
          value={formData.long_description}
          onChange={handleChange}
          className="border rounded px-3 py-2"
          rows={5}
        />

        <input
          type="text"
          name="product_image"
          placeholder="Product Image URL"
          value={formData.product_image}
          onChange={handleChange}
          className="border rounded px-3 py-2"
        />

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="availability"
            checked={formData.availability}
            onChange={handleChange}
            className="h-4 w-4"
          />
          <label>In Stock</label>
        </div>

        <button
          type="submit"
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition cursor-pointer"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;
