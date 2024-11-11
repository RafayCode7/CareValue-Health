"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Data for each slide with image and overlay cards
const slides = [
  {
    image: "/img/slider1.jpg", // Adjust these paths to match your images
    appointments: [
      {
        title: "AI Summarize Note",
        time: "01:00PM - 02:00PM",
        tag: "AI Note",
        color: "#CBACF9",
      },
      {
        title: "Client Appointment",
        time: "02:00PM - Alison R",
        tag: "Video Call",
        color: "#A8C8FF",
      },
      {
        title: "Invoice Payment",
        time: "02:00PM - James P",
        tag: "Payment Processed",
        color: "#FFDEFF",
      },
    ],
  },
  {
    image: "/img/slider2.jpg",
    appointments: [
      {
        title: "Team Meeting",
        time: "10:00AM - 11:00AM",
        tag: "Meeting",
        color: "#A8C8FF",
      },
      {
        title: "Project Update",
        time: "01:00PM - 01:30PM",
        tag: "Update",
        color: "#FFDEFF",
      },
    ],
  },
];

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <section className="py-10 bg-gradient-to-b from-gray-100 to-white">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            {/* Background Image */}
            <Image
              src={slide.image}
              alt={`Slide ${index + 1}`}
              width={600} // Adjust width
              height={400} // Adjust height
              className="object-cover w-full h-full rounded-lg"
            />

            {/* Overlay Cards */}
            <div className="absolute top-10 right-10 space-y-4">
              {slide.appointments.map((appointment, idx) => (
                <div
                  key={idx}
                  className="bg-white shadow-lg rounded-lg p-4 flex items-center space-x-4"
                >
                  <div className="text-gray-900 font-semibold">
                    <h3>{appointment.title}</h3>
                    <p className="text-gray-600 text-sm">{appointment.time}</p>
                  </div>
                  <button
                    style={{ backgroundColor: appointment.color }}
                    className="text-white font-semibold px-3 py-1 rounded"
                  >
                    {appointment.tag}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ImageSlider;
