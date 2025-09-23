import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      {/* Top bar */}
      <div className="h-14 sm:h-16 text-xs sm:text-sm px-4 sm:px-6 bg-red-600 text-white flex items-center">
        
        {/* Left Links */}
        <div className="flex space-x-4 sm:space-x-6">
          <Link to="/aboutUs" className="hover:underline hover:text-black transition">About Us</Link>
          <Link to="/customerSupport" className="hover:underline hover:text-black transition">Customer Support</Link>
        </div>

        {/* Right Links (Cart + Location) */}
        <div className="ml-auto flex items-center space-x-6">
          {/* Cart */}
          <Link to="/cart" className="flex items-center hover:text-black transition">
            <FaCartArrowDown className="text-lg sm:text-xl" />
            <span className="ml-1 hidden sm:inline">Cart</span>
          </Link>

          {/* Location */}
          <Link to="/location" className="flex items-center hover:underline hover:text-black transition">
            Location
            <FontAwesomeIcon icon={faLocationDot} className="ml-1" />
          </Link>
        </div>
      </div>
    </>
  );
}
