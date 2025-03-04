import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronRight } from "lucide-react";
import flag from "../assets/FLAG.png";
import bg from "../assets/bg.jpg";
import Kabaka4 from "../assets/Kabaka4.jpg";
import Kabaka3 from "../assets/Kabaka3.jpg";
import chairmanImage from "../assets/Kabaka.jpeg";
import bug1 from "../assets/bug1.jpeg";
import bug4 from "../assets/bug4.jpg";
import bug5 from "../assets/bug5.jpg";
import bug10 from "../assets/bug10.jpg";
import by5 from "../assets/by5.jpeg";
import by8 from "../assets/by8.jpeg";
import by11 from "../assets/by11.jpeg";
import by12 from "../assets/by12.jpeg";
import by3 from "../assets/by3.jpeg";
import by15 from "../assets/by15.jpeg";
import king1 from "../assets/king1.jpeg"

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
    arrows: false,
  };

  const events = [
    { title: "Kabaka's Birthday Run", date: "April 6, 2025", location: "Kampala", description: "Celebrating Kabaka's 70th Birthday", img: king1 },
    { title: "Okulambura Ssezibwa", date: "May 24, 2025", location: "Ssezibwa Falls", description: "Escape the city and immerse yourself in the beauty, culture and legend of Ssezibwa Falls.", img: by15 },
    { title: "Bulungi Bwansi", date: "June 30, 2025", location: "Sebwana Nursery School, Busiro", description: "Bulungi Bwansi", img: by11 },
    { title: "Bugada Yiyo Buganda Yange - Day", date: "October 3, 2025", location: "BHTB, Kampala-Kyaddondo", description: "Bugada Yiyo Buganda Yange - Day", img: by3 },
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative w-full h-screen">
        <Slider {...sliderSettings} className="absolute top-0 left-0 w-full h-full">
          {[flag, bg, Kabaka4, Kabaka3, bug10, bug1, bug4, bug5, by5, by8, by11, by12, king1].map((image, index) => (
            <div key={index} className="w-full h-screen flex justify-center items-center relative">
              <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black bg-opacity-60 p-6">
                <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-wide">
                  Tukwanirizza ku Buganda Yiyo Buganda Yange
                </h1>
                <p className="mt-4 text-lg md:text-2xl font-light">
                Ffenna Wamu, Tusobola Okukuuma Buganda, Ensi Yaffe
                </p>
                <Link to="/about" className="mt-6 px-8 py-3 bg-yellow-500 text-black rounded-full text-lg md:text-xl font-semibold hover:bg-yellow-600 transition-all flex items-center justify-center space-x-2 transform hover:scale-105">
                  <span>Learn More</span>
                  <ChevronRight size={24} />
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-4xl font-extrabold text-blue-900 mb-12">Upcoming Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 max-w-7xl mx-auto">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 border border-gray-200">
              <img src={event.img} alt={event.title} className="w-full h-56 object-cover" />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-blue-700">{event.title}</h3>
                <p className="text-sm text-gray-600 mt-1">📅 {event.date} | 📍 {event.location}</p>
                <p className="text-gray-700 text-sm mt-2 leading-relaxed">{event.description}</p>
                <Link to="/events" className="mt-3 inline-block text-blue-500 hover:text-blue-700 font-semibold">Read More</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Message from the King */}
      <section className="py-20 bg-gray-900 text-white text-center">
        <h2 className="text-4xl font-extrabold mb-8">OBUBAKA BWA SSAABASAJJA KABAKA </h2>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 p-6 bg-gray-800 rounded-xl shadow-lg border-4 border-white">
          <img src={chairmanImage} alt="Chairman" className="w-full md:w-[450px] h-[350px] object-cover rounded-lg shadow-2xl border-4 border-white" />
          <div className="text-left">
            <p className="text-lg md:text-xl font-light leading-relaxed">
            Enkozesa y'ebyo ebitubulirirwa mu bigambo ne mu mawulire, oba amagezi agatuwebwa ne Tekinologiya munsangi zinno byonna bikulu nnyo.  Kyokka tussaana okubikwata n'obwegendereza. Bwetubyeyambisa obulungi tusobola okufunamu enkulakulana, kyokka bwetubikozesa obubi bisobola okutuviirako obulabe n'okwenyika ffeka muddubi. 
            Abalabe ba Buganda bangi beyambisiza nnyo emitimbagano okutyobola Ekitiibwa kya Buganda. Tufube nnyo obutabawa mwaganya kubanga waliwo ate abamu muffe ABAGANDA abaseesa mwebyo abalabe bye batambuza
            </p>
            <p className="mt-4 text-lg md:text-xl font-bold">Ssabasajja Kabaka Ronald Muwenda Mutebi II</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;