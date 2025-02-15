import React from 'react';

const leaders = [
  { name: 'John Doe', position: 'Chairman', image: 'bug1.jpeg' },
  { name: 'Jane Smith', position: 'Treasurer', image: 'bug4.jpg' },
  { name: 'Paul Kato', position: 'Advisor', image: 'bug5.jpg' },
  { name: 'Sarah Nakato', position: 'Secretary', image: 'bug6.jpg' },
  { name: 'James Akena', position: 'Member', image: 'bug7.jpg' },
  { name: 'Esther Tumusiime', position: 'Member', image: 'bug8.jpg' },
  { name: 'Anna Nanyondo', position: 'Member', image: 'bug9.jpg' },
  { name: 'David Kizito', position: 'Member', image: 'bug10.jpg' },
  { name: 'Alice Nabirye', position: 'Member', image: 'bug11.jpg' },
  { name: 'George Luwaga', position: 'Member', image: 'bug12.jpg' },
  { name: 'Grace Nakanwagi', position: 'Member', image: 'bug13.jpg' },
  { name: 'Ivan Kato', position: 'Member', image: 'bug14.jpg' },
  { name: 'Maria Namubiru', position: 'Member', image: 'bug15.jpg' },
  { name: 'Richard Mbabazi', position: 'Member', image: 'bug16.jpg' },
  { name: 'Sarah Akello', position: 'Member', image: 'bug17.jpg' },
];

const messages = [
  { title: "Chairman's Message", content: "We are a united force driving positive change within the Buganda community. Our youth are the future leaders, and together, we can make a lasting impact on our heritage and society." },
  { title: "Treasurer's Message", content: "Through careful financial planning and stewardship, we ensure that the resources of Buganda Youth are used effectively to support the programs that empower our young people." },
  { title: "Advisor's Message", content: "It is an honor to guide and mentor the talented youth of Buganda. Together, we will continue to build a legacy of leadership, education, and community development." },
  { title: "Secretary's Message", content: "As the voice of the association, we are committed to transparency, communication, and ensuring that every member has a platform to contribute to the growth and success of Buganda Youth." }
];

const About = () => {
  return (
    <section 
      className="bg-cover bg-center py-12 px-4 pt-36" 
      style={{ backgroundImage: 'url(../assets/Kabaka.jpeg)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* About Title and Description */}
        <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-6">About Buganda Youth</h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-8 text-center leading-relaxed">
          Buganda Youth Association (BYA) is a cultural and social platform that unites young people from Buganda
          to share knowledge, celebrate their heritage, and engage in community-driven initiatives. Our main purpose is
          to empower youth, foster unity, and create a positive impact in the community.
        </p>

        {/* Leadership Section with Dark Background */}
        <div className="bg-gray-800 py-12 px-4 rounded-lg mb-12">
          <div className="text-center">
            <h2 className="text-4xl font-semibold text-white mb-6">Meet Our Leadership</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 px-2"> {/* Reduced horizontal padding */}
              {leaders.map((leader, index) => (
                <div key={index} className="bg-white shadow-lg rounded-lg text-center overflow-hidden w-full h-72 transition-all transform hover:scale-105 hover:shadow-xl">
                  <img
                    src={require(`../assets/${leader.image}`)}
                    alt={leader.name}
                    className="w-full h-40 object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-xl text-gray-900 mb-2">{leader.name}</h3>
                    <p className="text-gray-500 text-sm">{leader.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Messages Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">Messages from Our Leaders</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {messages.map((msg, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-left border-l-4 border-blue-500 transition-all transform hover:scale-105 hover:shadow-xl">
                <h3 className="font-semibold text-xl text-gray-800 mb-4">{msg.title}</h3>
                <p className="text-gray-700 leading-relaxed">{msg.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
