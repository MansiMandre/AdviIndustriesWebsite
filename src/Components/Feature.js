// Components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";

export default function Feature() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 text-center">
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Empower Your Business with <span className="text-yellow-400"><br/> Advi Industries</span>
      </motion.h1>
      <motion.p
        className="max-w-xl text-lg md:text-xl mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Scalable SaaS solutions tailored for your growth and efficiency.
      </motion.p>
      <motion.a
        href="#features"
        className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
       Connect Us
      </motion.a>
    </section>
  );
}
