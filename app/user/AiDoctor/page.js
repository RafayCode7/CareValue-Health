"use client";

import { useState, useEffect, useRef } from "react";

export default function CareValueHealth() {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [error, setError] = useState("");
  const [chatMessages, setChatMessages] = useState([
    {
      type: "bot",
      text: "Hi, I'm your private doctor. Please tell me your age and gender to get started.",
    },
  ]);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [userInput, setUserInput] = useState("");

  const chatEndRef = useRef(null);

  // Auto-scroll to the latest message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  const handleGetStarted = () => {
    if (!age.trim() || !gender.trim()) {
      setChatMessages((prev) => [
        ...prev,
        { type: "bot", text: "Please provide both age and gender to proceed." },
      ]);
      setError("Please provide both age and gender.");
      return;
    }
    if (parseInt(age) < 18) {
      setChatMessages((prev) => [
        ...prev,
        {
          type: "bot",
          text: "Sorry, you must be at least 18 years old to use this service.",
        },
      ]);
      setError("Age must be 18 or older.");
      return;
    }

    setError("");
    setChatMessages((prev) => [
      ...prev,
      { type: "user", text: `I am a ${age}-year-old ${gender}.` },
      {
        type: "bot",
        text: "Thank you! Let's proceed with the next steps. You can now ask me anything about your health.",
      },
    ]);
    setIsFormSubmitted(true);
  };

  const handleSendMessage = () => {
    if (!userInput.trim()) return;

    setChatMessages((prev) => [
      ...prev,
      { type: "user", text: userInput },
      {
        type: "bot",
        text: `You said: "${userInput}". How can I assist you further?`,
      },
    ]);

    setUserInput("");
  };

  const handleInputKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-start min-h-screen text-black text-center"
      style={{
        background: "linear-gradient(to bottom, #FFDEFF, #A8C8FF)",
      }}
    >
      <div className="flex flex-col items-center justify-center w-full px-4 py-12 bg-gradient-to-b from-pink-100 to-blue-100">
  {/* Header Content */}
  <div className="max-w-screen-lg w-full text-center">
    <h1 className="text-5xl font-bold text-gray-800 mb-6">
      Meet Your Personal AI Doctor
    </h1>
    <h2 className="text-2xl font-bold text-gray-700 mb-6">
      Fast. Free. Always Here for You.
    </h2>
    <p className="text-lg text-gray-700 font-medium mb-8">
      We've already empowered over{" "}
      <span className="font-bold text-gray-800">4,152,750</span> people to take
      control of their health. Now it's your turn.
    </p>
  </div>

  {/* Content Section */}
  <div className="flex flex-col lg:flex-row items-center justify-between max-w-screen-lg w-full">
    {/* Left: Benefits List */}
    <ul className="text-lg text-gray-700 font-medium mb-8 lg:mb-0 lg:mr-8 space-y-4 lg:w-1/2 text-left">
      <li>● Get Expert Health Advice Instantly</li>
      <li>● Consult Specialists at Your Convenience</li>
      <li>● Access Second Opinions Quickly and Privately</li>
      <li>● Use Our Symptom Checker Anytime, Anywhere</li>
    </ul>

    {/* Right: User Images */}
    <div className="grid grid-cols-5 gap-2 lg:w-1/2">
      <img
        src="https://randomuser.me/api/portraits/women/44.jpg"
        alt="user"
        className="w-16 h-16 rounded-full border-2 border-white"
      />
      <img
        src="https://randomuser.me/api/portraits/men/46.jpg"
        alt="user"
        className="w-16 h-16 rounded-full border-2 border-white"
      />
      <img
        src="https://randomuser.me/api/portraits/women/47.jpg"
        alt="user"
        className="w-16 h-16 rounded-full border-2 border-white"
      />
      <img
        src="https://randomuser.me/api/portraits/men/48.jpg"
        alt="user"
        className="w-16 h-16 rounded-full border-2 border-white"
      />
      <img
        src="https://randomuser.me/api/portraits/women/49.jpg"
        alt="user"
        className="w-16 h-16 rounded-full border-2 border-white"
      />
    </div>
  </div>
</div>


      <hr className="w-3/4 border-gray-300 mb-8" />

      {/* Chat Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 md:w-1/2 flex flex-col mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Healthcare on Your Terms
        </h2>
        <p className="text-lg text-gray-700 font-medium mb-6">
          No Waiting Rooms. No Hassles. Just Quality Care.
        </p>
        <p className="text-lg text-gray-700 font-medium mb-6">
          Tell us a bit about yourself to get started:
        </p>

        {!isFormSubmitted && (
          <>
            <label htmlFor="age" className="block text-left mb-2 font-semibold">
              Age (18+):
            </label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
                setError(""); // Clear error on change
              }}
              className="w-full border rounded-md p-2 mb-4 text-black"
              placeholder="Enter your age"
            />

            <label className="block text-left mb-2 font-semibold">Gender:</label>
            <div className="flex justify-center gap-4 mb-4">
              <label className="text-black flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  onChange={(e) => {
                    setGender(e.target.value);
                    setError(""); // Clear error on change
                  }}
                  className="mr-2"
                />
                Female
              </label>
              <label className="text-black flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  onChange={(e) => {
                    setGender(e.target.value);
                    setError(""); // Clear error on change
                  }}
                  className="mr-2"
                />
                Male
              </label>
            </div>

            {error && <p className="text-red-500 mb-4">{error}</p>}

            <button
              onClick={handleGetStarted}
              className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 w-full shadow-lg transform hover:scale-105 transition duration-200 mb-4"
            >
              Get Started for Free
            </button>
            <p className="text-sm text-gray-600">
              No payment required—start your free consultation now!
            </p>
          </>
        )}

        {isFormSubmitted && (
          <div className="overflow-y-auto max-h-96 space-y-2">
            {chatMessages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.type === "bot" ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg shadow-md ${
                    message.type === "bot"
                      ? "bg-gray-200 text-black"
                      : "bg-indigo-500 text-white"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            <div ref={chatEndRef}></div>
          </div>
        )}

        {isFormSubmitted && (
          <div className="flex items-center mt-4">
            <input
              type="text"
              placeholder="Type your message..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={handleInputKeyPress}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 text-black focus:ring-indigo-500"
            />
            <button
              onClick={handleSendMessage}
              className="ml-2 px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transform hover:scale-105 transition duration-200"
            >
              Send
            </button>
          </div>
        )}
      </div>

      <div className="w-full flex flex-col items-center bg-gradient-to-b from-blue-50 to-white py-12 px-4">
  {/* Exceptional Care Section */}
  <div className="bg-white p-8 rounded-lg shadow-lg max-w-screen-md w-full mb-12">
    <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
      Experience Exceptional Care
    </h2>
    <p className="text-lg text-gray-700 leading-relaxed text-center">
      When you're ready, connect with top doctors via video. Personalized care
      is just a click away—for only{" "}
      <span className="font-bold text-gray-800">$29</span>.
    </p>
    <div className="flex justify-center mt-6">
      <button className="bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 shadow-lg transform hover:scale-105 transition duration-200">
        Book a Video Consultation
      </button>
    </div>
  </div>

  {/* Location Section */}
  <div className="bg-white p-8 rounded-lg shadow-lg max-w-screen-md w-full">
    <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
      We're Here for You 24/7
    </h2>
    <p className="text-lg text-gray-700 leading-relaxed text-center mb-6">
      Find the Closest CareValue Health Location Near You.
    </p>
    <p className="text-lg text-gray-700 leading-relaxed text-center">
      Use Google Maps to locate our nearest facility and get directions:
    </p>
    <div className="flex justify-center mt-6">
      <a
        href="#"
        className="text-indigo-600 hover:underline text-lg font-bold mt-4 block"
      >
        Find a CareValue Health Location Near You
      </a>
    </div>
  </div>
</div>

    </div>
  );
}
