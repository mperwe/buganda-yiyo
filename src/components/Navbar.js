import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg"; // Path to your logo file

export default function Navbar() {
  return (
    <nav className="bg-[white] text-blue p-5 flex justify-between items-center shadow-lg rounded-md">
      {/* Logo and Title */}
      <div className="flex items-center space-x-4">
        <img src={logo} alt="Logo" className="h-12 w-12 object-contain" />
        <h1 className="text-3xl font-semibold tracking-wide">BUGANDA YIYO  - BUGANDA YANGE</h1>
      </div>
      
      {/* Navigation Links */}
      <ul className="flex space-x-8 text-lg">
        <li>
          <Link to="/" className="hover:text-yellow-400 transition-all duration-200 ease-in-out">Home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-yellow-400 transition-all duration-200 ease-in-out">About</Link>
        </li>
        <li>
          <Link to="/events" className="hover:text-yellow-400 transition-all duration-200 ease-in-out">Events</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-yellow-400 transition-all duration-200 ease-in-out">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
