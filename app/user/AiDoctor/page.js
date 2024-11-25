"use client";

import { useState } from "react";

export default function CareValueHealth() {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [error, setError] = useState("");
  const [chatMessages, setChatMessages] = useState([
    { type: "bot", text: "Hi, I'm your private doctor. Please tell me your age and gender to get started." },
  ]);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [userInput, setUserInput] = useState("");

  const handleGetStarted = () => {
    if (!age || !gender) {
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
        { type: "bot", text: "Sorry, you must be at least 18 years old to use this service." },
      ]);
      setError("Age must be 18 or older.");
      return;
    }

    setError("");
    setChatMessages((prev) => [
      ...prev,
      { type: "user", text: `I am a ${age}-year-old ${gender}.` },
      { type: "bot", text: "Thank you! Let's proceed with the next steps. You can now ask me anything about your health." },
    ]);
    setIsFormSubmitted(true); // Hide the form and display the text input
  };

  const handleSendMessage = () => {
    if (!userInput.trim()) return;

    setChatMessages((prev) => [
      ...prev,
      { type: "user", text: userInput },
      { type: "bot", text: `You said: "${userInput}". How can I assist you further?` },
    ]);

    setUserInput("");
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen text-black text-center"
      style={{
        background: "linear-gradient(to bottom, #FFDEFF, #A8C8FF)",
      }}
    >
      {/* Logo Section */}
      <div className="w-full flex justify-center mt-4 mb-6">
        <img
          src="/img/CVH-MANUAL_page-0002.jpg"
          alt="Care Value Health Logo"
          className="h-16 w-auto"
        />
      </div>

      {/* Header Section */}
      <h1 className="text-5xl font-bold mb-6 text-gray-800 mt-2">
        Hi, I'm <span className="italic">CareValue Health</span>, your{" "}
        <span className="italic">private</span> and <span className="italic">personal</span> AI doctor.
      </h1>
      <p className="text-lg text-gray-700 font-medium mb-4">
        As an AI doctor, my service is fast and free.
      </p>
      <p className="text-lg text-gray-700 font-medium mb-6">
        I've already helped people in <span className="font-bold">4,152,750 chats!</span>
      </p>

      {/* Chat Avatars */}
      <div className="flex justify-center mb-8">
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="user"
          className="w-10 h-10 rounded-full border-2 border-white"
        />
        <img
          src="https://randomuser.me/api/portraits/men/46.jpg"
          alt="user"
          className="w-10 h-10 rounded-full border-2 border-white -ml-2"
        />
        <img
          src="https://randomuser.me/api/portraits/women/47.jpg"
          alt="user"
          className="w-10 h-10 rounded-full border-2 border-white -ml-2"
        />
        <img
          src="https://randomuser.me/api/portraits/men/48.jpg"
          alt="user"
          className="w-10 h-10 rounded-full border-2 border-white -ml-2"
        />
        <img
          src="https://randomuser.me/api/portraits/women/49.jpg"
          alt="user"
          className="w-10 h-10 rounded-full border-2 border-white -ml-2"
        />
      </div>
      <p className="text-sm font-semibold text-gray-800 bg-white px-4 py-2 rounded-md shadow mb-10">
        When we're done, you can have a video visit with a top doctor if you want. Those visits only cost <span className="font-bold">$29</span>.
      </p>

      <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 md:w-1/2 flex flex-col">
        {/* Chat Messages */}
        <div className="overflow-y-auto max-h-96 mb-4 space-y-2">
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
        </div>

        {/* Age and Gender Form */}
        {!isFormSubmitted && (
          <>
            <label htmlFor="age" className="block text-left mb-2 font-semibold">
              Age (18+)
            </label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full border rounded-md p-2 mb-4 text-black"
              placeholder="Enter your age"
            />

            <label className="block text-left mb-2 font-semibold">Gender</label>
            <div className="flex justify-center gap-4 mb-4">
              <label className="text-black flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  onChange={(e) => setGender(e.target.value)}
                  className="mr-2"
                />
                Female
              </label>
              <label className="text-black flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  onChange={(e) => setGender(e.target.value)}
                  className="mr-2"
                />
                Male
              </label>
            </div>

            {error && <p className="text-red-500 mb-4">{error}</p>}

            <button
              onClick={handleGetStarted}
              className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 w-full shadow-lg transform hover:scale-105 transition duration-200"
            >
              Get Started
            </button>
          </>
        )}

        {/* Chat Input */}
        {isFormSubmitted && (
          <div className="flex items-center mt-4">
            <input
              type="text"
              placeholder="Type your message..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 text-black focus:ring-indigo-500"
            />
            <button
              type="button"
              onClick={handleSendMessage}
              className="ml-2 px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transform hover:scale-105 transition duration-200"
            >
              Send
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
