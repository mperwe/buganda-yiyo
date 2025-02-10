import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icons for mobile menu
import logo from "../assets/logo.jpeg"; // Path to your logo file

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white text-blue-900 p-5 shadow-lg rounded-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo & Title */}
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="h-16 w-16 object-contain" />
          <h1 className="text-2xl lg:text-3xl font-semibold tracking-wide">BUGANDA YIYO - YANGE</h1>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          {["Home", "About", "Events", "Contact"].map((item, index) => (
            <li key={index}>
              <Link
                to={`/${item.toLowerCase()}`}
                className="hover:text-yellow-500 transition-all duration-200 ease-in-out"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-white shadow-lg rounded-md absolute left-0 w-full mt-3 text-lg font-medium">
          {["Home", "About", "Events", "Contact"].map((item, index) => (
            <li key={index} className="border-b last:border-none">
              <Link
                to={`/${item.toLowerCase()}`}
                className="block p-4 text-center hover:bg-yellow-500 hover:text-white transition-all"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
