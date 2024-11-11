"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export const Hero = () => {
  const title = "Where care happens";
  const words = title.split(" ");

  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-20 px-6 md:px-24 bg-gradient-to-b from-white to-gray-100">
      {/* Left Side - Text Content */}
      <div className="flex-1 text-center md:text-left mb-10 md:mb-0">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
          {words.map((word, index) => (
            <motion.span
              key={index}
              className={index === 1 ? "text-[#A8C8FF]" : ""}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 0.5 }}
            >
              {word}{" "}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-md leading-relaxed">
          The AI-powered health and wellness solution with real-time
          consultations and expert opinions.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex space-x-4 justify-center md:justify-start">
          <Link
            href="/get-started"
            className="px-8 py-3 text-white bg-[#A8C8FF] rounded-full shadow-lg hover:bg-[#8AB8FF] transition duration-300 transform hover:scale-105"
          >
            Get Started
          </Link>
          <Link
            href="/view-demo"
            className="px-8 py-3 text-[#A8C8FF] border border-[#A8C8FF] rounded-full shadow-lg hover:bg-[#8AB8FF] hover:text-white transition duration-300 transform hover:scale-105"
          >
            View Demo
          </Link>
        </div>
      </div>

     {/* Redesigned Image Card with Overlay and Clean Styling */}
<div className="flex-1 flex justify-center md:justify-end">
  <div className="relative w-[620px] h-[350px] overflow-hidden rounded-lg shadow-xl transition-transform duration-300 transform hover:scale-105">
    {/* Image with Border and Rounded Corners */}
    <Image
      src="/img/portrait-african-american.jpg" // Update to your image path
      alt="CareValue Health"
      layout="fill"
      objectFit="cover"
      className="rounded-lg border border-gray-200"
    />

    {/* Overlay with Title or Call-to-Action */}
    <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
      <span className="text-white text-lg font-semibold px-4 py-2 bg-[#1a237e] bg-opacity-80 rounded-full shadow-lg">
        Learn More About Our Services
      </span>
    </div>
  </div>
</div>

    </section>
  );
};
