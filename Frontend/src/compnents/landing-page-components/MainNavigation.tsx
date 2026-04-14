import { useState } from "react";
import { NavLink } from "react-router";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Problem", path: "/problem" },
  { name: "Solution", path: "/solution" },
  { name: "How It Works", path: "/how-it-works" },
  { name: "Features", path: "/features" },
  { name: "Screens", path: "/screens" },
  { name: "Impact", path: "/impact" },
  { name: "Contact", path: "/contact" },
];

export default function MainNavigation() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between py-6 px-6 md:px-12 lg:px-20 relative">

      {/* LOGO */}
      <div className="flex items-center gap-2">
        <div className="w-9 h-9 bg-green-900 rounded-md flex items-center justify-center text-white font-bold">
          C
        </div>
        <span className="font-semibold text-lg text-green-900">
          ClinicSync AI
        </span>
      </div>

      {/* DESKTOP LINKS */}
      <ul className="hidden md:flex items-center gap-8 text-sm text-gray-700">
        {navLinks.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              className="hover:text-green-900"
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* CTA BUTTON (DESKTOP) */}
      <button className="hidden md:block bg-green-900 text-white px-5 py-2 rounded-full text-sm hover:bg-green-800 transition">
        Get Started →
      </button>

      {/* HAMBURGER (MOBILE) */}
      <button
        className="md:hidden text-3xl text-green-900"
        onClick={() => setOpen(!open)}
      >
        {open ? "✕" : "☰"}
      </button>

      {/* MOBILE MENU */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col gap-4 p-6 md:hidden z-50">

          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className="text-gray-700 hover:text-green-900"
            >
              {link.name}
            </NavLink>
          ))}

          <button className="bg-green-900 text-white px-5 py-2 rounded-full mt-4">
            Get Started →
          </button>

        </div>
      )}

    </nav>
  );
}