import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 text-center py-8 mt-10">
      <p className="mb-3">
        © {new Date().getFullYear()}{" "}
        <span className="text-blue-400 font-semibold">MyShop</span>. All rights reserved.
      </p>
      

      {/* Social Media Icons */}
      <div className="flex justify-center gap-6 text-xl">
        <a href="#" className="hover:text-blue-500 transition">
          <FaFacebook />
        </a>
        <a href="#" className="hover:text-sky-400 transition">
          <FaTwitter />
        </a>
        <a href="#" className="hover:text-pink-500 transition">
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
}
