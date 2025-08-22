"use client";
import { FaStar } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import LoadingSpinner from "./LoadingSpinner";

export default function ProductHighlights() {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);


  const topProducts = products.slice(0, 6);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleViewAll = () => {
    router.push("/products");
  };

  if (loading) return <LoadingSpinner/>;
  if (!products.length) return <p className="text-center mt-10">No products found</p>;

  return (
    <section className="py-12 px-6 bg-gray-50">
      <h3 className="text-3xl font-bold text-center mb-12 text-blue-600 flex items-center justify-center gap-2">
        <FaStar className="text-yellow-500" />
        Featured Products
        <FaStar className="text-yellow-500" />
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {topProducts.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-shadow overflow-hidden flex flex-col"
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover hover:scale-105 transition-transform"
              />
            </div>
            <div className="p-6 flex flex-col justify-between flex-grow">
              <h4 className="flex items-center gap-2 font-semibold text-xl text-gray-800 mb-2">
                <FaStar className="text-yellow-500" />
                {product.name}
              </h4>
              <p className="text-gray-500 text-sm mb-4 line-clamp-3">
                {product.description}
              </p>
              <p className="text-blue-600 font-bold text-lg mb-4">
                ${product.price}
              </p>
              <Link
                href={`/products/${product._id}`}
                className="mt-4 inline-block bg-blue-500 text-center text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button
          onClick={handleViewAll}
          className="flex items-center px-6 justify-center gap-2 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-colors font-medium"
        >
          View All Products
        </button>
      </div>
    </section>
  );
}
