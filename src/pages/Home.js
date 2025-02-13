import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronRight } from "lucide-react";
import Kabaka4 from "../assets/Kabaka4.jpg";
import Kabaka3 from "../assets/Kabaka3.jpeg";
import chairmanImage from "../assets/chairman.jpg";
import bug1 from "../assets/bug1.jpeg";
import bug4 from "../assets/bug4.jpg";
import bug5 from "../assets/bug5.jpg";
import bug9 from "../assets/bug9.jpg";
import bug7 from "../assets/bug7.jpg";
import bug8 from "../assets/bug8.jpg";
import bug10 from "../assets/bug10.jpg";

const Home = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: "linear",
    arrows: true,
  };

  // Sample events data
  const events = [
    {
      title: "Buganda Culture Festival",
      date: "March 15, 2025",
      location: "Kampala, Uganda",
      description: "Join us for a celebration of Buganda's rich culture, featuring music, food, and traditional dance performances.",
      img: bug1,
    },
    {
      title: "Youth Empowerment Conference",
      date: "April 10, 2025",
      location: "Entebbe, Uganda",
      description: "A conference to empower the youth of Buganda with skills, knowledge, and resources for personal and community development.",
      img: bug4,
    },
    {
      title: "Buganda Independence Day Celebration",
      date: "October 9, 2025",
      location: "Mengo, Uganda",
      description: "A grand celebration of Buganda's independence with speeches, music, and community activities.",
      img: bug5,
    },
    {
      title: "Youth Cultural Expo",
      date: "June 12, 2025",
      location: "Mbale, Uganda",
      description: "An expo to celebrate the cultural diversity within the Buganda community and to foster youth participation in preserving traditions.",
      img: bug9,
    },
    {
      title: "Buganda Sports Championship",
      date: "August 22, 2025",
      location: "Kampala, Uganda",
      description: "A regional sports championship bringing together young athletes from all over Buganda for friendly competition and unity.",
      img: bug7,
    },
    {
      title: "Traditional Music and Dance Festival",
      date: "December 14, 2025",
      location: "Mengo, Uganda",
      description: "A festival dedicated to traditional music and dance performances showcasing Buganda's vibrant artistic expressions.",
      img: bug8,
    },
  ];

  return (
    <div className="bg-blue-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[75vh] pt-16">
        <Slider {...sliderSettings} className="absolute top-0 left-0 w-full h-full">
          {[Kabaka4, Kabaka3, bug10, bug1, bug4, bug5, bug9, bug7, bug8]
            .filter(Boolean) // Ensures no undefined values
            .map((image, index) => (
              <div key={index} className="w-full h-[75vh] flex justify-center items-center relative">
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover border-8 border-blue-900"  // Dark blue border
                />
                <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white text-center">
                  <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                    Tukwanirizza ku Buganda Yiyo Buganda Yange
                  </h1>
                  <p className="mt-6 text-lg md:text-xl">
                    Empowering the youth of Buganda, celebrating our culture and heritage.
                  </p>
                  <Link
                    to="/about"
                    className="mt-6 inline-flex items-center gap-2 bg-yellow-500 text-black px-8 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-100 transition-all duration-300 shadow-lg"
                  >
                    Learn More <ChevronRight size={20} />
                  </Link>
                </div>
              </div>
            ))}
        </Slider>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-10 text-gray-800">Upcoming Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl border-2 border-gray-300 hover:border-blue-500 duration-300"
            >
              <img
                src={event.img}
                alt={event.title}
                className="w-full h-64 object-cover rounded-lg mb-6 border-4 border-gray-300 transition-all duration-500 ease-in-out hover:scale-105"
              />
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">{event.title}</h3>
              <p className="text-sm text-gray-600 mb-4">
                📅 {event.date} | 📍 {event.location}
              </p>
              <p className="text-lg text-gray-700 mb-4">{event.description}</p>
              <Link
                to="/events"
                className="text-blue-500 hover:text-blue-700 font-semibold transition duration-200"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Chairman's Message */}
      <section className="py-20 bg-gray-900 text-white text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-10">Katikkiro’s Message</h2>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 p-10 bg-gray-800 rounded-xl shadow-lg border-4 border-white-500">
          <img
            src={chairmanImage}
            alt="Chairman"
            className="w-full md:w-[600px] h-[500px] object-contain rounded-xl shadow-2xl"
          />
          <div className="text-left">
            <p className="text-3xl font-light leading-snug">
              "Together, we build a stronger Buganda. Our culture, history, and values define us.
              The youth hold the key to a brighter future. Let’s unite, innovate, and create opportunities
              for the next generation."
            </p>
            <p className="mt-6 text-2xl font-bold text-white-400">- Charles Peter Mayiga</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
