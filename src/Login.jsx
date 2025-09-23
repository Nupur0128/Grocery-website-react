import { Link } from "react-router-dom";

import { useState } from "react";

export default function LoginSignup() {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="min-h-screen bg-gray-100">
        

            {/* Auth Container */}
            <div className="flex justify-center items-center py-16 px-4">
                <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md">
                    <h2 className="text-3xl font-bold text-red-600 mb-6 text-center">
                        {isLogin ? "Login to Your Account" : "Create a New Account"}
                    </h2>

                    <form className="space-y-4">
                        {/* Show Name input only in Signup */}
                        {!isLogin && (
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                                <input type="text" placeholder="Your Name"
                                    className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500" />
                            </div>
                        )}

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" placeholder="you@example.com"
                                className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <input type="password" placeholder="••••••••"
                                className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500" />
                        </div>

                        <button type="submit"
                            className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition">
                            {isLogin ? "Login" : "Sign Up"}
                        </button>
                    </form>

                    {/* Switch Button */}
                    <p className="text-center text-sm mt-6 text-gray-600">
                        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                        <button
                            onClick={() => setIsLogin(!isLogin)}
                            className="text-red-600 font-semibold hover:underline"
                        >
                            {isLogin ? "Sign Up" : "Login"}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}
