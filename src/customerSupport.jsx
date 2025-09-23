import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function CustomerSupport() {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-800">

            {/* Contact Section */}
            <div className="max-w-6xl mx-auto px-4 py-16">
                <h2 className="text-4xl font-bold text-center text-red-600 mb-8">Customer Support</h2>

                {/* Info + Form Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="text-2xl font-semibold text-red-600 mb-4">Get in Touch</h3>
                        <p className="mb-4 text-gray-700">
                            Have questions about your order, deliveries, or products? We’re here to help!
                        </p>
                        <ul className="space-y-4 text-gray-700">
                            <li className="flex items-center gap-4">
                                <FaPhoneAlt className="text-red-600" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <FaEnvelope className="text-red-600" />
                                <span>support@mygrocer.com</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <FaMapMarkerAlt className="text-red-600" />
                                <span>123 Fresh Lane, Delhi, India</span>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="text-2xl font-semibold text-red-600 mb-4">Send a Message</h3>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Name</label>
                                <input type="text" placeholder="Your Name"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input type="email" placeholder="you@example.com"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea rows="4" placeholder="Your message..."
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500" />
                            </div>
                            <button type="submit"
                                className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
