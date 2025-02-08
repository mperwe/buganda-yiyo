import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <h1 className="text-4xl font-semibold">Welcome to Buganda Youth</h1>
        <p className="mt-4 text-lg">Empowering the youth of Buganda, celebrating our culture and heritage.</p>
        <Link to="/about" className="mt-6 inline-block bg-yellow-500 text-black px-6 py-3 rounded-lg">Learn More</Link>
      </section>

      {/* Events Section */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-semibold mb-10">Upcoming Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Youth Empowerment Summit</h3>
            <p className="mt-2">Join us for a day of workshops and speakers.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Cultural Exchange Day</h3>
            <p className="mt-2">Celebrate Buganda's rich heritage with us!</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Youth Convention</h3>
            <p className="mt-2">A gathering of young leaders from Buganda.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
