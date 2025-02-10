import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronRight } from "lucide-react"; // Icon for hero button
import bug1 from "../assets/bug1.jpeg";
import bug4 from "../assets/bug4.jpg";
import bug5 from "../assets/bug5.jpeg";
import king from "../assets/King.jpg";

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
      <section className="bg-blue-800 text-white py-16 md:py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Welcome to Buganda Youth
          </h1>
          <p className="mt-4 md:mt-6 text-lg md:text-xl">
            Empowering the youth of Buganda, celebrating our culture and heritage.
          </p>
          <Link
            to="/about"
            className="mt-6 inline-flex items-center gap-2 bg-yellow-500 text-black px-8 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-all duration-300 shadow-lg"
          >
            Learn More <ChevronRight size={20} />
          </Link>
        </div>
      </section>

      {/* Image & Slider Section */}
      <section className="py-14 bg-blue-100">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8 px-6">
          {/* Sliding Images (Slightly Smaller) */}
          <div className="lg:w-2/3 w-full">
            <Slider {...sliderSettings} className="shadow-2xl rounded-xl overflow-hidden">
              {[bug1, bug4, bug5].map((image, index) => (
                <div key={index} className="relative">
                  <img
                    src={image}
                    alt={`Cultural Event ${index + 1}`}
                    className="w-full max-h-[700px] object-cover rounded-lg shadow-lg"
                  />
                  <div className="absolute bottom-0 bg-gradient-to-t from-black/60 to-transparent text-white p-5 w-full text-center">
                    <p className="text-lg font-semibold">Cultural Celebration #{index + 1}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Static Image (Slightly Bigger) */}
          <div className="lg:w-3/4 w-full relative">
            <img
              src={king}
              alt="Youth Gathering"
              className="w-full max-h-[750px] object-cover rounded-lg shadow-2xl"
            />
            <div className="absolute bottom-0 bg-gradient-to-t from-black/60 to-transparent text-white p-5 w-full text-center">
              <p className="text-xl font-semibold">His Majesty Kabaka Ronald Muwenda Mutebi II</p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">Upcoming Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
          {[
            { title: "Youth Empowerment Summit", description: "Join us for leadership workshops and inspiring speakers." },
            { title: "Cultural Exchange Day", description: "Celebrate Buganda's rich heritage with music, dance, and storytelling." },
            { title: "Youth Convention", description: "A gathering of young leaders from Buganda to discuss the future." },
          ].map((event, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl"
            >
              <h3 className="text-2xl font-semibold text-blue-700">{event.title}</h3>
              <p className="mt-3 text-gray-600">{event.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
