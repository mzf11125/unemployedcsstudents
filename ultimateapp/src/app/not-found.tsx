"use client";
import React from "react";
import Link from "next/link";

export default function NotFoundPage() {
    return (
        <div className="flex items-center justify-center w-screen h-screen bg-[#0f172a] text-white">
            <div className="text-center bg-[#1e293b] p-8 rounded-lg shadow-lg max-w-md">
                <h1 className="text-6xl font-bold text-blue-400">404</h1>
                <p className="text-xl mt-4">Uh oh, we can't seem to find that page.</p>
                <p className="text-gray-400 mt-2">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
                <Link
                href="/"
                className="mt-6 inline-block bg-blue-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-600 transition"
                >
                    Go to Homepage
                </Link>
            </div>
        </div>
    );
}
