import { Link } from "react-router-dom";

export default function AboutUs() {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-800">

            {/* About Section */}
            <div className="max-w-5xl mx-auto px-4 py-16">
                <h2 className="text-4xl font-bold text-center text-red-600 mb-6">About Us</h2>
                <p className="text-lg text-center mb-12">
                    At <strong>MyGrocer</strong>, we believe in delivering freshness and convenience to your doorstep. 
                    We're not just an online grocery store — we're your daily shopping partner.
                </p>

                {/* Mission + Values */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="text-2xl font-semibold text-red-600 mb-2">Our Mission</h3>
                        <p>
                            To simplify grocery shopping by offering fresh, quality products at the best prices, 
                            right from the comfort of your home.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="text-2xl font-semibold text-red-600 mb-2">Our Values</h3>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Customer Satisfaction</li>
                            <li>Freshness First</li>
                            <li>Fast & Reliable Delivery</li>
                            <li>Community Support</li>
                        </ul>
                    </div>
                </div>

                {/* Team Section (Optional) */}
                <div className="text-center mb-16">
                    <h3 className="text-3xl font-bold text-red-600 mb-4">Meet Our Team</h3>
                    <p className="text-md text-gray-700">
                        A passionate group of food lovers, tech enthusiasts, and logistics pros working together to
                        deliver your groceries with a smile.
                    </p>
                </div>

                {/* Call to Action */}
                <div className="bg-red-100 text-center p-8 rounded-lg">
                    <h3 className="text-2xl font-semibold text-red-700 mb-2">Join the MyGrocer Family</h3>
                    <p className="mb-4">
                        Whether you're a customer or a partner, we’d love to hear from you.
                    </p>
                    <Link
                        to="/customerSupport"
                        className="inline-block bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>
    );
}
