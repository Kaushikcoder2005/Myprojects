import React from 'react';
import { Github, Twitter, Mail } from 'lucide-react';

const HomePage = () => {
  const stats = [
    { label: 'Articles Published', value: '150+' },
    { label: 'Monthly Readers', value: '10k+' },
    { label: 'Countries Reached', value: '25+' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Welcome to TechInsights
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Exploring the intersection of technology, innovation, and human experience
          </p>
          <div className="flex justify-center gap-4">
            <Github className="w-6 h-6 text-gray-600 hover:text-gray-900 cursor-pointer" />
            <Twitter className="w-6 h-6 text-gray-600 hover:text-gray-900 cursor-pointer" />
            <Mail className="w-6 h-6 text-gray-600 hover:text-gray-900 cursor-pointer" />
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow p-6 text-center"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Featured Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-lg p-8 hover:bg-blue-100 transition-colors">
              <h3 className="text-xl font-semibold mb-4">Artificial Intelligence</h3>
              <p className="text-gray-600">
                Exploring the latest developments in AI, machine learning, and their impact on society
              </p>
            </div>
            <div className="bg-purple-50 rounded-lg p-8 hover:bg-purple-100 transition-colors">
              <h3 className="text-xl font-semibold mb-4">Web Development</h3>
              <p className="text-gray-600">
                Deep dives into modern web technologies, best practices, and emerging trends
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="text-center bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter for weekly insights and updates
          </p>
          <div className="flex max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;