"use client";

import { useRouter } from "next/navigation";
import { AlertTriangle } from "lucide-react";

const ErrorPage = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-center px-4">

      {/* Icon */}
      <div className="bg-red-100 p-6 rounded-full shadow-sm mb-6">
        <AlertTriangle className="text-red-500 w-16 h-16" />
      </div>

      {/* 404 Title */}
      <h1 className="text-5xl font-semibold text-red-500 mb-3">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-600 mb-2">
        Oops! Page Not Found
      </h2>

      {/* Description */}
      <p className="text-gray-500 max-w-md mb-8">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>

      {/* Buttons */}
      <div className="flex gap-3">
        <button
          onClick={() => router.push("/")}
          className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-white px-5 py-2 rounded cursor-pointer"
        >
          Back to Home
        </button>
        <button
          onClick={() => router.back()}
          className="border-2 border-orange-600 text-orange-600 px-5 py-2 rounded cursor-pointer"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
