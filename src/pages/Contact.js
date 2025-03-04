import React, { useState } from 'react';
import bug5 from '../assets/bug7.jpg'; // Background image
import { FaWhatsapp, FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa'; // Importing icons

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formDetails = {
      to: 'bugadayiyobugandayange@gmail.com',
      subject: `Contact Form Submission from ${formData.name}`,
      body: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
    };

    // Create a mailto link to send email
    const mailtoLink = `mailto:${formDetails.to}?subject=${encodeURIComponent(formDetails.subject)}&body=${encodeURIComponent(formDetails.body)}`;

    window.location.href = mailtoLink;

    console.log('Form Submitted:', formData); // For logging purposes
  };

  return (
    <section
      className="relative py-20 text-center bg-cover bg-center mt-24 px-6 md:px-12"
      style={{ backgroundImage: `url(${bug5})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-white max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg mb-12">
          We'd love to hear from you! Whether you have a question, partnership opportunity, or just want to say hello, feel free to get in touch.
        </p>

        {/* The form */}
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg text-left max-w-2xl mx-auto opacity-95">
          <h2 className="text-2xl font-semibold mb-6">Send Us A Message</h2>

          <label className="block mb-4">
            <span className="text-gray-700 font-semibold">Your Name</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg mt-2 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your full name"
              required
            />
          </label>

          <label className="block mb-4">
            <span className="text-gray-700 font-semibold">Email Address</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg mt-2 focus:ring-2 focus:ring-blue-500"
              placeholder="Your email address"
              required
            />
          </label>

          <label className="block mb-6">
            <span className="text-gray-700 font-semibold">Your Message</span>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg mt-2 focus:ring-2 focus:ring-blue-500 resize-none text-black"
              rows="6"
              placeholder="Write your message here"
              required
            ></textarea>
          </label>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Google Meet Link */}
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

        {/* Social Media Links */}
        <div className="flex justify-center gap-8 mt-8">
          <a
            href="https://chat.whatsapp.com/CfdHJ5WHC3yHsmr5tkObsH"
            target="_blank"
            rel="noreferrer"
            className="text-green-500 text-3xl hover:text-green-600 transition duration-300"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://twitter.com/i/communities/1855912401536713035"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 text-3xl hover:text-blue-500 transition duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.facebook.com/NyaffeBuganda"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 text-3xl hover:text-blue-700 transition duration-300"
          >
            <FaFacebook />
          </a>
          <a
            href="https://youtube.com/@bugandayiyobugandayange?si=cB3nbNygItwYPfmN"
            target="_blank"
            rel="noreferrer"
            className="text-red-600 text-3xl hover:text-red-700 transition duration-300"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
