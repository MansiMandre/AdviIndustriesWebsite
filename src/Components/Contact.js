import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 pt-28 px-4">
      <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-10 w-full max-w-md text-center transition-all duration-300">
        <img
          src="https://avatars.githubusercontent.com/u/9919?s=280&v=4"
          alt="Contact"
          className="w-24 h-24 rounded-full mx-auto border-4 border-indigo-500 dark:border-yellow-400 shadow-md"
        />
        <h2 className="text-3xl font-bold mt-5 text-gray-800 dark:text-white">Advi Support</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8 text-sm">
          We're here to help you 24/7 with your technical or service needs.
        </p>

        <div className="space-y-6 text-left text-gray-700 dark:text-gray-200">
          <div className="flex items-center gap-4 hover:bg-gray-100 dark:hover:bg-gray-700 p-3 rounded-md transition">
            <FaEnvelope className="text-indigo-600 dark:text-yellow-400 text-lg" />
            <span className="text-sm">support@adviindustries.com</span>
          </div>

          <div className="flex items-center gap-4 hover:bg-gray-100 dark:hover:bg-gray-700 p-3 rounded-md transition">
            <FaPhoneAlt className="text-indigo-600 dark:text-yellow-400 text-lg" />
            <span className="text-sm">+1 (800) 123-4567</span>
          </div>

          <div className="flex items-center gap-4 hover:bg-gray-100 dark:hover:bg-gray-700 p-3 rounded-md transition">
            <FaMapMarkerAlt className="text-indigo-600 dark:text-yellow-400 text-lg" />
            <span className="text-sm">123 Innovation Drive, Houston, TX</span>
          </div>
        </div>
      </div>
    </div>
  );
}
