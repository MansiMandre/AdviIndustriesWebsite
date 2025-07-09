import React from "react";
import { FaTools, FaChartLine, FaShieldAlt, FaCloud } from "react-icons/fa";

const features = [
  {
    icon: <FaTools size={24} className="text-indigo-600 dark:text-yellow-400" />,
    title: "Smart Tools",
    description: "Boost efficiency with advanced industrial software.",
    img: "https://media.istockphoto.com/id/1320950393/photo/cars-on-production-line-in-factory.jpg?s=1024x1024&w=is&k=20&c=bdmK-vKJN_jNmNyccXVtb8RsX-YelEuOBdxt-eqQ0JU=",
  },
  {
    icon: <FaChartLine size={24} className="text-indigo-600 dark:text-yellow-400" />,
    title: "Analytics",
    description: "Track key metrics and make data-driven decisions.",
    img: "https://media.istockphoto.com/id/1135159540/photo/automation-engineer-uses-laptop-for-programming-robotic-arm-new-era-in-automatic.jpg?s=612x612&w=0&k=20&c=P846Dqx5CqzU7hQE3mBFQ57sp3KmeQFK9cp643McgNo=",
  },
  {
    icon: <FaShieldAlt size={24} className="text-indigo-600 dark:text-yellow-400" />,
    title: "Security",
    description: "Top-notch protection for your industrial data.",
    img: "https://media.istockphoto.com/id/1654943682/photo/advanced-high-precision-robot-arms-on-fully-automated-pcb-assembly-line-inside-modern.jpg?s=612x612&w=0&k=20&c=TfEn1JTNOs_xR6cqVO0vHxjRcgisbnXxuaKGljbwoPM=",
  },
  {
    icon: <FaCloud size={24} className="text-indigo-600 dark:text-yellow-400" />,
    title: "Cloud-Based",
    description: "Access your tools and data from anywhere.",
    img: "https://media.istockphoto.com/id/1171902434/photo/smart-industry-control-concept.jpg?s=612x612&w=0&k=20&c=c1Hrxeu7UzcoS-cPPtlYn6b7luFwcPMvSLuZeEICLXo=",
  },
];

export default function HomePage({ user }) {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center px-4 pt-32 pb-16"
      style={{
        backgroundImage:
          "url('https://media.istockphoto.com/id/843091520/photo/aerial-view-of-oil-and-gas-industry-refinery-shot-from-drone-of-oil-refinery-and-petrochemical.jpg?s=1024x1024&w=is&k=20&c=3Q06837P8ffgfI1D-mvy6d7wQ9Y7V-OCrI6whTSJUQ0=')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-gray-900/50 dark:from-gray-900/70 dark:to-black/70 z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
          ✨ Welcome to <span className="text-indigo-500 dark:text-yellow-400">Advi Industries</span>
        </h1>
        <p className="text-lg sm:text-xl font-medium mb-6 text-yellow-100">
          You're logged in as <span className="font-bold">{user.email}</span>
        </p>
        <p className="text-md sm:text-lg leading-relaxed text-gray-200 mb-10">
          Explore innovative SaaS tools tailored for smart industries.
        </p>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition hover:scale-105"
            >
              <img src={feature.img} alt={feature.title} className="h-28 w-full object-cover" />
              <div className="p-4">
                <div className="mb-1 flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-1 text-gray-800 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12">
          <a
            href="#"
            className="inline-block px-6 py-3 bg-indigo-600 dark:bg-yellow-400 text-white dark:text-black font-semibold rounded-full shadow-lg hover:bg-indigo-500 dark:hover:bg-yellow-300 transition-transform transform hover:scale-105"
          >
            🚀 Get Started
          </a>
        </div>
      </div>
    </div>
  );
}
