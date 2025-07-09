import React from "react";

export default function About() {
  return (
    <div className="min-h-screen pt-28 px-6 py-12 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">
          About <span className="text-indigo-600 dark:text-yellow-400">Advi Industries</span>
        </h1>
        <p className="text-lg max-w-3xl mx-auto leading-relaxed mb-10">
          At Advi Industries, we specialize in delivering smart software solutions for industrial businesses. 
          Our tools help companies enhance efficiency, ensure data security, and leverage cloud technologies 
          for growth. We believe in digital transformation that is simple, scalable, and secure.
        </p>
      </div>

      {/* Grid Section */}
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-4">
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold text-indigo-600 dark:text-yellow-400 mb-2">Our Mission</h3>
          <p className="text-sm">
            Empower industries with reliable digital tools that drive productivity and smart decision-making.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold text-indigo-600 dark:text-yellow-400 mb-2">Our Vision</h3>
          <p className="text-sm">
            To be the global leader in industrial SaaS solutions, making innovation accessible and effortless.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold text-indigo-600 dark:text-yellow-400 mb-2">Why Us?</h3>
          <p className="text-sm">
            With secure infrastructure, intuitive design, and expert support — we help your business grow smarter.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <a
          href="#"
          className="inline-block px-6 py-3 bg-indigo-600 dark:bg-yellow-400 text-white dark:text-black font-semibold rounded-full shadow-lg hover:bg-indigo-500 dark:hover:bg-yellow-300 transition-transform transform hover:scale-105"
        >
          🚀 Learn More
        </a>
      </div>
    </div>
  );
}
