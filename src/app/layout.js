import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NextAuthSessionProvider from "@/Providers/NextAuthSessionProvider";
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: "My Shop",
  description: "Next.js 15 Demo App",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <NextAuthSessionProvider>
        <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
           <ToastContainer position="top-center" autoClose={3000} />
          </main>
        <Footer />
      </body>
      </NextAuthSessionProvider>
    </html>
  );
}
