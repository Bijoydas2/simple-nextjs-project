"use client";

import Link from "next/link";
import { MdErrorOutline } from "react-icons/md";

export default function NotFound() {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 text-center max-w-md sm:max-w-lg">
      <MdErrorOutline className="text-red-500 text-8xl sm:text-9xl mb-6 mx-auto" />
      <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-800">
        Page Not Found
      </h1>
      <p className="text-gray-600 mb-8 text-base sm:text-lg leading-relaxed">
        Oops! The page you are looking for doesn’t exist.
      </p>
      <Link
        href="/"
        className="inline-block bg-blue-500 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full shadow-lg hover:bg-blue-600 transition transform hover:scale-105"
      >
        Go to Home
      </Link>
    </div>
  );
}
