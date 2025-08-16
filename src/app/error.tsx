"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("App Error:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold text-red-600">500</h1>
      <h2 className="mt-4 text-2xl font-semibold">Something went wrong</h2>
      <p className="mt-2 text-gray-500 text-center max-w-md">
        We’re sorry, but an unexpected error has occurred. Please try again or
        go back to the homepage.
      </p>

      <div className="flex gap-4 mt-6">
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-red-600 text-white rounded-xl shadow hover:bg-red-700 transition"
        >
          Try Again
        </button>

        <Link
          href="/"
          className="px-6 py-3 bg-gray-800 text-white rounded-xl shadow hover:bg-gray-900 transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
