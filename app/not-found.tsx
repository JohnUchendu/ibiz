"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-50 p-6">
      <h1 className="text-6xl font-bold text-indigo-600">404</h1>
      <p className="mt-4 text-lg text-gray-600">Oops! This page could not be found on iBiz.</p>

      <div className="mt-6 flex gap-3">
        <button
          onClick={() => router.push("/")}
          className="rounded-md px-4 py-2 bg-indigo-600 text-white hover:bg-indigo-700"
        >
          Go Home
        </button>
        <button
          onClick={() => router.back()}
          className="rounded-md px-4 py-2 border border-gray-300 hover:bg-gray-100"
        >
          Go Back
        </button>
      </div>

      <p className="mt-8 text-sm text-gray-400">iBiz — helping businesses stay online.</p>
    </main>
  );
}
