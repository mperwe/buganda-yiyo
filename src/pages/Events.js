import React from 'react';

const Events = () => {
  return (
    <section className="py-20 text-center">
      <h1 className="text-4xl font-semibold mb-6">Our Events</h1>
      <p className="max-w-3xl mx-auto text-lg mb-8">
        Our events focus on empowering the youth through education, culture, and leadership.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Youth Empowerment Summit</h3>
          <p className="mt-2">An event that inspires and educates youth leaders.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Cultural Exchange</h3>
          <p className="mt-2">Promoting cross-cultural understanding through workshops.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Youth Convention</h3>
          <p className="mt-2">A platform to discuss the future of Buganda’s youth.</p>
        </div>
      </div>
    </section>
  );
};

export default Events;
