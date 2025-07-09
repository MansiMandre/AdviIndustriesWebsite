import React, { useState } from "react";
import Hero from "./Hero";
import Feature from "./Feature"; // Optional if you want to keep this
import { FaTools, FaChartLine, FaShieldAlt, FaCloud } from "react-icons/fa";

const testimonials = [
  {
    name: "Alice Johnson",
    role: "CEO, TechCorp",
    text: "Advi Industries transformed our workflow with their amazing SaaS platform. Reliable and scalable!",
  },
  {
    name: "Mark Stevens",
    role: "CTO, InnovateX",
    text: "The security and customization options blew me away. Highly recommend for tech-forward companies.",
  },
  {
    name: "Sara Lee",
    role: "Product Manager, StartupHub",
    text: "Fast, efficient, and easy to use. Support team is also fantastic!",
  },
];

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

export default function Home({ user }) {
  const [showMore, setShowMore] = useState(false);
  const handleLearnMoreClick = () => setShowMore(true);

  return (
    <div>
      {/* Hero + Welcome */}
      <div
        className="relative min-h-screen bg-cover bg-center px-4 pt-32 pb-16"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/843091520/photo/aerial-view-of-oil-and-gas-industry-refinery-shot-from-drone-of-oil-refinery-and-petrochemical.jpg?s=1024x1024&w=is&k=20&c=3Q06837P8ffgfI1D-mvy6d7wQ9Y7V-OCrI6whTSJUQ0=')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-gray-900/50 dark:from-gray-900/70 dark:to-black/70 z-0"></div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            ✨ Welcome to <span className="text-indigo-500 dark:text-yellow-400">Advi Industries</span>
          </h1>
          {user?.email && (
            <p className="text-lg sm:text-xl font-medium mb-6 text-yellow-100">
              You're logged in as <span className="font-bold">{user.email}</span>
            </p>
          )}
          <p className="text-md sm:text-lg leading-relaxed text-gray-200 mb-10">
            Explore innovative SaaS tools tailored for smart industries.
          </p>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition hover:scale-105"
              >
                <img src={feature.img} alt={feature.title} className="h-28 w-full object-cover" />
                <div className="p-4">
                  <div className="mb-1 flex items-center justify-center">{feature.icon}</div>
                  <h3 className="text-lg font-semibold mb-1 text-gray-800 dark:text-white">{feature.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-12">
            <button
              onClick={handleLearnMoreClick}
              className="inline-block px-6 py-3 bg-indigo-600 dark:bg-yellow-400 text-white dark:text-black font-semibold rounded-full shadow-lg hover:bg-indigo-500 dark:hover:bg-yellow-300 transition-transform transform hover:scale-105"
            >
              Learn More →
            </button>
          </div>
        </div>
      </div>

      {/* When showMore is true, show the expanded sections */}
      {showMore && (
        <>
          {/* Why Choose Us Section */}
          <section className="py-20 px-6 bg-white dark:bg-gray-800 text-gray-900 dark:text-white max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Why Choose Advi Industries?</h2>
            <div className="grid md:grid-cols-3 gap-10 text-center">
              <div>
                <h3 className="text-2xl font-semibold mb-2">Scalability</h3>
                <p>Our solutions grow with your business, handling increased load without breaking a sweat.</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Security</h3>
                <p>State-of-the-art encryption and compliance to keep your data protected at all times.</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">24/7 Support</h3>
                <p>Our dedicated team is always ready to assist you whenever you need help or guidance.</p>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
            <div className="space-y-8">
              {testimonials.map(({ name, role, text }) => (
                <div
                  key={name}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center"
                >
                  <p className="italic mb-4">“{text}”</p>
                  <h3 className="font-semibold">{name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-20 px-6 bg-indigo-600 dark:bg-yellow-400 text-white dark:text-black text-center rounded-tl-3xl rounded-tr-3xl max-w-4xl mx-auto">
            <h2 className="text-4xl font-extrabold mb-6">Ready to elevate your business?</h2>
            <p className="mb-8 text-lg max-w-xl mx-auto">
              Join hundreds of companies using Advi Industries to streamline their operations and boost growth.
            </p>
            <a
              href="#auth"
              className="inline-block bg-white dark:bg-black text-indigo-600 dark:text-yellow-400 px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Get Started Today
            </a>
          </section>
        </>
      )}
    </div>
  );
}
