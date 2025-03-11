import React from "react";
import bug9 from "../assets/bug9.jpg";
import by15 from "../assets/by15.jpeg";
import by2 from "../assets/by2.jpeg"
import by8 from "../assets/by8.jpeg";
import by12 from "../assets/by12.jpeg";
import by3 from "../assets/by3.jpeg";
import by11 from "../assets/by11.jpeg";
import bug3 from "../assets/bug3.jpg";
import by21 from "../assets/by21.jpeg"

import king1 from "../assets/king1.jpeg";

const events = [
  { id: 1, title: "Kabaka's BirthDay Run", date: "April 6, 2025", description: "Join the 12th Kabaka Birthday Run on Sunday, April 6, 2025, at Lubiri, Mengo. This year's run supports the fight against HIV/AIDS.", image: by12 },
  { id: 2, title: "Okulambula Ssezibwa", date: "May 24, 2025", description: "Ditch the city chaos and dive into the magic of Ssezibwa Falls! Experience the rich Buganda heritage, breathtaking waterfalls, and cultural storytelling.", image: by15 },
  { id: 3, title: "Bulungi Bwansi", date: "June 30, 2025", description: "Join Buganda Yiyo Buganda Yange as we provide affordable education, clean water, and community empowerment projects to improve our kingdom.", image: by2 },
  { id: 4, title: "Buganda Yiyo Buganda Yange Day", date: "October 3, 2025", description: "A dynamic gathering for BYBY patriots to learn, connect, and share strategies for the continued development of Buganda and its people.", image: by21 },
  { id: 5, title: "Oluwalo lwaffe 2025", date: "November, 2025", description: "Oluwalo lwaffe 2025, a moment to contribute towards the cultural and economic empowerment of Buganda through collective efforts.", image: by8 },
  { id: 6, title: "Olukiiko lwa KANSO (AGM)", date: "December, 2025", description: "Annual General Meeting for KANSO, a crucial event where key decisions on Buganda development, culture, and governance are made.", image: bug3 },
  { id: 7, title: "Buganda Youth Day", date: "December, 2025", description: "Buganda Youth Day celebrations, a platform to empower, educate, and engage the youth in the progress of Buganda’s future.", image: by11 },
  { id: 8, title: "End of Year Celebration", date: "December, 2025", description: "End-of-year gathering and celebration for the Buganda community, featuring cultural performances, speeches, and a reflection on the year's achievements.", image: by3 },
];

const Events = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <nav className="bg-gray-900 p-5 shadow-lg">
        <div className="container mx-auto flex justify-between items-center text-white">
          <h1 className="text-2xl font-bold">Buganda Events</h1>
          <ul className="flex space-x-6 text-sm">
            <li><a href="#events" className="hover:text-gray-400">Events</a></li>
            <li><a href="#testimonials" className="hover:text-gray-400">Testimonials</a></li>
          </ul>
        </div>
      </nav>

      {/* Events Section */}
      <section className="relative py-16 px-6 text-center" id="events">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${bug9})` }}></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold mb-12 text-gray-800">Upcoming Events</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {events.map((event) => (
              <div key={event.id} className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center transition-all transform hover:scale-105 hover:shadow-2xl">
                {/* Square Image */}
                <img src={event.image} alt={event.title} className="w-full h-64 object-cover border-4 border-gray-300 shadow-md" />
                
                {/* Event Info */}
                <div className="text-center mt-4">
                  <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
                  <p className="text-gray-600 mt-1 text-sm">{event.date}</p>
                  <p className="mt-2 text-gray-700 text-sm">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6 text-center bg-gray-100" id="testimonials">
        <h2 className="text-4xl font-bold mb-8 text-gray-800">What People Are Saying</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-gray-800">
            <p className="italic">"Buganda Yiyo, Buganda Yanga is a great initiative to unite Baganda in preserving and celebrating our rich culture and heritage."</p>
            <p className="font-semibold mt-4 text-gray-800">- Nalugwa Lilian</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-gray-800">
            <p className="italic">"This association will strengthen our identity, values, and traditions, especially for those in the diaspora."</p>
            <p className="font-semibold mt-4 text-gray-800">- Ssentongo Micheal</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-gray-800">
            <p className="italic">"A brilliant way to pass down Buganda’s customs to future generations while fostering unity among Baganda worldwide."</p>
            <p className="font-semibold mt-4 text-gray-800">- Frank Kyambadde</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
