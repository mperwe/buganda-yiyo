import React from 'react';

const leaders = [
  { name: 'John Doe', position: 'Chairman', image: 'bug1.jpeg' },
  { name: 'Jane Smith', position: 'Treasurer', image: 'bug4.jpg' },
  { name: 'Paul Kato', position: 'Advisor', image: 'bug5.jpg' },
  { name: 'Sarah Nakato', position: 'Secretary', image: 'bug6.jpg' },
  { name: 'James Akena', position: 'Member', image: 'bug7.jpg' },
  { name: 'Emmanuel Nsubuga', position: 'Vice Chairman', image: 'bug8.jpg' },
  { name: 'Mary Lwanga', position: 'Assistant Secretary', image: 'bug9.jpg' },
  { name: 'Peter Kamya', position: 'Cultural Coordinator', image: 'bug10.jpg' },
  { name: 'Angela Nabukenya', position: 'Youth Coordinator', image: 'bug11.jpg' },
  { name: 'Abraham Mulondo', position: 'Public Relations Officer', image: 'bug12.jpg' },
  { name: 'Ruth Namukasa', position: 'Events Coordinator', image: 'bug13.jpg' },
  { name: 'Samson Tumusiime', position: 'Sports Director', image: 'bug14.jpg' },
  { name: 'Tina Nsubuga', position: 'Gender Affairs Officer', image: 'bug15.jpg' },
  { name: 'David Lwanga', position: 'Health Officer', image: 'bug16.jpg' },
  { name: 'Julia Nalule', position: 'Education Officer', image: 'bug17.jpg' },
];

const messages = [
  { title: "Chairman's Message", content: "We are a united force driving positive change within the Buganda community. Our youth are the future leaders, and together, we can make a lasting impact on our heritage and society." },
  { title: "Treasurer's Message", content: "Through careful financial planning and stewardship, we ensure that the resources of Buganda Youth are used effectively to support the programs that empower our young people." },
  { title: "Advisor's Message", content: "It is an honor to guide and mentor the talented youth of Buganda. Together, we will continue to build a legacy of leadership, education, and community development." },
];

const chairmanImage = require('../assets/Kabaka.jpeg');
const newKatikkiroImage = require('../assets/Katikkiro2.jpeg');

const About = () => {
  return (
    <section className="bg-cover bg-center py-16 px-6" style={{ backgroundImage: 'url(../assets/Kabaka.jpeg)' }}>
      <div className="max-w-7xl mx-auto">
        {/* About Title and Description */}
        <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-8">About Buganda Youth</h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-12 text-center leading-relaxed">
          Buganda Youth Association (BYA) is a cultural and social platform that unites young people from Buganda
          to share knowledge, celebrate their heritage, and engage in community-driven initiatives.
        </p>

        {/* Leadership Section */}
        <div className="bg-white py-16 px-6 rounded-lg shadow-lg mb-16">
          <h2 className="text-4xl font-semibold text-gray-800 text-center mb-12">Meet Our Leadership</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {leaders.map((leader, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg text-center overflow-hidden transition-all transform hover:scale-105 hover:shadow-2xl">
                <img src={require(`../assets/${leader.image}`)} alt={leader.name} className="w-full h-48 object-cover rounded-t-lg" />
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
          <h2 className="text-4xl font-semibold text-gray-800 mb-8">Messages from Our Leaders</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {messages.map((msg, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md text-left border-l-4 border-blue-500 transition-all transform hover:scale-105 hover:shadow-xl">
                <h3 className="font-semibold text-xl text-gray-800 mb-4">{msg.title}</h3>
                <p className="text-gray-700 leading-relaxed">{msg.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Katikkiro’s Message Section */}
        <section className="py-8 bg-gray-900 text-white text-center">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-8">Katikkiro’s Message</h2>
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center gap-8 p-12 bg-gray-800 rounded-xl shadow-xl border-4 border-white-500">
            <img src={chairmanImage} alt="Chairman" className="w-[150px] h-[150px] object-cover rounded-full shadow-2xl" />
            <div className="text-left">
              <p className="text-3xl font-light leading-snug">
                "Together, we build a stronger Buganda. Our culture, history, and values define us.
                The youth hold the key to a brighter future. Let’s unite, innovate, and create opportunities
                for the next generation."
              </p>
              <p className="mt-6 text-2xl font-bold text-white">- Charles Peter Mayiga</p>
            </div>
          </div>
        </section>

        {/* New Katikkiro’s Message Section */}
        <section className="py-8 bg-gray-900 text-white text-center">
         
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center gap-8 p-12 bg-gray-800 rounded-xl shadow-xl border-4 border-white-500">
            <img src={newKatikkiroImage} alt="New Katikkiro" className="w-[150px] h-[150px] object-cover rounded-full shadow-2xl" />
            <div className="text-left">
              <p className="text-3xl font-light leading-snug">
                "As we move forward, let's preserve the legacy of our forefathers while embracing progress.
                Our unity and innovation will shape the future of Buganda."
              </p>
              <p className="mt-6 text-2xl font-bold text-white">- New Katikkiro</p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;
