import products from "../../data/products.json";
import Link from "next/link";

export default function ProductDetails({ params }) {
  const product = products.find((p) => p.id === parseInt(params.id));

  if (!product)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen ">
        <p className="text-red-500 text-xl font-semibold">
          Product not found
        </p>
        <Link
          href="/products"
          className="mt-4 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
        >
          Back to Products
        </Link>
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-12 flex flex-col md:flex-row gap-8 bg-white rounded-3xl shadow-2xl my-16">
      {/* Product Image */}
      <div className="flex-1">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-90 rounded-2xl shadow-lg object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h1 className="text-4xl font-extrabold mb-4 text-gray-800">
            {product.name}
          </h1>
          <p className="text-gray-600 mb-6 leading-relaxed">
            {product.description}
          </p>
          <p className="text-3xl font-bold text-blue-600 mb-8">
            ${product.price}
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-blue-500 text-white px-8 py-3 rounded-xl shadow-lg hover:bg-blue-600 transition transform hover:scale-105">
            Add to Cart
          </button>
          <Link
            href="/products"
            className="px-8 py-3 border rounded-xl text-amber-500 hover:bg-blue-600 hover:text-white transition text-center"
          >
            Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
}
