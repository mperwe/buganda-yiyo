import React from "react";
import bug9 from "../assets/bug9.jpg";
import bug1 from "../assets/bug1.jpeg";
import bug2 from "../assets/bug2.jpg";
import bug3 from "../assets/bug3.jpg";
import bug4 from "../assets/bug4.jpg";
import bug5 from "../assets/bug5.jpg";
import bug6 from "../assets/bug6.jpg";
import bug7 from "../assets/bug7.jpg";
import bug8 from "../assets/bug8.jpg";

const events = [
  { id: 1, title: "Youth Empowerment Summit", date: "March 15, 2025", description: "A summit focused on inspiring and educating young leaders.", image: bug1 },
  { id: 2, title: "Cultural Exchange Program", date: "June 10, 2025", description: "Bridging cultures through workshops and networking.", image: bug2 },
  { id: 3, title: "Youth Convention", date: "October 5, 2025", description: "A platform for discussing Buganda youth’s future.", image: bug3 },
  { id: 4, title: "Leadership Workshop", date: "July 22, 2025", description: "Training young leaders for community transformation.", image: bug4 },
  { id: 5, title: "Tech & Innovation Expo", date: "November 8, 2025", description: "Showcasing tech solutions for African development.", image: bug5 },
  { id: 6, title: "Business Networking Event", date: "December 20, 2025", description: "Connecting entrepreneurs for business growth.", image: bug6 },
  { id: 7, title: "Cultural Heritage Festival", date: "April 12, 2025", description: "Celebrating Buganda’s rich traditions and culture.", image: bug7 },
  { id: 8, title: "Health & Wellness Fair", date: "May 30, 2025", description: "Promoting well-being through workshops and screenings.", image: bug8 },
];

const Events = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center text-white">
          <h1 className="text-2xl font-bold">Buganda Events</h1>
          <ul className="flex space-x-6">
            <li><a href="#events" className="hover:text-gray-400">Events</a></li>
            <li><a href="#testimonials" className="hover:text-gray-400">Testimonials</a></li>
          </ul>
        </div>
      </nav>

      {/* Events Section */}
      <section className="relative py-16 px-6 text-center bg-gray-100" id="events">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url(${bug9})` }}></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-semibold mb-8 text-gray-800">Upcoming Events</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <div key={event.id} className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center space-y-4 transition-transform transform hover:scale-105">
                {/* Circular Image */}
                <img src={event.image} alt={event.title} className="w-24 h-24 object-cover rounded-full" />

                {/* Event Info */}
                <div className="text-left">
                  <h3 className="text-lg font-semibold">{event.title}</h3>
                  <p className="text-gray-600">{event.date}</p>
                  <p className="mt-2 text-sm">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6 text-center bg-gray-100" id="testimonials">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">What People Are Saying</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <p className="italic">"The Youth Summit was life-changing! Learned a lot and met great people."</p>
            <p className="font-semibold mt-4">- John Doe</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <p className="italic">"The cultural exchange expanded my perspective. I loved the experience!"</p>
            <p className="font-semibold mt-4">- Jane Smith</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <p className="italic">"The Tech Expo introduced me to amazing innovations!"</p>
            <p className="font-semibold mt-4">- Alex Mwangi</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
