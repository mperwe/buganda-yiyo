import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        
        {/* Navigation Links */}
        <div className="text-center sm:text-left">
          <h3 className="text-2xl font-semibold mb-6">Quick Links</h3>
          <ul className="space-y-3">
            <li><Link to="/" className="hover:text-[#FFA500] transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-[#FFA500] transition-colors">About Us</Link></li>
            <li><Link to="/events" className="hover:text-[#FFA500] transition-colors">Events</Link></li>
            <li><Link to="/contact" className="hover:text-[#FFA500] transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="text-center sm:text-left">
          <h3 className="text-2xl font-semibold mb-6">Contact Us</h3>
          <p className="flex justify-center sm:justify-start items-center gap-3 text-lg">
            <Mail size={20} /> info@bugandayiyo.com
          </p>
          <p className="flex justify-center sm:justify-start items-center gap-3 mt-4 text-lg">
            <Phone size={20} /> +256 123 456 789
          </p>
        </div>

        {/* Social Media Links */}
        <div className="text-center sm:text-left">
          <h3 className="text-2xl font-semibold mb-6">Follow Us</h3>
          <div className="flex justify-center sm:justify-start space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFA500] transition-colors">
              <Facebook size={28} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFA500] transition-colors">
              <Twitter size={28} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFA500] transition-colors">
              <Instagram size={28} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFA500] transition-colors">
              <Linkedin size={28} />
            </a>
          </div>
        </div>

        {/* Newsletter or Subscription Section */}
        <div className="text-center sm:text-left">
          <h3 className="text-2xl font-semibold mb-6">Newsletter</h3>
          <p className="text-lg mb-4">Subscribe to our newsletter for the latest updates:</p>
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 w-full sm:w-72 rounded bg-gray-800 border-2 border-transparent focus:ring-2 focus:ring-[#FFA500] focus:outline-none"
          />
          <button className="mt-4 px-6 py-3 bg-[#FFA500] text-black font-semibold rounded hover:bg-[#cc8400] transition-colors">
            Subscribe
          </button>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-sm mt-12 pt-6 border-t border-white/20">
        <p>© 2025 Buganda YIYO - Empowering the Youth. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
