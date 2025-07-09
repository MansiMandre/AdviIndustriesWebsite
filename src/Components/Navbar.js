import { Link } from "react-router-dom";

export default function Navbar({ user, onLogout, toggleDark, darkMode }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur">
      <nav className="flex items-center justify-between p-6 lg:px-8">
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

        <div className="flex gap-4 items-center">
          <Link
            to="/home"
            className="hidden lg:inline text-sm font-semibold hover:text-indigo-600 dark:hover:text-yellow-400"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hidden lg:inline text-sm font-semibold hover:text-indigo-600 dark:hover:text-yellow-400"
          >
            About
          </Link>
          <Link
            to="/feature"
            className="hidden lg:inline text-sm font-semibold hover:text-indigo-600 dark:hover:text-yellow-400"
          >
            Features
          </Link>
          <Link
            to="/contact"
            className="hidden lg:inline text-sm font-semibold hover:text-indigo-600 dark:hover:text-yellow-400"
          >
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
      </nav>
    </header>
  );
}
