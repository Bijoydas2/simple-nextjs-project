"use client";
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import Link from "next/link";
import ProductCard from "./ProductCard";
import LoadingSpinner from "./LoadingSpinner";

export default function ProductHighlights() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data.slice(0, 6));
        setLoading(false);
      });
  }, []);

  if (loading) return <LoadingSpinner/>;

  return (
    <section className="py-12 px-6 bg-gray-50">
      <h3 className="text-3xl font-bold text-center mb-12 text-blue-600 flex items-center justify-center gap-2">
        <FaStar className="text-yellow-500" />
        Featured Products
        <FaStar className="text-yellow-500" />
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Link
          href="/products"
          className="flex items-center px-6 justify-center gap-2 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-colors font-medium"
        >
          View All Products
        </Link>
      </div>
    </section>
  );
}
