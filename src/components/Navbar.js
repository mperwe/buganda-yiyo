import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Buganda YIYO</h1>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
          <li><Link to="/about" className="hover:text-yellow-400">About</Link></li>
          <li><Link to="/projects" className="hover:text-yellow-400">Projects</Link></li>
          <li><Link to="/contact" className="hover:text-yellow-400">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
