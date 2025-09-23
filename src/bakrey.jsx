import { useState } from "react";
import { useCart } from "./CartContext";

export default function Bakrey() {
  const { addToCart } = useCart();

  const AddToCart = (item, quantity) => {
    addToCart({ ...item, quantity });
    alert("Product Added Successfully");
  };

  // All Products
  const dealsImg = [
    { img: "/bakrey1.jpg", name: "Soft-Baked Chocolate Chunk Cookies 4 ct.", price: "$ 5.99", category: "Deals" },
    { img: "/bakrey2.jpg", name: "Chocolate Fudge Brownies", price: "$ 6.99", category: "Deals" },
    { img: "/bakrey3.jpg", name: "Banana Chocolate Chip Pound Cake", price: "$ 5.99", category: "Food" },
    { img: "/bakrey4.jpg", name: "Oven-Ready Chocolate Croissants 4 ct.", price: "$ 8.49", category: "Food" },
    { img: "/bakrey5.jpg", name: "Oven-Ready Butter Croissants 4 ct.", price: "$ 9.99", category: "Food" },
    { img: "/bakrey6.jpg", name: "Country White Bread 24 oz.", price: "$ 5.99", category: "Most Popular" },
    { img: "/bakrey7.jpg", name: "100% Whole Wheat Bread 24 oz.", price: "$ 6.99", category: "Most Popular" },
    { img: "/bakrey8.jpg", name: "Everything Bagels, 6 ct.", price: "$ 5.99", category: "Start your Cart" },
    { img: "/bakrey9.jpg", name: "Fresh Brioche Buns 4 ct.", price: "$ 8.49", category: "Start your Cart" },
    { img: "/bakrey10.jpg", name: "Fresh Plain Baguette 12 oz.", price: "$ 9.99", category: "Food" },
  ];

  // Available Filters
  const filters = ["Deals", "Food", "Most Popular", "Start your Cart"];

  const [counts, setCounts] = useState(Array(dealsImg.length).fill(1));
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleIncrement = (index) => {
    const newCounts = [...counts];
    newCounts[index]++;
    setCounts(newCounts);
  };

  const handleDecrement = (index) => {
    const newCounts = [...counts];
    if (newCounts[index] > 1) newCounts[index]--;
    setCounts(newCounts);
  };

  // Handle filter selection
  const toggleFilter = (filter) => {
    setSelectedFilters((prev) =>
      prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]
    );
  };

  // Clear all filters
  const clearFilters = () => {
    setSelectedFilters([]);
  };

  // Filter products
  const filteredProducts =
    selectedFilters.length === 0
      ? dealsImg
      : dealsImg.filter((item) => selectedFilters.includes(item.category));

  return (
    <div className="px-4 py-16">
      <h1 className="font-bold text-3xl md:text-5xl mb-8 text-center">Bakrey</h1>

      <div className="flex flex-col md:flex-row md:gap-6">
        {/* Mobile Filter (horizontal scroll) */}
        <div className="md:hidden flex gap-4 overflow-x-auto pb-4 mb-6">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => toggleFilter(filter)}
              className={`px-4 py-2 rounded-full border whitespace-nowrap ${
                selectedFilters.includes(filter)
                  ? "bg-red-600 text-white border-red-600"
                  : "bg-white text-gray-700 border-gray-300"
              }`}
            >
              {filter}
            </button>
          ))}
          {selectedFilters.length > 0 && (
            <button
              onClick={clearFilters}
              className="px-4 py-2 rounded-full bg-gray-200 text-gray-700 whitespace-nowrap"
            >
              Clear
            </button>
          )}
        </div>

        {/* Sidebar Filter for Desktop */}
        <div className="hidden md:block w-64 p-4 border rounded-lg shadow-sm bg-white">
          <h1 className="text-xl font-semibold">Filter by</h1>
          <hr className="my-4" />
          <h2 className="text-lg mb-3">Category</h2>
          <div className="space-y-2 text-sm">
            {filters.map((filter) => (
              <div className="flex items-center gap-2" key={filter}>
                <input
                  type="checkbox"
                  checked={selectedFilters.includes(filter)}
                  onChange={() => toggleFilter(filter)}
                  id={filter}
                />
                <label htmlFor={filter}>{filter}</label>
              </div>
            ))}
          </div>
          {selectedFilters.length > 0 && (
            <button
              onClick={clearFilters}
              className="mt-6 w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
            >
              Clear Filters
            </button>
          )}
        </div>

        {/* Products Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 flex-1">
          {filteredProducts.map((item, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-md bg-white p-4 flex flex-col"
            >
              <span className="w-max px-3 py-1 bg-red-600 text-white text-xs rounded-full">
                {item.category}
              </span>
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-40 object-cover rounded-md my-3"
              />
              <p className="text-gray-800 font-medium">{item.name}</p>
              <h1 className="text-red-600 text-lg font-bold">{item.price}</h1>

              <div className="mt-auto">
                <div className="flex justify-center items-center border rounded-md mt-3">
                  <button
                    onClick={() => handleDecrement(index)}
                    className="px-3 py-1"
                  >
                    -
                  </button>
                  <p className="px-4">{counts[index]}</p>
                  <button
                    onClick={() => handleIncrement(index)}
                    className="px-3 py-1"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => AddToCart(item, counts[index])}
                  className="w-full mt-3 py-2 bg-stone-900 text-white rounded-lg hover:bg-red-600 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}

          {filteredProducts.length === 0 && (
            <p className="col-span-full text-center text-gray-500">
              No products found for selected filters.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
