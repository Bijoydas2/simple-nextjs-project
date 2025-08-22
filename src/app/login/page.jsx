"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function Login() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      toast.success("Login successful!");
      router.push("/products");
    }
  }, [session, router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="bg-white p-10 rounded-3xl shadow-2xl max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-6">Login to My Shop</h1>

        <button
          onClick={() => signIn("google")}
          className="w-full bg-red-500 text-white py-3 rounded-xl mb-4 hover:bg-red-600 transition"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
