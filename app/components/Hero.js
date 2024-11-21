"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export const Hero = () => {
  const title = "Your Health, Simplified";
  const words = title.split(" ");

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between py-20 px-6 md:px-24 bg-gradient-to-b from-white to-gray-100 h-screen">
      {/* Background Video (Optional) */}
      <div className="absolute inset-0 z-0">
        <video
          src="/img/CVH vid.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      {/* Left Side - Text Content */}
      <div className="relative z-10 flex-1 text-center md:text-left mb-10 md:mb-0">
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
        <p className="mt-4 text-lg md:text-xl text-gray-800 max-w-md leading-relaxed">
          Get health answers, consult specialists, and access second opinions
          anytime, anywhere.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex space-x-4 justify-center md:justify-start">
          <Link
            href="/get-started"
            className="px-8 py-3 text-white bg-[#3475e6] rounded-full shadow-lg hover:bg-[#8AB8FF] transition duration-300 transform hover:scale-105"
          >
            <i className="fas fa-user mr-2"></i> Get Started
          </Link>
          <Link
            href="/book-now"
            className="px-8 py-3 text-white border border-[#3475e6] rounded-full shadow-lg hover:bg-[#8AB8FF] hover:text-white transition duration-300 transform hover:scale-105"
          >
            <i className="fas fa-calendar mr-2"></i> Book Now
          </Link>
        </div>
      </div>

      {/* Right Side - Visual Element */}
      <div className="relative z-10 flex-1 hidden md:block">
        <Image
          src="/img/young-female.jpg"
          alt="Doctor and Patient"
          width={500}
          height={500}
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};
