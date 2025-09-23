import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      {/* Main Footer Section */}
      <div className="bg-red-600 text-white px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Clovers + Contact */}
          <div>
            <h1 className="text-3xl font-bold">Clovers.</h1>
            <h2 className="font-semibold text-lg mt-4">Need Help?</h2>
            <p className="mt-2 text-sm leading-relaxed">
              Visit our{" "}
              <Link to="/customerSupport" className="underline hover:text-black transition">
                Customer Support
              </Link>{" "}
              or call us at
            </p>
            <h2 className="font-semibold text-lg mt-2">123-456-7890</h2>
            <div className="flex space-x-3 text-xl mt-5">
              <FaFacebook className="bg-white text-black p-2 rounded-full w-10 h-10 hover:bg-black hover:text-white transition cursor-pointer" />
              <FaInstagram className="bg-white text-black p-2 rounded-full w-10 h-10 hover:bg-black hover:text-white transition cursor-pointer" />
              <FaTwitter className="bg-white text-black p-2 rounded-full w-10 h-10 hover:bg-black hover:text-white transition cursor-pointer" />
              <FaYoutube className="bg-white text-black p-2 rounded-full w-10 h-10 hover:bg-black hover:text-white transition cursor-pointer" />
            </div>
          </div>

          {/* Menu */}
          <div>
            <h2 className="font-bold mb-3 text-lg">Menu</h2>
            <ul className="space-y-2 text-sm">
              <li><Link to="/deals" className="hover:text-black transition">Deals</Link></li>
              <li><Link to="/Food/Vegetable" className="hover:text-black transition">Food</Link></li>
              <li><Link to="/Beverages/Tea" className="hover:text-black transition">Beverages</Link></li>
              <li><Link to="/Household/Home-Kitchen" className="hover:text-black transition">Household</Link></li>
              <li><Link to="/Personal-care/personal-Hygiene" className="hover:text-black transition">Personal Care</Link></li>
              <li><Link to="/orders" className="hover:text-black transition">My Order</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h2 className="font-bold mb-3 text-lg">Categories</h2>
            <ul className="space-y-2 text-sm">
              <li><Link to="/Food/Vegetable" className="hover:text-black transition">Vegetables</Link></li>
              <li><Link to="/Food/Bakrey" className="hover:text-black transition">Bakery</Link></li>
              <li><Link to="/Beverages/Wine" className="hover:text-black transition">Wine</Link></li>
              <li><Link to="/Food/Dairy-Eggs" className="hover:text-black transition">Dairy & Eggs</Link></li>
              <li><Link to="/Food/Meat-Poultry" className="hover:text-black transition">Meat & Poultry</Link></li>
              <li><Link to="/Beverages/Soft-Drinks" className="hover:text-black transition">Soft Drinks</Link></li>
              <li><Link to="/Household/Cleaning-Supplies" className="hover:text-black transition">Cleaning Supplies</Link></li>
              <li><Link to="/Food/Cereals-Snacks" className="hover:text-black transition">Cereals & Snacks</Link></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h2 className="font-bold mb-3 text-lg">Info</h2>
            <ul className="space-y-2 text-sm">
              <li><Link to="/faqs" className="hover:text-black transition">FAQs</Link></li>
              <li><Link to="/about" className="hover:text-black transition">About Us</Link></li>
              <li><Link to="/customerSupport" className="hover:text-black transition">Customer Support</Link></li>
              <li><Link to="/locations" className="hover:text-black transition">Locations</Link></li>
            </ul>
          </div>

          {/* My Choice */}
          <div>
            <h2 className="font-bold mb-3 text-lg">My Choice</h2>
            <ul className="space-y-2 text-sm">
              <li><Link to="/favorites" className="hover:text-black transition">Favorites</Link></li>
              <li><Link to="/orders" className="hover:text-black transition">My Orders</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Payment & Terms */}
      <div className="bg-red-600 text-white py-10 border-t border-white/20">
        <div className="flex justify-center items-center flex-wrap gap-6 text-sm">
          <a className="hover:text-black underline transition" href="#">Shipping & Return</a>
          <a className="hover:text-black underline transition" href="#">Terms & Conditions</a>
          <a className="hover:text-black underline transition" href="#">Payment Method</a>
        </div>

        <h2 className="font-bold mt-6 text-center text-lg">We accept the following payment methods</h2>

        <div className="flex flex-wrap justify-center items-center gap-5 px-4 py-6">
          <img className="w-20 sm:w-24" src="/pay1.jpg" alt="Mastercard" />
          <img className="w-24 sm:w-28" src="/pay2.png" alt="American Express" />
          <img className="w-20 sm:w-24" src="/pay3.png" alt="UnionPay" />
          <img className="w-20 sm:w-24" src="/pay4.png" alt="JCB" />
          <img className="w-20 sm:w-24" src="/pay5.jpg" alt="Discover" />
          <img className="w-20 sm:w-24" src="/visa.png" alt="Visa" />
          <img className="w-14 sm:w-16" src="/pay7.webp" alt="PayPal" />
          <img className="w-14 sm:w-16" src="/pay8.svg" alt="Diners Club" />
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center bg-white text-black py-4 text-sm sm:text-base">
        <p>© 2035 by Clovers. Powered and secured by Wix</p>
      </div>
    </>
  );
}
