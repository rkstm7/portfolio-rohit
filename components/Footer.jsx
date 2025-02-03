import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Paragraph section */}
          <div className="text-center sm:text-left mb-4 sm:mb-0 px-4 py-2">
            <p className="text-sm sm:text-base">
              &copy; 2025 Made By: Mr. Rohit Kumar Singh. All rights reserved.
            </p>
          </div>

          {/* Icons section */}
          <div className="flex space-x-6 mt-4 sm:mt-0 px-4 py-2">
            <a
              href="https://www.facebook.com/profile.php?id=100071203236403"
              className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
            >
              <FaFacebookF className="text-xl" />
              <span className="sr-only">Facebook</span>
            </a>
            <a
              href="https://x.com/raajputrksingh"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              <FaTwitter className="text-xl" />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              href="https://www.linkedin.com/in/rkstm7"
              className="text-gray-400 hover:text-blue-700 transition-colors duration-300"
            >
              <FaLinkedinIn className="text-xl" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://www.instagram.com/___rohitsingh7/"
              className="text-gray-400 hover:text-pink-600 transition-colors duration-300"
            >
              <FaInstagram className="text-xl" />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
