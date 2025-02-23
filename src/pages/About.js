import React from "react";
import bg from "../assets/bug15.jpg";

const leaders = [
  { name: "Munaawa Dan", position: "Ssentebe", image: "Chairman.jpeg" },
  { name: "Nsubuga Najib", position: "Mumyuka Ssentebe", image: "Vice.jpeg" },
  { name: "Kulumba Dickson", position: "Omukubiriza", image: "speaker.jpeg" },
  { name: "Mirro Shafik", position: "Muwandisi", image: "secretary.jpeg" },
  { name: "Ssemakula Wycliffe", position: "Akulira ebya Tekinologiya", image: "ict.jpeg" },
  { name: "Namulwana H Victoria", position: "Hospitality", image: "hospitality.jpeg" },
  { name: "Ssentongo Micheal", position: "Diaspora", image: "diaspora.jpg" },
  { name: "Gabriel C Buule", position: "Mawulire", image: "buule.jpg" },
  { name: "Lunanika Sharif", position: "Welfare", image: "welfare.jpeg" },
  { name: "Namukangula Keith", position: "Member", image: "keith.jpg" },
  { name: "Galiwango B Musota", position: "Member", image: "bemba.jpg" },
  { name: "Ndagire Christine", position: "Omuwanika", image: "treasurer.jpeg" },
  { name: "Twagala Ssekitooleko", position: "Enkulakulana", image: "twagala.jpg" },
  { name: "Simon Ssenkayi", position: "Muwabuzi", image: "advisor.jpeg" },
  { name: "Nalugwa Lilina", position: "Amyuka owa Tekinologiya", image: "ict2.jpeg" },
  { name: "Ssebunya Hamzah ", position: "Member", image: "hamza.jpeg" },
];

const messages = [
  { title: "Chairman's Message", content: "We are a united force driving positive change within the Buganda community. Our youth are the future leaders, and together, we can make a lasting impact on our heritage and society." },
  { title: "Treasurer's Message", content: "Through careful financial planning and stewardship, we ensure that the resources of Buganda Youth are used effectively to support the programs that empower our young people." },
  { title: "Advisor's Message", content: "It is an honor to guide and mentor the talented youth of Buganda. Together, we will continue to build a legacy of leadership, education, and community development." },
];

const chairmanImage = require("../assets/mayiga.jpg");
const newKatikkiroImage = require("../assets/Robert.jpeg");

const About = () => {
  return (
    <section
      className="bg-cover bg-center pt-32 pb-16 px-6 relative"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="max-w-7xl mx-auto relative">
        <h1 className="text-5xl font-extrabold text-center text-white mb-8">
          About Buganda Yiyo Buganda Yange
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-white mb-12 text-center leading-relaxed">
          Buganda Yiyo Buganda Yange (BYBY) is a cultural and social platform that unites young people from Buganda
          to share knowledge, celebrate their heritage, and engage in community-driven initiatives.
        </p>

        {/* Leadership Section */}
        <div className="bg-white py-16 px-6 rounded-lg shadow-lg mb-16">
          <h2 className="text-4xl font-semibold text-gray-800 text-center mb-12">Meet Our Leadership</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {leaders.map((leader, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg text-center overflow-hidden transition-all transform hover:scale-105 hover:shadow-2xl"
              >
                <div className="w-36 h-36 mx-auto bg-gray-100 rounded-full overflow-hidden">
                  <img
                    src={require(`../assets/${leader.image}`)}
                    alt={leader.name}
                    className="object-cover w-full h-full opacity-80 transition-opacity duration-300 ease-in-out hover:opacity-100"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">{leader.name}</h3>
                  <p className="text-gray-500 text-sm">{leader.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Messages Section */}
        <div className="text-center mb-16">
          <h2 className="text-6xl font-semibold text-white mb-8">Messages from Our Leaders</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {messages.map((msg, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md text-left border-l-4 border-blue-500 transition-all transform hover:scale-105 hover:shadow-xl"
              >
                <h3 className="font-semibold text-xl text-gray-800 mb-4">{msg.title}</h3>
                <p className="text-gray-700 leading-relaxed">{msg.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Katikkiro’s Message Section */}
        <section className="py-8 bg-gray-900 text-white text-center">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-8">Messages</h2>
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center gap-8 p-12 bg-gray-800 rounded-xl shadow-xl">
            <img src={chairmanImage} alt="Chairman" className="w-[150px] h-[150px] object-cover rounded-full shadow-2xl" />
            <div className="text-left">
              <p className="text-3xl font-light leading-snug">
                "Together, we build a stronger Buganda. Our culture, history, and values define us.
                The youth hold the key to a brighter future. Let’s unite, innovate, and create opportunities
                for the next generation."
              </p>
              <p className="mt-6 text-2xl font-bold text-white">Charles Peter Mayiga</p>
              <p className="text-2xl font-bold text-white">Katikkiro Buganda Kigdom</p>
            </div>
          </div>
        </section>

        {/* New Katikkiro’s Message Section */}
        <section className="py-8 bg-gray-900 text-white text-center">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center gap-8 p-12 bg-gray-800 rounded-xl shadow-xl">
            <img src={newKatikkiroImage} alt="New Katikkiro" className="w-[150px] h-[150px] object-cover rounded-full shadow-2xl" />
            <div className="text-left">
              <p className="text-3xl font-light leading-snug">
                "As we move forward, let's preserve the legacy of our forefathers while embracing progress.
                Our unity and innovation will shape the future of Buganda."
              </p>
              <p className="mt-6 text-2xl font-bold text-white">Owek Robert Serwanga</p>
              <p className="text-2xl font-bold text-white">Minister of Youth & Sports</p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;
