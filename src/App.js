// import React, { useState, useEffect } from "react";
// import { onAuthStateChanged, signOut } from "firebase/auth";
// import { auth } from "./firebase"; // Make sure firebase is initialized here
// import AuthForm from "./Components/AuthForm";
// import "./index.css";

// function App() {
//   const [darkMode, setDarkMode] = useState(false);
//   const [user, setUser] = useState(null);

//   // Load dark mode from localStorage
//   useEffect(() => {
//     const saved = localStorage.getItem("darkMode");
//     if (saved) setDarkMode(saved === "true");
//   }, []);

//   // Save dark mode to localStorage
//   useEffect(() => {
//     localStorage.setItem("darkMode", darkMode);
//   }, [darkMode]);

//   // Listen to Firebase auth changes
//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, (u) => setUser(u));
//     return () => unsub();
//   }, []);

//   return (
//     <div className={darkMode ? "dark" : ""}>
//       <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
//         {/* Header */}
//         <header className="fixed inset-x-0 top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur">
//           <nav className="flex items-center justify-between p-6 lg:px-8">
//             {/* Logo */}
//             <div className="flex items-center space-x-3">
//               <img
//                 className="h-10 w-10"
//                 src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
//                 alt="Advi Logo"
//               />
//               <span className="text-xl font-extrabold tracking-tight">
//                 <span className="text-indigo-600 dark:text-yellow-400">Advi</span> Industries
//               </span>
//             </div>

//             {/* Nav Links */}
//             <div className="hidden lg:flex gap-6 items-center text-sm font-semibold">
//               <a href="#home" className="hover:text-indigo-600 dark:hover:text-yellow-300">Home</a>
//               <a href="#about" className="hover:text-indigo-600 dark:hover:text-yellow-300">About</a>

//               {!user ? (
//                 <>
//                   <a href="#auth" className="hover:text-indigo-600 dark:hover:text-yellow-300">Login</a>
//                   <a href="#auth" className="hover:text-indigo-600 dark:hover:text-yellow-300">Signup</a>
//                 </>
//               ) : (
//                 <button onClick={() => signOut(auth)} className="hover:text-red-600 dark:hover:text-red-400">
//                   Logout
//                 </button>
//               )}
//             </div>

//             {/* Dark mode toggle */}
//             <button
//               onClick={() => setDarkMode(!darkMode)}
//               className="bg-indigo-600 dark:bg-yellow-400 text-white dark:text-black px-4 py-2 rounded-md shadow hover:opacity-90 transition"
//             >
//               {darkMode ? "☀️ Light" : "🌙 Dark"}
//             </button>
//           </nav>
//         </header>

//         {/* Main content */}
//         <main className="pt-32 px-6 lg:px-8" id="home">
//           <div className="text-center max-w-2xl mx-auto">
//             <h1 className="text-4xl font-bold sm:text-6xl text-balance">
//               Elevate Your Business With Advi Industries
//             </h1>
//             <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
//               Empowering Your Success With Cutting-Edge SaaS Solutions Built For <br />
//               Scalability, Efficiency, And Growth
//             </p>
//             <div className="mt-10 flex items-center justify-center gap-x-6">
//               <a
//                 href="#"
//                 className="rounded-md bg-indigo-600 dark:bg-yellow-400 px-4 py-2 text-sm font-semibold text-white dark:text-black shadow hover:bg-indigo-500 dark:hover:bg-yellow-300"
//               >
//                 Get started
//               </a>
//               <a href="#about" className="text-sm font-semibold leading-6">
//                 Learn more →
//               </a>
//             </div>
//           </div>
//         </main>

//         {/* About Section */}
//         <section id="about" className="py-20 px-6 text-center">
//           <h2 className="text-3xl font-bold mb-4">About Advi Industries</h2>
//           <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//             At Advi Industries, we craft scalable, efficient, and innovative SaaS solutions that help businesses grow with confidence.
//             With a passion for technology and a customer-first mindset, we build tools that empower modern enterprises.
//           </p>
//         </section>

//         {/* Auth Section */}
//         {!user && (
//           <section id="auth" className="py-20 px-6">
//             <AuthForm onLogin={(u) => setUser(u)} />
//           </section>
//         )}

//         {/* User Greeting */}
//         {user && (
//           <section className="p-6 text-center">
//             <h2 className="text-xl">Welcome, {user.email}!</h2>
//             <p>You are logged in 🎉</p>
//           </section>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;



// App.jsx
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase";
import AuthForm from "./Components/AuthForm";
import HomePage from "./Components/Homepage"; // you will create this
import Navbar from './Components/Navbar'
import Contact from './Components/Contact'
import About from './Components/About'
import Feature from './Components/Feature'
import "./index.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState(null);

  // Dark mode load/save
  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved) setDarkMode(saved === "true");
  }, []);
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  // Auth listener
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsub();
  }, []);

  return (
    <Router>
      <div className={darkMode ? "dark" : ""}>
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
          <Navbar
            user={user}
            onLogout={() => signOut(auth)}
            toggleDark={() => setDarkMode(!darkMode)}
            darkMode={darkMode}
          />
          <Routes>
            <Route
              path="/"
              element={user ? <Navigate to="/home" /> : <Navigate to="/auth" />}
            />
            <Route path="/auth" element={!user ? <AuthForm onLogin={(u) => setUser(u)} /> : <Navigate to="/home" />} />
            <Route path="/home" element={user ? <HomePage user={user} /> : <Navigate to="/auth" />} />
            <Route path="/contact" element={user ? <Contact user={user} /> : <Navigate to="/contact" />} />
            <Route path="/about" element={user ? <About user={user} /> : <Navigate to="/about" />} />
            <Route path="/feature" element={user ? <Feature user={user} /> : <Navigate to="/feature" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;

