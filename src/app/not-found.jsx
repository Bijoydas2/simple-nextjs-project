"use client";
import Link from "next/link";
import { MdErrorOutline } from "react-icons/md";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 px-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 text-center max-w-md sm:max-w-lg animate-fadeIn">
        {/* Error Icon */}
        <MdErrorOutline className="text-red-500 text-8xl sm:text-9xl mb-6 mx-auto" />

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-gray-800">
          Page Not Found
        </h1>

        {/* Description */}
        <p className="text-gray-600 mb-8 text-base sm:text-lg leading-relaxed">
          Oops! The page you are looking for doesn’t exist or has been moved.
          <br />
          Please check the URL or return to the home page.
        </p>

        {/* Call to Action */}
        <Link
          href="/"
          className="inline-block bg-blue-500 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full shadow-lg hover:bg-blue-600 transition transform hover:scale-105"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
}
