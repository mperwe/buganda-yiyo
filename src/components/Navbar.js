import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.jpeg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-white shadow-lg transition-all duration-300 ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center p-5">
        {/* Logo & Title */}
        <div className="flex items-center space-x-4">
          <Link to="/#hero" onClick={() => setMenuOpen(false)}>
            <img src={logo} alt="Logo" className="h-16 w-16 object-contain" />
          </Link>
          <h1 className="text-2xl lg:text-3xl font-semibold tracking-wide">
            <Link to="/#hero" className="hover:text-yellow-500 transition-all duration-200">
              BUGANDA YIYO - YANGE
            </Link>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          {["Home", "About", "Events", "Contact"].map((item, index) => (
            <li key={index}>
              <Link
                to={`/${item.toLowerCase()}`}
                className="hover:text-yellow-500 transition-all duration-200"
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
