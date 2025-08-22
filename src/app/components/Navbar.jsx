"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { toast } from "react-toastify";

export default function Navbar() {
  const pathname = usePathname();
  const { data: session } = useSession();

  const linkClass = (path) =>
    pathname === path
      ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
      : "text-gray-700 hover:text-blue-600";

  const handleLogout = async () => {
    await signOut({ redirect: false }); // redirect বন্ধ রাখব
    toast.success("You have logged out successfully!");
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">My Shop</h1>

        {/* Centered links */}
        <div className="flex-1 flex justify-center space-x-8">
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>
          <Link href="/products" className={linkClass("/products")}>
            Products
          </Link>
        </div>

        {/* Right side login/logout button */}
        <div>
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
      </div>
    </nav>
  );
}
