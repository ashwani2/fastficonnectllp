import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  let closeTimeout;

  const closeMenu = () => setIsOpen(false);

  const openDropdown = () => {
    clearTimeout(closeTimeout); // Prevent immediate close
    setIsDropdownOpen(true);
  };

  const closeDropdown = () => {
    closeTimeout = setTimeout(() => setIsDropdownOpen(false), 200); // Add delay
  };

  return (
    <header className="bg-blue-900 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold hover:text-blue-300 transition">
          FastFi Connect
        </Link>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links */}
        <nav
          className={`absolute top-16 left-0 w-full bg-blue-900 md:static md:w-auto md:bg-transparent transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden"
          } md:flex md:space-x-6 md:items-center text-lg font-medium`}
        >
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 p-4 md:p-0">
            {[
              { name: "Home", path: "/" },
              { name: "Admin", path: "/admin/login" },
              { name: "About", path: "/about" },
              { name: "EMI Calculator", path: "/emi-calculator" },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="hover:text-blue-300 transition"
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              </li>
            ))}

            {/* Loans Dropdown */}
            <li className="relative group">
              <button
                className="flex items-center hover:text-blue-300 transition"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                onMouseEnter={() => setIsDropdownOpen(true)}
              >
                Loans <ChevronDown size={18} className="ml-1" />
              </button>

              {isDropdownOpen && (
                <ul
                  className="absolute right-0 mt-2 w-48 bg-white text-gray-800 shadow-lg rounded-md overflow-hidden group-hover:block"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  {[
                    { name: "Credit Card", path: "/loans/credit-card" },
                    { name: "Business Loan", path: "/loans/business-loan" },
                    { name: "Digital Personal Loan", path: "/loans/digital-personal-loan" },
                    { name: "Home Loan", path: "/loans/home-loan" },
                    { name: "Gold Loan", path: "/loans/gold-loan" },
                  ].map((loan, index) => (
                    <li key={index}>
                      <Link
                        to={loan.path}
                        className="block px-4 py-2 hover:bg-blue-100 transition"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        {console.log(loan.name,"loan.name", loan.path)}
                        {loan.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
