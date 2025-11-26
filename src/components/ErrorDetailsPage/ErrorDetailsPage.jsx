"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { AlertTriangle } from "lucide-react";

const ErrorDetailsPage = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      
      {/* Icon */}
      <div className="bg-red-100 p-6 rounded-full shadow-sm mb-6">
        <AlertTriangle className="text-red-500 w-16 h-16" />
      </div>

      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-600 mb-2">
        Product Details are Not Found
      </h2>

      {/* Description */}
      <p className="text-gray-500 max-w-md mb-8">
        The product details you are looking for do not exist or have been removed.
      </p>

      {/* Button */}
      <div className="flex gap-3">
        <button
          onClick={() => router.push("/")}
          className="btn bg-gradient-to-r from-pink-500 to-red-600 hover:from-red-600 hover:to-pink-500 text-white px-4 py-2 rounded"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ErrorDetailsPage;

