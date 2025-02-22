import React, { useState } from 'react';
import bug5 from '../assets/bug7.jpg'; // Import the background image

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <section
      className="relative py-20 text-center bg-cover bg-center mt-24"
      style={{ backgroundImage: `url(${bug5})` }} // Set the imported image as the background
    >
      <div className="absolute inset-0 bg-black opacity-30"></div> {/* Adjust opacity for clarity */}
      <div className="relative z-10 text-white">
        <h1 className="text-5xl font-bold mb-6 leading-tight tracking-wide">Contact Us</h1>
        <p className="max-w-3xl mx-auto text-xl mb-12">
          We are here to help you with any inquiries, partnerships, or feedback. Please feel free to reach out!
        </p>
        
        <div className="flex justify-center gap-8 mb-8">
          <a href="https://wa.me/yourwhatsapplink" target="_blank" rel="noreferrer" className="text-white hover:text-green-500 transition duration-300">
            <i className="fab fa-whatsapp text-4xl"></i>
            <span className="block mt-2">WhatsApp</span>
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noreferrer" className="text-white hover:text-blue-500 transition duration-300">
            <i className="fab fa-linkedin text-4xl"></i>
            <span className="block mt-2">LinkedIn</span>
          </a>
          <a href="https://twitter.com/yourtwitter" target="_blank" rel="noreferrer" className="text-white hover:text-blue-400 transition duration-300">
            <i className="fab fa-twitter text-4xl"></i>
            <span className="block mt-2">Twitter</span>
          </a>
          <a href="https://github.com/yourgithub" target="_blank" rel="noreferrer" className="text-white hover:text-gray-500 transition duration-300">
            <i className="fab fa-github text-4xl"></i>
            <span className="block mt-2">GitHub</span>
          </a>
        </div>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-2xl opacity-90">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 mb-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 mb-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-4 mb-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition duration-300">
            Send Message
          </button>
        </form>

        <div className="mt-12">
          <p className="text-lg mb-4">Alternatively, schedule a meeting with me directly:</p>
          <a
            href="https://calendar.google.com/calendar/u/0/selfsched?sstoken=yourgooglemeetlink"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:text-blue-800 text-xl mt-4 block"
          >
            Schedule a Google Meet
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
