import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronRight } from "lucide-react";
import bug1 from "../assets/bug1.jpeg";
import bug4 from "../assets/bug4.jpg";
import bug5 from "../assets/bug5.jpeg";
import king from "../assets/King.jpg";
import bug6 from "../assets/bug6.jpg";
import bug7 from "../assets/bug7.jpg";
import bug8 from "../assets/bug8.jpg";
import chairmanImage from "../assets/chairman.jpg";

const Home = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  };

  return (
    <div className="bg-blue-50 min-h-screen">
      {/* Hero Section */}
      <section className="text-white pt-32 pb-16 md:pb-24 text-center" style={{ backgroundColor: '#00264D' }}>
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mt-6">
            Tukwanirizza ku Buganda Yiyo Buganda Yange
          </h1>
          <p className="mt-6 md:mt-8 text-lg md:text-xl">
            Empowering the youth of Buganda, celebrating our culture and heritage.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 bg-yellow-500 text-black px-8 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-all duration-300 shadow-lg"
          >
            Learn More <ChevronRight size={20} />
          </Link>
        </div>
      </section>

      {/* Image & Slider Section */}
      <section className="py-14 bg-white">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8 px-6">
          <div className="lg:w-2/3 w-full">
            <Slider {...sliderSettings} className="shadow-2xl rounded-xl overflow-hidden">
              {[bug1, bug4, bug5].map((image, index) => (
                <div key={index} className="relative w-full h-[700px]">
                  <img
                    src={image}
                    alt={`Cultural Event ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                  <div className="absolute bottom-0 bg-gradient-to-t from-black/60 to-transparent text-white p-5 w-full text-center">
                    <p className="text-lg font-semibold">Cultural Celebration #{index + 1}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="lg:w-3/4 w-full relative">
            <img
              src={king}
              alt="Youth Gathering"
              className="w-full h-[700px] object-cover rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 bg-gradient-to-t from-black/60 to-transparent text-white p-5 w-full text-center">
              <p className="text-xl"> Kabaka Ronald Muwenda Mutebi II</p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-10 text-gray-800">Upcoming Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {[ 
            { img: bug6, title: "Youth Empowerment Summit", date: "March 15, 2025", location: "Kampala, Uganda", description: "Join us for leadership workshops and inspiring speakers." },
            { img: bug7, title: "Cultural Exchange Day", date: "April 20, 2025", location: "Mengo Palace, Buganda", description: "Celebrate Buganda's rich heritage with music, dance, and storytelling." },
            { img: bug8, title: "Youth Convention", date: "May 10, 2025", location: "Kabaka's Lake, Kampala", description: "A gathering of young leaders from Buganda to discuss the future." },
            { img: bug6, title: "Buganda Heritage Exhibition", date: "June 12, 2025", location: "Buganda Kingdom", description: "Discover the rich artifacts and history of Buganda's culture." },
            { img: bug7, title: "Music & Dance Festival", date: "July 20, 2025", location: "Kampala, Uganda", description: "Join us for an exciting festival celebrating Buganda's musical heritage." },
            { img: bug8, title: "Traditional Foods Festival", date: "August 10, 2025", location: "Buganda Region", description: "Experience the flavors of Buganda through its traditional dishes." },
          ].map((event, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl border-2 border-gray-300 hover:border-blue-500 duration-300"
            >
              <img
                src={event.img}
                alt={event.title}
                className="w-full h-56 object-cover rounded-lg mb-6 border-2 border-gray-200"
              />
              <h3 className="text-2xl font-semibold text-blue-700">{event.title}</h3>
              <p className="text-sm text-gray-600 mt-2">📅 {event.date} | 📍 {event.location}</p>
              <p className="mt-4 text-gray-700 text-lg">{event.description}</p>
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
            className="w-full md:w-[600px] h-[500px] object-cover rounded-xl shadow-2xl"
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
