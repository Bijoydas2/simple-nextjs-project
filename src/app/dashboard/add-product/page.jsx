"use client";
import ProtectedRoute from "@/Providers/ProtectedRoute";
import { useState } from "react";
import { toast } from "react-toastify";

export default function AddProductPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, description, price, image }),
      });

      if (res.ok) {
        toast.success("Product added successfully!");
        setName("");
        setDescription("");
        setPrice("");
        setImage("");
      } else {
        toast.warn("Failed to add product");
      }
    } catch (err) {
      console.error(err);
      alert("Error occurred");
    }

    setLoading(false);
  };

  return (
    <ProtectedRoute>
      <div className="max-w-lg mx-auto mt-10 bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold mb-6">Add New Product</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border px-4 py-2 rounded"
            required
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border px-4 py-2 rounded"
            required
          />
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border px-4 py-2 rounded"
            required
          />
          <input
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="border px-4 py-2 rounded"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            {loading ? "Adding..." : "Add Product"}
          </button>
        </form>
      </div>
    </ProtectedRoute>
  );
}
