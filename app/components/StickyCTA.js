"use client";
import React from "react";
import Link from "next/link";

export const StickyCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-[#12104A] to-[#083e9a] text-white py-4 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between z-50 shadow-lg">
      {/* CTA Button */}
      <div className="flex flex-col md:flex-row items-center md:space-x-6">
        <Link
          href="/get-started"
          className="px-6 py-3 bg-white text-[#12104A] font-semibold rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
        >
          Get Started for Free
        </Link>
        <p className="mt-3 md:mt-0 text-sm md:text-base">
          No payment required start your free consultation now!
        </p>
      </div>
    </div>
  );
};
