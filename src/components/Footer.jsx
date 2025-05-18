import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Info */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            FastFi Connect LLP
          </h3>
          <p className="text-gray-600">
            FastFi represents the fusion of speed ("Fast") and finance ("Fi"),
            delivering instant loan approvals and technology-driven financial
            solutions as a modern alternative to traditional services.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold text-gray-800 mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a href="#" className="hover:text-gray-800 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-800 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-800 transition-colors">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-800 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-semibold text-gray-800 mb-4">
            Contact Us
          </h4>
          <ul className="space-y-2 text-gray-600">
            <li>📞 +91-9876543210</li>
            <li>✉️ support@fastficonnect.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t mt-10 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} FastFi Connect LLP. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
