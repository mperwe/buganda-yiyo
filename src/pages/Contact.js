import React, { useState } from 'react';
import bug5 from '../assets/bug7.jpg'; // Background image

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <section
      className="relative py-20 text-center bg-cover bg-center mt-24 px-6 md:px-12"
      style={{ backgroundImage: `url(${bug5})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-white max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg mb-10">
          Let’s connect! Reach out for inquiries, partnerships, or feedback.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a href="https://wa.me/yourwhatsapplink" target="_blank" rel="noreferrer" className="px-6 py-3 bg-green-500 rounded-lg text-white text-lg font-semibold hover:bg-green-600 transition duration-300">
            WhatsApp
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noreferrer" className="px-6 py-3 bg-blue-700 rounded-lg text-white text-lg font-semibold hover:bg-blue-800 transition duration-300">
            LinkedIn
          </a>
          <a href="https://twitter.com/yourtwitter" target="_blank" rel="noreferrer" className="px-6 py-3 bg-blue-400 rounded-lg text-white text-lg font-semibold hover:bg-blue-500 transition duration-300">
            Twitter
          </a>
          <a href="https://facebook.com/yourfacebook" target="_blank" rel="noreferrer" className="px-6 py-3 bg-blue-600 rounded-lg text-white text-lg font-semibold hover:bg-blue-700 transition duration-300">
            Facebook
          </a>
          <a href="https://youtube.com/youryoutube" target="_blank" rel="noreferrer" className="px-6 py-3 bg-red-600 rounded-lg text-white text-lg font-semibold hover:bg-red-700 transition duration-300">
            YouTube
          </a>
        </div>
        
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg text-left max-w-2xl mx-auto opacity-95">
          <label className="block mb-4">
            <span className="text-gray-700 font-semibold">Name</span>
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:ring-2 focus:ring-blue-500" required />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700 font-semibold">Email</span>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:ring-2 focus:ring-blue-500" required />
          </label>
          <label className="block mb-6">
            <span className="text-gray-700 font-semibold">Message</span>
            <textarea name="message" value={formData.message} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:ring-2 focus:ring-blue-500" rows="4" required></textarea>
          </label>
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300">
            Send Message
          </button>
        </form>
        
        <div className="mt-8">
          <a
            href="https://calendar.google.com/calendar/u/0/selfsched?sstoken=yourgooglemeetlink"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-300"
          >
            Schedule a Google Meet
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
