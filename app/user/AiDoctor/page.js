"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ConsultationPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 md:px-16 lg:px-24">
      {/* Start Your Consultation (AI Doctor) Section */}
      <section className="bg-white shadow-lg rounded-lg p-8 mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Start Your Consultation (AI Doctor)
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Get instant answers to your health inquiries with our AI Doctor. Free access for all users allows you to try the app and experience quick, reliable health guidance.
        </p>
        <p className="text-lg text-gray-600 mb-6">
          Our AI Doctor is here to meet your immediate needs for health-related questions and concerns. Whether it’s understanding symptoms, finding information, or receiving general advice, we’ve got you covered.
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8"
        >
          <Link href="/start-consultation" className="inline-block px-8 py-3 bg-[#3475e6] text-white rounded-full shadow-lg hover:bg-[#8AB8FF] transition duration-300 transform hover:scale-105">
            Start Consultation
          </Link>
        </motion.div>
      </section>

      {/* Specialist Consultation Section */}
      <section className="bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Specialist Consultation
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Need specialized advice? Connect with our network of certified health specialists for more in-depth consultations.
        </p>
        <p className="text-lg text-gray-600 mb-6">
          Book a session with a specialist to discuss specific health concerns and get personalized advice tailored to your needs.
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8"
        >
          <Link href="/specialist-consultation" className="inline-block px-8 py-3 text-[#3475e6] border border-[#3475e6] rounded-full shadow-lg hover:bg-[#8AB8FF] hover:text-white transition duration-300 transform hover:scale-105">
            Book Specialist Consultation
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
