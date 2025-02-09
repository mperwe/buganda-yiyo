import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bug1 from "../assets/bug1.jpeg";
import bug4 from "../assets/bug4.jpg";
import bug5 from "../assets/bug5.jpeg";
import bug6 from "../assets/bug6.jpg";

const Home = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000, // Adjusted for 7 seconds per slide
    arrows: true,
  };

  return (
    <div className="bg-blue-50 min-h-screen"> 
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <h1 className="text-5xl font-bold">Welcome to Buganda Youth</h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Empowering the youth of Buganda, celebrating our culture and heritage.
        </p>
        <Link
          to="/about"
          className="mt-6 inline-block bg-yellow-500 text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-all duration-300"
        >
          Learn More
        </Link>
      </section>

      {/* Image Section with Background */}
      <section className="py-20 bg-blue-100">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 px-6">
          {/* Sliding Images on the Left */}
          <div className="lg:w-1/2 w-full">
            <Slider {...sliderSettings} className="shadow-xl rounded-xl overflow-hidden">
              {[bug1, bug4, bug5].map((image, index) => (
                <div key={index} className="relative">
                  <img src={image} alt="Cultural Event" className="w-full h-[550px] object-cover opacity-90" />
                  <div className="absolute bottom-0 bg-white bg-opacity-75 text-gray-900 p-4 w-full text-center">
                    <p className="text-lg font-semibold">Cultural Celebration #{index + 1}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Static Image on the Right with Caption */}
          <div className="lg:w-1/2 w-full relative">
            <img src={bug6} alt="Youth Gathering" className="w-full h-[550px] object-cover opacity-90 shadow-xl rounded-xl" />
            <div className="absolute bottom-0 bg-white bg-opacity-75 text-gray-900 p-4 w-full text-center">
              <p className="text-lg font-semibold">Buganda Youth Community Gathering</p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">Upcoming Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-6">
          {[
            { title: "Youth Empowerment Summit", description: "Join us for leadership workshops and inspiring speakers." },
            { title: "Cultural Exchange Day", description: "Celebrate Buganda's rich heritage with music, dance, and storytelling." },
            { title: "Youth Convention", description: "A gathering of young leaders from Buganda to discuss the future." }
          ].map((event, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-blue-600">{event.title}</h3>
              <p className="mt-3 text-gray-600">{event.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
