import { useState, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "../../public/images/logo6.png"; // Adjust the path as necessary

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  let closeTimeout;

  const closeMenu = () => setIsOpen(false);

  const openDropdown = () => {
    clearTimeout(closeTimeout);
    setIsDropdownOpen(true);
  };

  const closeDropdown = () => {
    closeTimeout = setTimeout(() => setIsDropdownOpen(false), 200);
  };

  return (
    <header className="bg-blue-900 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <a href="/" className="flex items-center hover:opacity-90 transition">
          <div className="p-1 rounded-lg shadow-md flex items-center justify-center">
            <img src={Logo} alt="FastFi Connect Logo" className="h-10 w-auto" />
          </div>
        </a>

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
            {/* Home */}
            <li>
              <a
                href="/"
                className="hover:text-blue-300 transition"
                onClick={closeMenu}
              >
                Home
              </a>
            </li>

            {/* Loans Dropdown - IMPROVED FOR MOBILE */}
            <li className="relative">
              <button
                className="flex items-center hover:text-blue-300 transition w-full md:w-auto"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
              >
                Loans <ChevronDown size={18} className="ml-1" />
              </button>

              {isDropdownOpen && (
                <ul
                  className={`md:absolute ${
                    isOpen ? "static" : "absolute"
                  } right-0 mt-2 w-full md:w-48 bg-blue-800 md:bg-white text-white md:text-gray-800 shadow-lg rounded-md overflow-hidden`}
                  ref={dropdownRef}
                  onMouseEnter={openDropdown}
                  onMouseLeave={closeDropdown}
                >
                  {[
                    { name: "Credit Card", path: "/loans/credit-card" },
                    { name: "Business Loan", path: "/loans/business-loan" },
                    {
                      name: "Digital Personal Loan",
                      path: "/loans/digital-personal-loan",
                    },
                    { name: "Home Loan", path: "/loans/home-loan" },
                    { name: "Gold Loan", path: "/loans/gold-loan" },
                  ].map((loan, index) => (
                    <li key={index}>
                      <a
                        href={loan.path}
                        className="block px-4 py-2 hover:bg-blue-700 md:hover:bg-blue-100 transition"
                        onClick={() => {
                          closeMenu();
                          setIsDropdownOpen(false);
                        }}
                      >
                        {loan.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Other Links */}
            {[
              { name: "About", path: "/about" },
              { name: "EMI Calculator", path: "/emi-calculator" },
              { name: "Admin", path: "/admin/login" },
            ].map((item, index) => (
              <li key={index}>
                <a
                  href={item.path}
                  className="hover:text-blue-300 transition"
                  onClick={closeMenu}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
