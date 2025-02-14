import React from 'react';

const About = () => {
  return (
    <section className="py-20 pt-32 text-center bg-gray-50">
      {/* About Buganda Youth Section */}
      <h1 className="text-4xl font-semibold mb-6 text-gray-900">About Buganda Youth</h1>
      <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-12">
        Buganda Youth Association (BYA) is a cultural and social platform that unites young people from Buganda
        to share knowledge, celebrate their heritage, and engage in community-driven initiatives. Our main purpose is
        to empower youth, foster unity, and create a positive impact in the community. Through various programs such as 
        workshops, cultural events, and leadership development initiatives, we aim to promote social change and development.
        We are dedicated to inspiring leadership, encouraging personal growth, and contributing to the prosperity of Buganda.
      </p>

      {/* Leadership Section */}
      <h2 className="text-3xl font-semibold mb-8 text-gray-800">Meet Our Leadership</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-12">
        {/* Leadership Cards */}
        {[
          { name: 'John Doe', position: 'Chairman', image: 'bug1.jpeg' },
          { name: 'Jane Smith', position: 'Treasurer', image: 'bug4.jpg' },
          { name: 'Paul Kato', position: 'Advisor', image: 'bug5.jpg' },
          { name: 'Sarah Nakato', position: 'Secretary', image: 'bug6.jpg' },
          { name: 'James Akena', position: 'Member', image: 'bug7.jpg' },
          { name: 'Esther Tumusiime', position: 'Member', image: 'bug8.jpg' }
        ].map((leader, index) => (
          <div key={index} className="text-center">
            <img
              src={require(`../assets/${leader.image}`)}
              alt={leader.name}
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
            />
            <h3 className="font-semibold text-xl text-gray-900">{leader.name}</h3>
            <p className="text-gray-500">{leader.position}</p>
          </div>
        ))}
      </div>

      {/* Messages Section */}
      <h2 className="text-3xl font-semibold mt-16 mb-8 text-gray-800">Messages from Our Leaders</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Chairman's Message */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="font-semibold text-xl text-gray-800 mb-4">Chairman's Message</h3>
          <p className="text-gray-700">
            "We are a united force driving positive change within the Buganda community. Our youth are the future leaders, and
            together, we can make a lasting impact on our heritage and society."
          </p>
        </div>
        
        {/* Treasurer's Message */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="font-semibold text-xl text-gray-800 mb-4">Treasurer's Message</h3>
          <p className="text-gray-700">
            "Through careful financial planning and stewardship, we ensure that the resources of Buganda Youth are used effectively
            to support the programs that empower our young people."
          </p>
        </div>
        
        {/* Advisor's Message */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="font-semibold text-xl text-gray-800 mb-4">Advisor's Message</h3>
          <p className="text-gray-700">
            "It is an honor to guide and mentor the talented youth of Buganda. Together, we will continue to build a legacy of 
            leadership, education, and community development."
          </p>
        </div>

        {/* Secretary's Message */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="font-semibold text-xl text-gray-800 mb-4">Secretary's Message</h3>
          <p className="text-gray-700">
            "As the voice of the association, we are committed to transparency, communication, and ensuring that every member 
            has a platform to contribute to the growth and success of Buganda Youth."
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
