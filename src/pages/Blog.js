import React from 'react';
import { Link } from 'react-router-dom';
import bug5 from '../assets/bug7.jpg'; // hero background
import reporterImage from '../assets/ict.jpeg'; // reporter image

const posts = [
  {
    id: 1,
    title: 'Why Community Still Matters in a Digital World',
    author: 'Dan Munaawa',
    date: 'July 10, 2025',
    excerpt:
      'In an era where we’re constantly online, human connection and shared values remain vital. Communities offer a space to belong, exchange culture, and collaborate beyond screens. Let’s explore how digital evolution can still respect deep-rooted cultural bonds.',
  },
  {
    id: 2,
    title: 'The Hidden Tech Scene in Buganda',
    author: 'Wycliffe Ssemakula',
    date: 'June 28, 2025',
    excerpt:
      'Many are unaware of the innovation quietly blossoming in Buganda. From coding camps to tech villages, young minds are crafting solutions rooted in their realities. This piece highlights changemakers turning ideas into action.',
  },
  {
    id: 3,
    title: 'Balancing Tradition with Innovation',
    author: 'Hilda Victoria Namulwana',
    date: 'May 14, 2025',
    excerpt:
      'Is it possible to respect heritage and still push for innovation? Absolutely. Projects in Buganda are integrating cultural storytelling into apps, crafts, and even architecture—showing that tradition and tech are not rivals but partners.',
  },
];

const Blog = () => {
  return (
    <section className="mt-24 font-sans">
      {/* Hero Banner */}
      <div
        className="relative h-80 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bug5})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <h1 className="relative z-10 text-5xl font-extrabold text-white tracking-wide drop-shadow-xl">
          Voices of Buganda
        </h1>
      </div>

      {/* Reporter Highlight */}
      <div className="max-w-5xl mx-auto mt-16 px-6 md:px-12">
        <div className="bg-gradient-to-br from-yellow-50 to-white border-l-8 border-yellow-400 rounded-2xl shadow-xl p-6 md:p-10 flex flex-col md:flex-row gap-6 items-center">
          <img
            src={reporterImage}
            alt="New Reporter"
            className="w-28 h-28 object-cover rounded-full border-4 border-yellow-300 shadow-md"
          />
          <div>
            <h3 className="text-2xl font-bold text-yellow-700 mb-2">
              🔥 Current Affairs with Clif.
            </h3>
            <p className="text-gray-700 leading-relaxed">
              <strong>Headline:</strong> "Buganda Youth Day" <br />
              <strong>Date:</strong> Dec, 2025 <br />
              <strong>Brief:</strong> Over 500 young innovators gathered for the the Buganda Youth day to present creative solutions addressing education, health, and agriculture. Startups like <em>AgroPlug</em> and <em>StudyMate</em> wowed the crowd, gaining interest from both local investors and NGOs. Government officials pledged future support for regional expos.
            </p>
          </div>
        </div>
      </div>

      {/* Blog Articles */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-20 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-2xl shadow-xl hover:shadow-2xl hover:ring-4 hover:ring-yellow-400 transition-all duration-300 p-6 flex flex-col justify-between"
          >
            <h2 className="text-2xl font-bold mb-3 text-gray-800 hover:text-yellow-600 transition duration-300">
              {post.title}
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              {post.author} • {post.date}
            </p>
            <p className="text-gray-700 leading-relaxed">{post.excerpt}</p>
          </article>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="bg-yellow-100 py-12 mt-12">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-800 mb-4">
            Stay Updated with the Voices That Matter
          </h2>
          <p className="text-gray-700 mb-6">
            Join our mailing list to receive weekly updates on community stories, local innovation, and cultural movements across Buganda.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition duration-300"
          >
            Subscribe Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
