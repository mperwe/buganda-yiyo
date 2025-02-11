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
import bug6 from "../assets/bug6.jpg";
import bug7 from "../assets/bug7.jpg";
import bug8 from "../assets/bug8.jpg";
import chairmanImage from "../assets/chairman.jpg"; // Replace with the chairman's image

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
      <section className="py-14 bg-white"> {/* Changed bg-blue-100 to bg-white */}
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8 px-6">
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
            { img: bug6, title: "Youth Empowerment Summit", date: "March 15, 2025", location: "Kampala, Uganda", description: "Join us for leadership workshops and inspiring speakers." },
            { img: bug7, title: "Cultural Exchange Day", date: "April 20, 2025", location: "Mengo Palace, Buganda", description: "Celebrate Buganda's rich heritage with music, dance, and storytelling." },
            { img: bug8, title: "Youth Convention", date: "May 10, 2025", location: "Kabaka's Lake, Kampala", description: "A gathering of young leaders from Buganda to discuss the future." },
          ].map((event, index) => (
            <div
              key={index}
              className="bg-brown p-6 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl border-4 border-brown-500"
            >
              <img
                src={event.img}
                alt={event.title}
                className="w-full h-56 object-cover rounded-lg mb-4 border-2 border-brown-400"
              />
              <h3 className="text-2xl font-semibold text-blue-700">{event.title}</h3>
              <p className="text-md text-gray-500 mt-1">📅 {event.date} | 📍 {event.location}</p>
              <p className="mt-3 text-gray-600">{event.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Message from the Chairman Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Chairman's Image Card */}
            <div className="lg:w-1/2 w-full">
              <img
                src={chairmanImage}
                alt="Chairman"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Chairman's Message Card */}
            <div className="lg:w-1/2 w-full p-8 text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">
                Message the Katikkiro
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                "As we journey together, I encourage each of you to stay committed to empowering the youth of Buganda,
                preserving our rich heritage, and paving the way for a brighter future. We are united in our purpose, 
                and together, we can achieve great things for our community. Our strength lies in the youth, and we must 
                support them in every step of their journey. Let us honor our past, embrace the present, and build a 
                future that reflects our values and vision for Buganda."
              </p>
              <p className="text-lg text-gray-600">— Charles Peter Mayiga, Katikkiro of Buganda</p>

              <div className="mt-8">
                <Link
                  to="/about"
                  className="bg-yellow-500 text-black px-8 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-all duration-300 shadow-lg"
                >
                  View Leadership
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
