import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaClock, FaPhoneAlt } from "react-icons/fa";

export default function Location() {
    const locations = [
        {
            city: "Delhi",
            address: "123 Fresh Market Lane, Connaught Place, Delhi",
            phone: "+91 98765 43210",
            hours: "9:00 AM - 9:00 PM",
            mapLink: "https://www.google.com/maps?q=connaught+place+delhi"
        },
        {
            city: "Mumbai",
            address: "45 Grocery Blvd, Andheri West, Mumbai",
            phone: "+91 91234 56789",
            hours: "10:00 AM - 8:00 PM",
            mapLink: "https://www.google.com/maps?q=andheri+mumbai"
        },
        {
            city: "Bangalore",
            address: "78 Food Street, Indiranagar, Bangalore",
            phone: "+91 99887 66554",
            hours: "8:00 AM - 10:00 PM",
            mapLink: "https://www.google.com/maps?q=indiranagar+bangalore"
        },
    ];

    return (
        <div className="min-h-screen bg-gray-100 text-gray-800">

            {/* Page Header */}
            <div className="text-center py-12">
                <h2 className="text-4xl font-bold text-red-600 mb-2">Our Store Locations</h2>
                <p className="text-lg text-gray-700">Visit us at any of our physical outlets across India</p>
            </div>

            {/* Location Cards */}
            <div className="max-w-6xl mx-auto px-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-16">
                {locations.map((loc, index) => (
                    <div key={index} className="bg-white rounded-lg shadow p-6 space-y-4">
                        <h3 className="text-2xl font-semibold text-red-600">{loc.city}</h3>
                        <div className="flex items-start gap-2">
                            <FaMapMarkerAlt className="text-red-500 mt-1" />
                            <p>{loc.address}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaPhoneAlt className="text-red-500" />
                            <span>{loc.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaClock className="text-red-500" />
                            <span>{loc.hours}</span>
                        </div>
                        <a
                            href={loc.mapLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-2 text-sm text-red-600 font-medium hover:underline"
                        >
                            View on Google Maps
                        </a>
                    </div>
                ))}
            </div>

        </div>
    );
}
