import React from "react";
import { Link } from "react-router-dom"; 

const About = () => {
  return (
    <div className="bg-blue-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About FastFi Connect</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Revolutionizing financial services with speed, technology, and transparency
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Our <span className="text-blue-600">Story</span>
            </h2>
            <p className="text-gray-600 mb-4">
              FastFi Connect LLP was founded in 2020 with a simple mission: to make financial services faster, simpler, and more accessible.
            </p>
            <p className="text-gray-600 mb-4">
              The name "FastFi" represents our core values - <span className="font-semibold">Fast</span> (speed and efficiency) and <span className="font-semibold">Fi</span> (financial innovation). We combine cutting-edge technology with deep financial expertise to deliver solutions that traditional institutions can't match.
            </p>
            <p className="text-gray-600">
              Today, we serve over 50,000 customers across India with our innovative loan products and financial tools.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <img 
              src="/images/about-story.jpg" 
              alt="FastFi team working" 
              className="rounded-lg w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Mission & Values */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our <span className="text-blue-600">Mission</span> & Values
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-blue-50 p-6 rounded-xl shadow-md">
              <div className="text-blue-600 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Speed</h3>
              <p className="text-gray-600">
                We deliver financial solutions in record time with our automated processes and AI-powered decision making.
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-blue-50 p-6 rounded-xl shadow-md">
              <div className="text-blue-600 text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Transparency</h3>
              <p className="text-gray-600">
                No hidden fees or fine print. We believe in complete clarity about rates, terms, and processes.
              </p>
            </div>
            
            {/* Card 3 */}
            <div className="bg-blue-50 p-6 rounded-xl shadow-md">
              <div className="text-blue-600 text-4xl mb-4">❤️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Customer First</h3>
              <p className="text-gray-600">
                Every decision we make starts with what's best for our customers' financial health.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to experience FastFi?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who've found faster, smarter financial solutions.
          </p>
          <Link 
            to="/" 
            className="inline-block px-8 py-3 bg-white text-blue-600 font-bold rounded-lg shadow-lg hover:bg-blue-50 transition"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;