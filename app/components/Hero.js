"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export const Hero = () => {
  const title = "Your Health, Simplified";
  const words = title.split(" ");

  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-20 px-6 md:px-24 bg-gradient-to-b from-white to-gray-100">
      {/* Left Side - Text Content */}
      <div className="flex-1 text-center md:text-left mb-10 md:mb-0">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
          {words.map((word, index) => (
            <motion.span
              key={index}
              className={index === 1 ? "text-[#3475e6]" : ""}
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
        Get health answers, consult specialists, and access second opinions anytime,anywhere.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex space-x-4 justify-center md:justify-start">
          <Link
            href="/get-started"
            className="px-8 py-3 text-white bg-[#3475e6] rounded-full shadow-lg hover:bg-[#8AB8FF] transition duration-300 transform hover:scale-105"
          >
            Get Started
          </Link>
          <Link
            href="/view-demo"
            className="px-8 py-3 text-[#3475e6] border border-[#3475e6] rounded-full shadow-lg hover:bg-[#8AB8FF] hover:text-white transition duration-300 transform hover:scale-105"
          >
            Book Now 
          </Link>
        </div>
      </div>

      
     
    </section>
  );
};
