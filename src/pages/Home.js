import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bug1 from "../assets/bug1.jpeg";
import bug4 from "../assets/bug4.jpg";
import bug5 from "../assets/bug5.jpeg";
import king from "../assets/King.jpg";

const Home = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000, // 7 seconds per slide
    arrows: true,
  };

  return (
    <div className="bg-blue-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-24 text-center">
        <h1 className="text-6xl font-bold">Welcome to Buganda Youth</h1>
        <p className="mt-6 text-xl max-w-3xl mx-auto">
          Empowering the youth of Buganda, celebrating our culture and heritage.
        </p>
        <Link
          to="/about"
          className="mt-8 inline-block bg-yellow-500 text-black px-10 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-all duration-300"
        >
          Learn More
        </Link>
      </section>

      {/* Image & Slider Section */}
      <section className="py-16 bg-blue-100">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-6 px-6">
          {/* Slightly Smaller Sliding Images */}
          <div className="lg:w-2/3 w-full">
            <Slider {...sliderSettings} className="shadow-xl rounded-xl overflow-hidden">
              {[bug1, bug4, bug5].map((image, index) => (
                <div key={index} className="relative">
                  <img src={image} alt="Cultural Event" className="w-full max-h-[750px] object-cover rounded-lg" />
                  <div className="absolute bottom-0 bg-gradient-to-t from-black/50 to-transparent text-white p-5 w-full text-center">
                    <p className="text-xl font-semibold">Cultural Celebration #{index + 1}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Slightly Bigger Static Image */}
          <div className="lg:w-3/4 w-full relative">
            <img src={king} alt="Youth Gathering" className="w-full max-h-[800px] object-cover rounded-lg shadow-xl" />
            <div className="absolute bottom-0 bg-gradient-to-t from-black/50 to-transparent text-white p-5 w-full text-center">
              <p className="text-xl font-semibold">His Majesty Kabaka Ronald Muwenda Mutebi II</p>
             
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 text-center">
        <h2 className="text-5xl font-bold mb-10 text-gray-800">Upcoming Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
          {[
            { title: "Youth Empowerment Summit", description: "Join us for leadership workshops and inspiring speakers." },
            { title: "Cultural Exchange Day", description: "Celebrate Buganda's rich heritage with music, dance, and storytelling." },
            { title: "Youth Convention", description: "A gathering of young leaders from Buganda to discuss the future." }
          ].map((event, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-3xl font-semibold text-blue-600">{event.title}</h3>
              <p className="mt-4 text-gray-600">{event.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
