"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { toast } from "react-toastify";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { data: session } = useSession();

  const linkClass = (path) =>
    pathname === path
      ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
      : "text-gray-700 hover:text-blue-600";

  const handleLogout = async () => {
    await signOut({ redirect: false });
    toast.success("You have logged out successfully!");
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">My Shop</h1>

        {/* Desktop Links */}
        <div className="hidden md:flex flex-1 justify-center space-x-8">
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>
          <Link href="/products" className={linkClass("/products")}>
            Products
          </Link>

          {/* Add Product Link only for logged-in users */}
          {session && (
            <Link href="/dashboard/add-product" className={linkClass("/dashboard/add-product")}>
              Add Product
            </Link>
          )}
        </div>

        {/* Login/Logout Desktop */}
        <div className="hidden md:flex">
          {session ? (
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              className={`bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition ${
                pathname === "/login" ? "ring-2 ring-blue-400" : ""
              }`}
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 flex flex-col space-y-4">
          <Link
            href="/"
            className={linkClass("/")}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/products"
            className={linkClass("/products")}
            onClick={() => setIsOpen(false)}
          >
            Products
          </Link>

          
          {session && (
            <Link
              href="/dashboard/add-product"
              className={linkClass("/dashboard/add-product")}
              onClick={() => setIsOpen(false)}
            >
              Add Product
            </Link>
          )}

          {session ? (
            <button
              onClick={() => {
                handleLogout();
                setIsOpen(false);
              }}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              className={`bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition ${
                pathname === "/login" ? "ring-2 ring-blue-400" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
