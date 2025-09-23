import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(null);

    const toggleDropdown = (menu) => {
        setDropdownOpen(dropdownOpen === menu ? null : menu);
    };

    return (
        <nav className="bg-white shadow">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Mobile menu button */}
                    <div className="sm:hidden">
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            type="button"
                            className="text-gray-700 hover:text-red-800 focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden sm:flex space-x-4 mx-auto">
                        <Link to="/deals" className="px-3 py-2 text-md font-medium hover:text-red-600">Deals</Link>

                        {/* Food Dropdown */}
                        <div className="relative group px-3 py-2">
                            <span className="text-md font-medium hover:text-red-600">Food</span>
                            <div className="absolute left-0 mt-2 hidden group-hover:block bg-white border rounded shadow-lg z-10">
                                <ul className="py-2 w-40 space-y-2">
                                    <li><Link to="/Food/Vegetable" className="block px-4 py-2 hover:bg-gray-100 hover:text-red-600">Vegetables</Link></li>
                                    <li><Link to="/Food/Fruits" className="block px-4 py-2 hover:bg-gray-100 hover:text-red-600">Fruits</Link></li>
                                    <li><Link to="/Food/Meat-Poultry" className="block px-4 py-2 hover:bg-gray-100 hover:text-red-600">Meat & Poultry</Link></li>
                                    <li><Link to="/Food/Bakrey" className="block px-4 py-2 hover:bg-gray-100 hover:text-red-600">Bakery</Link></li>
                                </ul>
                            </div>
                        </div>

                        {/* Beverages Dropdown */}
                        <div className="relative group px-3 py-2">
                            <span className="text-md font-medium hover:text-red-600">Beverages</span>
                            <div className="absolute left-0 mt-2 hidden group-hover:block bg-white border rounded shadow-lg z-10">
                                <ul className="py-2 w-40 space-y-2">
                                    <li><Link to="/Beverages/Tea" className="block px-4 py-2 hover:bg-gray-100 hover:text-red-600">Tea</Link></li>
                                    <li><Link to="/Beverages/Coffee" className="block px-4 py-2 hover:bg-gray-100 hover:text-red-600">Coffee</Link></li>
                                    <li><Link to="/Beverages/Wine" className="block px-4 py-2 hover:bg-gray-100 hover:text-red-600">Wine</Link></li>
                                </ul>
                            </div>
                        </div>

                        {/* Household Dropdown */}
                        <div className="relative group px-3 py-2">
                            <span className="text-md font-medium hover:text-red-600">Household</span>
                            <div className="absolute left-0 mt-2 hidden group-hover:block bg-white border rounded shadow-lg z-10">
                                <ul className="py-2 w-40 space-y-2">
                                    <li><Link to="/Household/Home-Kitchen" className="block px-4 py-2 hover:bg-gray-100 hover:text-red-600">Home & Kitchen</Link></li>
                                    <li><Link to="/Household/Cleaning-Supplies" className="block px-4 py-2 hover:bg-gray-100 hover:text-red-600">Cleaning Supplies</Link></li>
                                </ul>
                            </div>
                        </div>

                        {/* Personal Care Dropdown */}
                        <div className="relative group px-3 py-2">
                            <span className="text-md font-medium hover:text-red-600">Personal Care</span>
                            <div className="absolute left-0 mt-2 hidden group-hover:block bg-white border rounded shadow-lg z-10">
                                <ul className="py-2 w-40 space-y-2">
                                    <li><Link to="/Personal-care/personal-Hygiene" className="block px-4 py-2 hover:bg-gray-100 hover:text-red-600">Personal Hygiene</Link></li>
                                    <li><Link to="/Personal-care/Babies" className="block px-4 py-2 hover:bg-gray-100 hover:text-red-600">Babies</Link></li>
                                </ul>
                            </div>
                        </div>

                        <Link to="/" className="px-3 py-2 text-md font-medium hover:text-red-600">My Order</Link>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="sm:hidden px-4 pb-4 space-y-2">
                    <Link to="/deals" className="block text-red-800 hover:text-red-600">Deals</Link>

                    {/* Food Mobile */}
                    <div>
                        <button onClick={() => toggleDropdown('food')} className="w-full text-left text-red-800 hover:text-red-600">Food</button>
                        {dropdownOpen === 'food' && (
                            <ul className="ml-4 space-y-1">
                                <li><Link to="/Food/Vegetable" className="block hover:text-red-600">Vegetables</Link></li>
                                <li><Link to="/Food/Fruits" className="block hover:text-red-600">Fruits</Link></li>
                                <li><Link to="/Food/Meat-Poultry" className="block hover:text-red-600">Meat & Poultry</Link></li>
                                <li><Link to="/Food/Bakrey" className="block hover:text-red-600">Bakery</Link></li>
                            </ul>
                        )}
                    </div>

                    {/* Beverages Mobile */}
                    <div>
                        <button onClick={() => toggleDropdown('beverages')} className="w-full text-left text-red-800 hover:text-red-600">Beverages</button>
                        {dropdownOpen === 'beverages' && (
                            <ul className="ml-4 space-y-1">
                                <li><Link to="/Beverages/Tea" className="block hover:text-red-600">Tea</Link></li>
                                <li><Link to="/Beverages/Coffee" className="block hover:text-red-600">Coffee</Link></li>
                                <li><Link to="/Beverages/Wine" className="block hover:text-red-600">Wine</Link></li>
                            </ul>
                        )}
                    </div>

                    {/* Household Mobile */}
                    <div>
                        <button onClick={() => toggleDropdown('household')} className="w-full text-left text-red-800 hover:text-red-600">Household</button>
                        {dropdownOpen === 'household' && (
                            <ul className="ml-4 space-y-1">
                                <li><Link to="/Household/Home-Kitchen" className="block hover:text-red-600">Home & Kitchen</Link></li>
                                <li><Link to="/Household/Cleaning-Supplies" className="block hover:text-red-600">Cleaning Supplies</Link></li>
                            </ul>
                        )}
                    </div>

                    {/* Personal Care Mobile */}
                    <div>
                        <button onClick={() => toggleDropdown('personal')} className="w-full text-left text-red-800 hover:text-red-600">Personal Care</button>
                        {dropdownOpen === 'personal' && (
                            <ul className="ml-4 space-y-1">
                                <li><Link to="/Personal-care/personal-Hygiene" className="block hover:text-red-600">Personal Hygiene</Link></li>
                                <li><Link to="/Personal-care/Babies" className="block hover:text-red-600">Babies</Link></li>
                            </ul>
                        )}
                    </div>

                    <Link to="/" className="block text-red-800 hover:text-red-600">My Order</Link>
                </div>
            )}
        </nav>
    );
}
