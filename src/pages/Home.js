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

  return (
    <div className="bg-blue-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[100vh] pt-16">
        <Slider {...sliderSettings} className="absolute top-0 left-0 w-full h-full">
          {[Kabaka4, Kabaka3, bug10, bug1, bug4, bug5, bug9, bug7, bug8]
            .filter(Boolean) // Ensures no undefined values
            .map((image, index) => (
              <div key={index} className="w-full h-[100vh] flex justify-center items-center relative">
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
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
          {[
            {
              img: bug9,
              title: "Youth Empowerment Summit",
              date: "March 15, 2025",
              location: "Kampala, Uganda",
              description: "Join us for leadership workshops and inspiring speakers.",
            },
            {
              img: bug7,
              title: "Cultural Exchange Day",
              date: "April 20, 2025",
              location: "Mengo Palace, Buganda",
              description: "Celebrate Buganda's rich heritage with music, dance, and storytelling.",
            },
            {
              img: bug8,
              title: "Youth Convention",
              date: "May 10, 2025",
              location: "Kabaka's Lake, Kampala",
              description: "A gathering of young leaders from Buganda to discuss the future.",
            },
            {
              img: bug9,
              title: "Buganda Heritage Exhibition",
              date: "June 12, 2025",
              location: "Buganda Kingdom",
              description: "Discover the rich artifacts and history of Buganda's culture.",
            },
            {
              img: bug7,
              title: "Music & Dance Festival",
              date: "July 20, 2025",
              location: "Kampala, Uganda",
              description: "Join us for an exciting festival celebrating Buganda's musical heritage.",
            },
            {
              img: bug8,
              title: "Traditional Foods Festival",
              date: "August 10, 2025",
              location: "Buganda Region",
              description: "Experience the flavors of Buganda through its traditional dishes.",
            },
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
              <p className="text-sm text-gray-600 mt-2">
                📅 {event.date} | 📍 {event.location}
              </p>
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
