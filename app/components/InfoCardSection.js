import React from "react";
import { FaAngleRight } from "react-icons/fa";

const InfoCardSection = () => {
  const cards = [
    {
      id: 1,
      text: (
        <>
          Experience Confidence with <strong>Top-Tier Cardiologists & Primary Doctors</strong>
        </>
      ),
      bgColor: "bg-[#b3e5fc]", // Light blue background
    },
    {
      id: 2,
      text: (
        <>
          Bridge the Difference in Care With <strong>Personalized Treatment</strong>
        </>
      ),
      bgColor: "bg-[#9fa8da]", // Lavender background
    },
    {
      id: 3,
      text: (
        <>
          Access <strong>State-Of-The-Art HIPAA Compliant Technology</strong> for Medical Reporting Ease
        </>
      ),
      bgColor: "bg-[#b39ddb]", // Light purple background
    },
  ];

  return (
    <section className="flex flex-col md:flex-row justify-center items-center gap-6 py-12 px-4 md:px-8 lg:px-24 bg-[#12104A]">
      {cards.map((card) => (
        <div
          key={card.id}
          className={`${card.bgColor} rounded-2xl p-6 w-[300px] h-[180px] shadow-lg flex flex-col items-start relative transition-transform transform hover:scale-105 hover:shadow-2xl`}
        >
          {/* Icon positioned in the top-left corner */}
          <FaAngleRight className="text-lg text-[#1a237e] absolute top-4 left-4" />

          {/* Text Content */}
          <p className="text-[#1a237e] text-base leading-relaxed font-mono font-medium mt-6">
            {card.text}
          </p>
        </div>
      ))}
    </section>
  );
};

export default InfoCardSection;
