"use client";
import React, { useState } from "react";
import Image from "next/image";

export const TestimonialsAndDataEntry = () => {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [chatMessages, setChatMessages] = useState([
    { type: "bot", text: "Welcome! Tell us a bit about yourself to personalize your experience." },
  ]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [userInput, setUserInput] = useState("");

  const handleGetStarted = () => {
    if (!age || !gender) {
      setChatMessages((prev) => [
        ...prev,
        { type: "bot", text: "Please provide both your age and biological sex to continue." },
      ]);
      return;
    }

    // Add user message
    setChatMessages((prev) => [
      ...prev,
      { type: "user", text: `I am a ${age}-year-old ${gender}.` },
    ]);

    // Add bot response
    setChatMessages((prev) => [
      ...prev,
      { type: "bot", text: `Thank you! Let's proceed with the next steps based on your profile.` },
    ]);

    // Hide inputs and allow further chat
    setFormSubmitted(true);
  };

  const handleSendMessage = () => {
    if (!userInput.trim()) return;

    // Add user's message
    setChatMessages((prev) => [...prev, { type: "user", text: userInput }]);

    // Add bot's response (you can customize or make dynamic)
    setChatMessages((prev) => [
      ...prev,
      { type: "bot", text: `You said: "${userInput}". How can I assist you further?` },
    ]);

    // Clear the input field
    setUserInput("");
  };

  return (
    <section className="flex flex-col lg:flex-row items-start justify-between px-6 md:px-16 py-16 bg-gradient-to-b from-gray-50 to-white">
      {/* Left Side - Testimonials */}
      <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 leading-tight">
          Loved by Our Users
        </h2>
        <p className="text-lg md:text-xl font-medium text-gray-600">
          Trusted by over <span className="text-blue-600">1.5 million users</span>. 100% private, secure, and here to connect you with top-tier doctors.
        </p>

        <div className="flex space-x-6">
          <Image
            src="/img/th1.jpg"
            alt="User 1"
            width={80}
            height={80}
            className="rounded-full shadow-lg border-4 border-blue-600 transform hover:scale-110 transition-transform duration-300"
          />
          <Image
            src="/img/th4.jpg"
            alt="User 2"
            width={80}
            height={80}
            className="rounded-full shadow-lg border-4 border-green-600 transform hover:scale-110 transition-transform duration-300"
          />
          <Image
            src="/img/th6.jpg"
            alt="User 3"
            width={80}
            height={80}
            className="rounded-full shadow-lg border-4 border-purple-600 transform hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 md:p-8 space-y-4">
          <p className="text-lg md:text-xl font-medium text-gray-700">
            “This platform has completely transformed the way I interact with my doctor. It's seamless, secure, and incredibly user-friendly.”
          </p>
          <p className="text-sm font-bold text-blue-600">- Maria Gonzalez</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="px-6 py-3 bg-blue-600 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
            HIPAA-Compliant
          </div>
          <div className="px-6 py-3 bg-green-600 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
            Trusted Worldwide
          </div>
        </div>
      </div>

      {/* Right Side - Chatbot Data Entry */}
      <div className="lg:w-1/2 mt-10 lg:mt-0 flex flex-col items-center lg:items-center space-y-6">
        <div className="w-full max-w-md bg-white border border-gray-300 rounded-lg shadow-lg p-6">
          <div className="bg-blue-600 text-white text-lg font-bold rounded-t-md px-4 py-3 flex justify-between items-center">
            <span>Chat with Us</span>
            <span className="bg-white text-blue-600 rounded-full px-2 py-1 text-sm">Live</span>
          </div>
          <div className="flex flex-col space-y-4 p-4">
            {/* Chatbot Messages */}
            {chatMessages.map((message, index) => (
              <div
                key={index}
                className={`${
                  message.type === "bot" ? "bg-gray-100" : "bg-blue-100 text-right"
                } p-3 rounded-lg shadow-sm text-gray-800`}
              >
                <span className="font-medium">
                  {message.type === "bot" ? "Bot:" : "You:"}
                </span>{" "}
                {message.text}
              </div>
            ))}

            {/* Show Inputs Only if Not Submitted */}
            {!formSubmitted && (
              <>
                {/* Age Input */}
                <div>
                  <label htmlFor="age" className="block text-lg font-medium text-gray-900">
                    Age
                  </label>
                  <input
                    type="number"
                    id="age"
                    placeholder="Enter your age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="w-full px-4 py-3 text-black border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                  />
                </div>

                {/* Biological Sex Selection */}
                <div>
                  <label className="block text-lg font-medium text-gray-700">
                    Biological Sex
                  </label>
                  <div className="flex text-black space-x-4 mt-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="sex"
                        value="Male"
                        checked={gender === "Male"}
                        onChange={() => setGender("Male")}
                        className="mr-2"
                      />
                      Male
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="sex"
                        value="Female"
                        checked={gender === "Female"}
                        onChange={() => setGender("Female")}
                        className="mr-2"
                      />
                      Female
                    </label>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  type="button"
                  onClick={handleGetStarted}
                  className="flex items-center justify-center w-full px-6 py-3 text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
                >
                  Get Started
                </button>
              </>
            )}

            {/* Show Text Input for Chat After Form Submission */}
            {formSubmitted && (
              <div className="flex items-center space-x-4">
                <input
                  type="text"
                  placeholder="Type your message..."
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={handleSendMessage}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
                >
                  Send
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};