// pages/testimonials.js
"use client";
import React from 'react';

const testimonials = [
  {
    text: "The response time was very fast, and the service was good. I was attended to well and loved your service. Please keep it up. Thank you.",
    author: "Abebor N.",
    date: "April 2, 2024",
  },
  {
    text: "It was a good idea to come to CareValue Health in the first place. Meeting wonderful nurses with good customer service. My experience at CareValue Health was fantastic.",
    author: "Kennedy C.",
    date: "March 25, 2024",
  },
  {
    text: "With the way I was attended to, I would be visiting CareValue Health again. My experience with them was excellent. It is a good hospital to visit whenever one needs medical attention.",
    author: "Adedokun A.",
    date: "February 2, 2024",
  },
  {
    text: "The friendliness of both nurses and the doctor in CareValue Health is second to none. They make their patients feel welcome. Great and exceptional service.",
    author: "Wada J.",
    date: "March 28, 2024",
  },
  {
    text: "From my perspective, the test analysis conducted was satisfactory. You guys are doing a commendable job. Additionally, I noticed that the interior of the building is wonderfully constructed and rebranded, with excellent testing equipment such as blood pressure machines and sugar testing systems, among others. Please continue your efforts. The doctors are highly trained in their profession and are also performing admirably. Keep it up the good work! May God bless you all.",
    author: "Godwin N. Ngadi",
    date: "April 9, 2024",
  },
  {
    text: "The reception time was very good, and the workers were fantastic. The ambience is great for medical wellness. I rate this facility above 90%.",
    author: "Benjamin Odey",
    date: "March 26, 2024",
  },
  {
    text: "When I had a stomach ache, I had to go to the pharmacy for medications to help my symptoms with no relief. A friend introduced me to @CareValue Health. The doctor I spoke with took his time to figure out what was going on with me then recommended a medication that helped relieve my symptoms. I highly recommend CareValue Health.",
  },
  {
    text: "Exceptional doctors at CareValue Health! Not only did the doctor provide excellent care when I had shortness of breath, but he's also engaged in my well-being. His attention to detail is remarkable. It's rare to encounter a doctor who combines great medical expertise with a personal touch.",
  },
  {
    text: "The doctor who helped me is friendly, caring, smart, and really thorough. He's a great listener and his advice made my back feel better, which had been hurting for a long time.",
  },
];

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-12 px-4 text-[#0d1945]">
      <h1 className="text-4xl font-bold mb-4 text-center">Voices of Wellness</h1>
      <p className="text-lg text-center max-w-2xl mb-10">
        Real Stories from CareValue Health Champions
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <p className="italic mb-4">“{testimonial.text}”</p>
            {testimonial.author && (
              <p className="font-semibold">- {testimonial.author}</p>
            )}
            {testimonial.date && <p className="text-sm text-gray-500">{testimonial.date}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
