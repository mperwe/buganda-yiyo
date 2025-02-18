import React, { useEffect, useState } from "react";
import { gapi } from "gapi-script";
import bug9 from "../assets/bug9.jpg";
import bug1 from "../assets/bug1.jpeg";
import bug2 from "../assets/bug2.jpg";
import bug3 from "../assets/bug3.jpg";
import bug4 from "../assets/bug4.jpg";
import bug5 from "../assets/bug5.jpg";
import bug6 from "../assets/bug6.jpg";
import bug7 from "../assets/bug7.jpg";
import bug8 from "../assets/bug8.jpg";

// Constants
const CALENDAR_ID = "bugadayiyobugandayange@gmail.com";
const API_KEY = "YOUR_GOOGLE_API_KEY"; // Replace with your actual API key

const events = [
  {
    id: 1,
    title: "Youth Empowerment Summit",
    date: "March 15, 2025",
    description: "A summit focused on inspiring and educating young leaders.",
    image: bug1,
  },
  {
    id: 2,
    title: "Cultural Exchange Program",
    date: "June 10, 2025",
    description: "Bridging cultures through workshops and networking.",
    image: bug2,
  },
  {
    id: 3,
    title: "Youth Convention",
    date: "October 5, 2025",
    description: "A platform for discussing Buganda youth’s future.",
    image: bug3,
  },
  {
    id: 4,
    title: "Leadership Workshop",
    date: "July 22, 2025",
    description: "Training young leaders for community transformation.",
    image: bug4,
  },
  {
    id: 5,
    title: "Tech & Innovation Expo",
    date: "November 8, 2025",
    description: "Showcasing tech solutions for African development.",
    image: bug5,
  },
  {
    id: 6,
    title: "Business Networking Event",
    date: "December 20, 2025",
    description: "Connecting entrepreneurs for business growth.",
    image: bug6,
  },
];

const testimonials = [
  {
    name: "John Doe",
    feedback: "The Youth Summit was life-changing! Learned a lot and met great people.",
  },
  {
    name: "Jane Smith",
    feedback: "The cultural exchange expanded my perspective. I loved the experience!",
  },
  {
    name: "John Doe",
    feedback: "The Youth Summit was life-changing! Learned a lot and met great people.",
  },
  {
    name: "Jane Smith",
    feedback: "The cultural exchange expanded my perspective. I loved the experience!",
  },{
    name: "John Doe",
    feedback: "The Youth Summit was life-changing! Learned a lot and met great people.",
  },
  {
    name: "Jane Smith",
    feedback: "The cultural exchange expanded my perspective. I loved the experience!",
  },
];

const Events = () => {
  const [googleEvents, setGoogleEvents] = useState([]);

  useEffect(() => {
    function fetchGoogleEvents() {
      gapi.load("client", () => {
        gapi.client
          .init({
            apiKey: API_KEY,
            discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
          })
          .then(() => {
            return gapi.client.calendar.events.list({
              calendarId: CALENDAR_ID,
              timeMin: new Date().toISOString(),
              showDeleted: false,
              singleEvents: true,
              orderBy: "startTime",
            });
          })
          .then((response) => {
            setGoogleEvents(response.result.items || []);
          })
          .catch((error) => console.error("Error fetching calendar events:", error));
      });
    }

    fetchGoogleEvents();
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center text-white">
          <h1 className="text-2xl font-bold">Buganda Events</h1>
          <ul className="flex space-x-6">
            <li><a href="#events" className="hover:text-gray-400">Events</a></li>
            <li><a href="#testimonials" className="hover:text-gray-400">Testimonials</a></li>
            <li><a href="#google-calendar" className="hover:text-gray-400">Google Calendar</a></li>
          </ul>
        </div>
      </nav>

      <section className="relative py-16 px-6 text-center bg-gray-100" id="events">
        {/* Background Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${bug9})` }}
        ></div>

        <div className="relative z-10">
          <h1 className="text-4xl font-semibold mb-8 text-gray-800">Upcoming Events</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <div key={event.id} className="bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-64 object-cover rounded-md"
                />
                <h3 className="text-lg font-semibold mt-3">{event.title}</h3>
                <p className="text-gray-600">{event.date}</p>
                <p className="mt-2 text-sm">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 px-6 text-center bg-gray-100" id="google-calendar">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Google Calendar Events</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {googleEvents.length > 0 ? (
            googleEvents.map((event, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                <h3 className="text-lg font-semibold">{event.summary}</h3>
                <p className="text-gray-600">
                  {new Date(event.start.dateTime || event.start.date).toDateString()}
                </p>
                <p className="mt-2 text-sm">{event.description || "No description available"}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-800">No upcoming events found in Google Calendar.</p>
          )}
        </div>
      </section>

      <section className="py-16 px-6 text-center bg-gray-100" id="testimonials">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">What People Are Saying</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <p className="italic">"{testimonial.feedback}"</p>
              <p className="font-semibold mt-4">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Events;
