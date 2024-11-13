import React from "react";
import { FaAngleRight } from "react-icons/fa";

const InfoCardSection = () => {
  const cards = [
    {
      id: 1,
      text: (
        <>
          Experience Confidence with{" "}
          <strong>Top-Tier Cardiologists & Primary Doctors</strong>
        </>
      ),
      bgColor: "bg-blue-200",
    },
    {
      id: 2,
      text: (
        <>
          Bridge the Difference in Care With{" "}
          <strong>Personalized Treatment</strong>
        </>
      ),
      bgColor: "bg-indigo-200",
    },
    {
      id: 3,
      text: (
        <>
          Access <strong>State-Of-The-Art HIPAA Compliant Technology</strong> for
          Medical Reporting Ease
        </>
      ),
      bgColor: "bg-purple-200",
    },
  ];

  return (
    <section className="flex flex-col md:flex-row justify-center items-center gap-6 py-12 px-4 md:px-8 lg:px-24 bg-[#12104A]">
      {cards.map((card) => (
        <div
          key={card.id}
          className={`${card.bgColor} rounded-xl p-6 w-full md:w-[320px] lg:w-[340px] h-[180px] shadow-lg flex items-start transition-transform transform hover:scale-105 hover:shadow-2xl`}
        >
          {/* Icon */}
          <FaAngleRight className="text-xl text-gray-700 mr-4 mt-1" />

          {/* Text Content */}
          <p className="text-[#12104A] text-base leading-relaxed font-semibold">
            {card.text}
          </p>
        </div>
      ))}
    </section>
  );
};

export default InfoCardSection;
