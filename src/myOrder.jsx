import { FaTruck, FaShoppingBasket, FaHeadset, FaMobileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Deals from "./deals";

export default function MyOrder() {
    const features = [
        {
            icon: <FaTruck size={36} className="text-red-600" />,
            title: "Free Delivery",
            subtitle: "To Your Door",
        },
        {
            icon: <FaShoppingBasket size={36} className="text-red-600" />,
            title: "Local Pickup",
            subtitle: "Check Out Locations",
        },
        {
            icon: <FaHeadset size={36} className="text-red-600" />,
            title: "Available for You",
            subtitle: "Online Support 24/7",
        },
        {
            icon: <FaMobileAlt size={36} className="text-red-600" />,
            title: "Order on the Go",
            subtitle: "Download Our App",
        },
    ];

    const mostPopularItem = [
        { img: "/mostPopu1.png", btn: "Vegetables" },
        { img: "/mostPopu2.png", btn: "Bakery" },
        { img: "/mostPopu3.png", btn: "Wine" },
        { img: "/mostPopu4.png", btn: "Dairy & Eggs" },
        { img: "/mostPopu5.png", btn: "Meat & Poultry" },
        { img: "/mostPopu6.png", btn: "Soft Drinks" },
        { img: "/mostPopu7.png", btn: "Cleaning Supplies" },
        { img: "/mostPopu8.png", btn: "Cereal & Snacks" },
    ];

    return (
        <>
            {/* Hero Section */}
            <div className="relative w-full h-[300px] md:h-[450px] lg:h-[600px]">
                <img
                    src="myOrder1.avif"
                    alt="Fresh Essentials"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center px-4">
                    <div className="text-center md:text-left max-w-3xl">
                        <h1 className="text-lg md:text-2xl font-medium mb-2">
                            Easy Fresh & Convenient
                        </h1>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                            Stock Up on <br /> Daily Essentials
                        </h1>
                        <p className="text-base md:text-xl font-semibold mb-6">
                            Save Big on Your Favorite Brands
                        </p>
                        <button className="bg-red-600 text-white px-6 py-2 rounded-lg text-sm md:text-base hover:bg-red-700 transition">
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <section className="py-12 bg-white">
                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x border border-stone-200">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-4 p-6 justify-center text-center sm:text-left"
                        >
                            {feature.icon}
                            <div>
                                <h3 className="font-semibold text-lg">{feature.title}</h3>
                                <p className="text-sm text-gray-600">{feature.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Best Deals Section */}
            <section className="container mx-auto px-4 py-12">
                <h1 className="text-2xl md:text-3xl font-bold mb-6">Best Deals</h1>
                <Deals hideHeaderAndFilter={true} />
            </section>



            {/* Promo Banners */}
            <section className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* First Image */}
                <div className="relative h-[400px] lg:h-[500px]">
                    <img
                        src="/myorderp-3.1.avif"
                        alt=""
                        className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 flex flex-col items-start justify-center px-6 text-black">
                        <h2 className="text-lg font-bold">It’s Wine O'Clock!</h2>
                        <h3 className="text-2xl font-semibold">Great Deals on</h3>
                        <h1 className="text-4xl md:text-5xl font-bold">Selected Wines</h1>
                        <p className="mt-2 text-sm md:text-base">
                            Discover our finest collection of wines at unbeatable prices.
                        </p>
                        <button className="mt-6 bg-red-600 text-white px-6 py-2 rounded-full hover:bg-white hover:text-red-600 border border-red-600 transition">
                            Shop Now
                        </button>
                    </div>
                </div>

                {/* Second Image */}
                <div className="relative h-[400px] lg:h-[500px]">
                    <img
                        src="/myorderp-3.2.avif"
                        alt=""
                        className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 flex flex-col items-start justify-center px-6 text-black">
                        <h2 className="text-lg font-bold">Deal of the Week</h2>
                        <h1 className="text-4xl md:text-5xl font-bold">40% Off</h1>
                        <h3 className="text-xl md:text-2xl">Cleaning Supplies</h3>
                        <button className="mt-6 bg-red-600 text-white px-6 py-2 rounded-full hover:bg-white hover:text-red-600 border border-red-600 transition">
                            Shop Now
                        </button>
                    </div>
                </div>
            </section>



            {/* Most Popular Categories */}
            <section className="container mx-auto px-4 py-12">
                <h1 className="text-2xl md:text-3xl font-bold mb-6">
                    Most Popular Categories
                </h1>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                    {mostPopularItem.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center border rounded-lg p-4 hover:shadow-md transition"
                        >
                            <img
                                src={item.img}
                                alt={item.btn}
                                className="w-24 h-24 object-contain mb-4"
                            />
                            <Link
                                to={`/${item.btn.toLowerCase().replace(/\s+/g, "-")}`}
                                className="font-medium text-lg hover:text-red-600"
                            >
                                {item.btn}
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* Background CTA */}
            <section
                className="w-full bg-cover bg-center bg-no-repeat min-h-[500px] flex flex-col lg:flex-row gap-8 items-center justify-center px-6 lg:px-20 py-12"
                style={{ backgroundImage: "url('backImage.jpg')" }}
            >
                {/* Mobile Mockup */}
                <div className="bg-white rounded-2xl shadow-xl w-[280px] p-6">
                    <img src="frontImage.png" alt="App Preview" className="w-full" />
                </div>

                {/* Text */}
                <div className="text-center lg:text-left max-w-lg text-white">
                    <p className="text-lg font-semibold">Save Time & Money</p>
                    <h1 className="text-3xl lg:text-5xl font-bold my-4">
                        Shop With Us on the Go
                    </h1>
                    <p className="text-base lg:text-lg mb-6">
                        Your weekly shopping routine, delivered at your door with just a
                        click.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                        <a
                            href="#"
                            className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2"
                        >
                            <img src="Appstore_2.png" alt="Apple" />
                        </a>
                        <a
                            href="#"
                            className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2"
                        >
                            <img src="Google-Play.png" alt="Google Play" />
                        </a>
                    </div>
                </div>
            </section>

            {/* Bottom Promo Banners */}
            <section className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="relative">
                    <img src="side1.jpg" alt="" className="w-full rounded-lg" />
                    <div className="absolute inset-0 flex flex-col justify-center items-start px-6 text-black">
                        <h2 className="text-lg font-bold">Taste of Italy</h2>
                        <h3 className="text-xl font-semibold">Great Deals on Your</h3>
                        <h1 className="text-4xl md:text-5xl font-bold">Favorite Pastas</h1>
                        <button className="mt-6 bg-red-600 text-white max-w-[200px] px-6 py-2 rounded-full hover:bg-white hover:text-red-600 border border-red-600 transition">
                            Shop Now
                        </button>
                    </div>
                </div>

                <div className="relative">
                    <img src="side2.jpg" alt="" className="w-full rounded-lg" />
                    <div className="absolute inset-0 flex flex-col justify-center items-start px-6 text-black">
                        <h2 className="text-lg font-bold">Deal of the Week</h2>
                        <h1 className="text-6xl md:text-7xl font-bold">30% Off</h1>
                        <h3 className="text-xl md:text-2xl">Cereal Brands</h3>
                        <button className="mt-6 bg-red-600 text-white max-w-[200px] px-6 py-2 rounded-full hover:bg-white hover:text-red-600 border border-red-600 transition">
                            Shop Now
                        </button>
                    </div>
                </div>
            </section>


            {/* Continue Shopping */}
            <div className="flex justify-center py-12">
                <button className="text-white bg-red-600 hover:bg-white hover:text-red-600 border border-red-600 rounded-full px-8 py-3 transition duration-200">
                    Continue Shopping
                </button>
            </div>
        </>
    );
}
