// pages/aidoctor.js
"use client";
import React from 'react';
import Image from 'next/image';
import { FaHeartbeat, FaCheckCircle } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { useInView } from 'react-intersection-observer';

const AIDoctor = () => {
  const router = useRouter();

  const handleStartConsultation = () => {
    router.push("/consultation/start");
  };

  // Intersection Observer for animations
  const { ref: benefitsRef, inView: benefitsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: featuresRef, inView: featuresInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f0f4f8] to-[#e3f2fd] py-12 px-6 flex flex-col items-center text-[#0d1945]">
      {/* Hero Section with Image */}
      <div className="relative w-full max-w-4xl rounded-lg overflow-hidden shadow-lg mb-10">
        <Image
          src="/img/88866f193793211.65f301b7f09f8_430x.gif" // Update with your actual image path
          alt="AI Doctor Consultation"
          width={1200}
          height={600}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black opacity-30"></div>
        <h1 className="absolute bottom-8 left-8 text-5xl font-extrabold text-white z-10">Start Your Consultation</h1>
      </div>

      <p className="text-xl text-center max-w-xl mb-10 text-gray-600">
        Meet your virtual AI Doctor. Instantly access reliable health advice tailored to your needs. Free for all users!
      </p>

      <div className="w-full max-w-4xl space-y-10">
        {/* Benefits Section with Animation */}
        <div
          ref={benefitsRef}
          className={`flex flex-col md:flex-row items-center justify-between bg-white rounded-lg shadow-md p-8 transition-all duration-500 ${
            benefitsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <FaHeartbeat className="text-6xl text-[#1a237e] mb-4 md:mb-0" />
          <div className="md:ml-8">
            <h2 className="text-3xl font-semibold text-[#0d1945]">Why Use Our AI Doctor?</h2>
            <p className="text-lg text-gray-700 mt-2">
              Get instant access to professional health advice anytime, anywhere. Our AI Doctor is here to answer your health inquiries, from simple questions to complex symptoms.
            </p>
          </div>
        </div>

        {/* Key Features Section with Animation */}
        <div
          ref={featuresRef}
          className={`bg-white rounded-lg shadow-md p-8 transition-all duration-500 ${
            featuresInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-2xl font-semibold text-[#0d1945] mb-4">Key Features</h2>
          <ul className="space-y-4 text-lg">
            <li className="flex items-start">
              <FaCheckCircle className="text-[#1a237e] text-2xl mr-3" />
              <p>Free access for all users to try the AI Doctor and explore the benefits of virtual consultations.</p>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-[#1a237e] text-2xl mr-3" />
              <p>Easy and fast symptom checking to receive personalized advice.</p>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-[#1a237e] text-2xl mr-3" />
              <p>Guidance for further medical assistance if necessary, with potential recommendations for in-person care.</p>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-[#1a237e] text-2xl mr-3" />
              <p>Private and secure consultations powered by advanced AI technology.</p>
            </li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-10">
          <button
            onClick={handleStartConsultation}
            className="bg-[#1a237e] hover:bg-[#0d1945] text-white font-semibold py-4 px-8 rounded-lg text-xl shadow-lg transition-transform duration-150 transform hover:scale-105"
          >
            Start Your Free Consultation
          </button>
          <p className="text-gray-500 text-sm mt-4">Experience the future of healthcare with AI-driven insights!</p>
        </div>
      </div>
    </div>
  );
};

export default AIDoctor;
