import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ user, onLogout, toggleDark, darkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur">
      <nav className="flex items-center justify-between p-4 lg:px-8">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            className="h-10 w-10"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg"
            alt="Logo"
          />
          <span className="text-xl font-extrabold tracking-tight">
            <span className="text-indigo-600 dark:text-yellow-400">Advi</span> Industries
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-4 items-center">
          <Link to="/home" className="text-sm font-semibold hover:text-indigo-600 dark:hover:text-yellow-400">
            Home
          </Link>
          <Link to="/about" className="text-sm font-semibold hover:text-indigo-600 dark:hover:text-yellow-400">
            About
          </Link>
          <Link to="/feature" className="text-sm font-semibold hover:text-indigo-600 dark:hover:text-yellow-400">
            Features
          </Link>
          <Link to="/contact" className="text-sm font-semibold hover:text-indigo-600 dark:hover:text-yellow-400">
            Contact
          </Link>
          <button
            onClick={toggleDark}
            className="bg-indigo-600 dark:bg-yellow-400 text-white dark:text-black px-3 py-1 rounded hover:opacity-90"
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
          {!user ? (
            <Link
              to="/auth"
              className="text-sm font-semibold bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500"
            >
              Login / Signup
            </Link>
          ) : (
            <button
              onClick={onLogout}
              className="text-sm font-semibold bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Logout
            </button>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl focus:outline-none"
          >
            {menuOpen ? "✖️" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4 flex flex-col gap-3 shadow-lg">
          <Link to="/home" onClick={() => setMenuOpen(false)} className="text-sm font-semibold hover:text-indigo-600 dark:hover:text-yellow-400">
            Home
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="text-sm font-semibold hover:text-indigo-600 dark:hover:text-yellow-400">
            About
          </Link>
          <Link to="/feature" onClick={() => setMenuOpen(false)} className="text-sm font-semibold hover:text-indigo-600 dark:hover:text-yellow-400">
            Features
          </Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="text-sm font-semibold hover:text-indigo-600 dark:hover:text-yellow-400">
            Contact
          </Link>
          <button
            onClick={() => {
              toggleDark();
              setMenuOpen(false);
            }}
            className="bg-indigo-600 dark:bg-yellow-400 text-white dark:text-black px-3 py-1 rounded hover:opacity-90"
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
          {!user ? (
            <Link
              to="/auth"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-semibold bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500"
            >
              Login / Signup
            </Link>
          ) : (
            <button
              onClick={() => {
                onLogout();
                setMenuOpen(false);
              }}
              className="text-sm font-semibold bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </header>
  );
}
