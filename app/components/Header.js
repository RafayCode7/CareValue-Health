"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaSearch, FaUser, FaShoppingBag, FaBars } from "react-icons/fa";

export const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "AI Doctor", link: "/user/AiDoctor" },
    { name: "Consult a Specialist", link: "/user/consultSpecialist" },
    { name: "Patient Portal", link: "/user/patientPortal" },
    { name: "Testimonials", link: "/user/testimonials" },
    { name: "Contact Us", link: "/user/contactUs" },
  ];

  const dropdownItems = [
    { name: "About Us", link: "/user/aboutUs" },
    { name: "Blog", link: "/user/blog" },
    { name: "Privacy Policy", link: "/user/privacyPolicy" },
    { name: "Terms of Service", link: "/user/termsAndServices" },
  ];

  return (
    <header className="flex items-center justify-between px-10 py-4 bg-[#12104A] shadow-md font-[Poppins] sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/CVH-MANUAL_page-0003.jpg" // Update the path to your image file
          alt="CareValue Health Logo"
          width={180}
          height={70}
          quality={100}
          priority
        />
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-5 text-white font-medium text-lg">
        {navItems.map((navItem, idx) => (
          <Link key={idx} href={navItem.link} className="hover:text-gray-300">
            {navItem.name}
          </Link>
        ))}

        {/* Dropdown Menu */}
        <div
          className="relative cursor-pointer"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <span className="hover:text-gray-300">More</span>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-[#12104A] text-white rounded-lg shadow-lg p-2 border border-gray-400">
              {dropdownItems.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.link}
                  className="block px-4 py-3 text-lg rounded-lg hover:bg-gray-200 hover:text-[#12104A] transition duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Action Icons */}
      <div className="flex items-center space-x-5 text-white">
        <FaSearch className="text-xl hover:text-gray-300 cursor-pointer" />
        <FaUser className="text-xl hover:text-gray-300 cursor-pointer" />
        <FaShoppingBag className="text-xl hover:text-gray-300 cursor-pointer" />
        <FaBars className="text-xl hover:text-gray-300 cursor-pointer md:hidden" />
      </div>
    </header>
  );
};
