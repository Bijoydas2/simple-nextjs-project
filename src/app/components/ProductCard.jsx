import Link from "next/link";
import { FaStar } from "react-icons/fa";

export default function ProductCard({ product }) {
  return (
   
          <div
            key={product.id}
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
                href={`/products/${product.id}`}
                className="mt-4 inline-block bg-blue-500 text-center text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition"
              >
                View Details
              </Link>
            </div>
          </div>
       
      
  );
}
