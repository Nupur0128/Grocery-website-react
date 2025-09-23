import { useState } from "react";
import { useCart } from "./CartContext";

export default function PersonalHygiene() {
  const { addToCart } = useCart();

  const AddToCart = (item, quantity) => {
    addToCart({ ...item, quantity });
    alert("Product Added Successfully");
  };

  const dealsImg = [
    { img: "/personal1.jpg", name: "Toilet Paper, 100 sheets", price: "$ 5.99", category: "Deals" },
    { img: "/personal2.jpg", name: "Cleaning Sponge", price: "$ 4.49", category: "Deals" },
    { img: "/personal3.jpg", name: "Floor Liquid Cleaner", price: "$ 3.99", category: "Most Popular" },
    { img: "/personal4.jpg", name: "Multi-Purpose Cleaner, Lemon", price: "$ 0.99", category: "Most Popular" },
    { img: "/personal5.jpg", name: "Powder Laundry Detergent", price: "$ 2.69", category: "Deals" },
    { img: "/personal6.jpg", name: "Glass Cleaner Spray", price: "$ 0.99", category: "Most Popular" },
    { img: "/personal7.jpg", name: "Dish Liquid 32.5 oz.", price: "$ 2.69", category: "Deals" },
    { img: "/personal8.jpg", name: "Frying Pan With Lid", price: "$ 0.99", category: "Deals" },
    { img: "/personal9.jpg", name: "Multi-Surface Spray Cleaner", price: "$ 2.69", category: "Most Popular" },
  ];

  const filters = ["Deals", "Most Popular"];
  const [counts, setCounts] = useState(Array(dealsImg.length).fill(1));
  const [selectedFilters, setSelectedFilters] = useState([]);

  const toggleFilter = (filter) => {
    setSelectedFilters((prev) =>
      prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]
    );
  };

  const clearFilters = () => setSelectedFilters([]);

  const filteredProducts =
    selectedFilters.length === 0
      ? dealsImg
      : dealsImg.filter((item) => selectedFilters.includes(item.category));

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

  return (
    <div className="p-6 sm:p-16">
      <h1 className="font-bold text-3xl md:text-5xl mb-8 text-center">
        Personal Hygiene
      </h1>

      {/* Mobile: Horizontal Filter Bar */}
      <div className="md:hidden overflow-x-auto mb-8">
        <div className="flex gap-4 min-w-max px-2">
          {filters.map((filter, idx) => (
            <button
              key={idx}
              onClick={() => toggleFilter(filter)}
              className={`px-4 py-2 rounded-full border transition whitespace-nowrap ${
                selectedFilters.includes(filter)
                  ? "bg-red-600 text-white border-red-600"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {filter}
            </button>
          ))}
          {selectedFilters.length > 0 && (
            <button
              onClick={clearFilters}
              className="px-4 py-2 rounded-full bg-stone-900 text-white hover:bg-red-600 transition whitespace-nowrap"
            >
              Clear Filters
            </button>
          )}
        </div>
      </div>

      <div className="flex">
        {/* Desktop Sidebar Filters */}
        <aside className="hidden md:block w-60 p-4 bg-white shadow-md rounded-lg mr-6">
          <h1 className="text-2xl font-semibold">Filter by</h1>
          <hr className="mb-4 mt-6" />
          <h2 className="text-lg font-medium mb-2">Category</h2>
          <div className="space-y-2 text-sm">
            {filters.map((filter, idx) => (
              <div className="flex items-center gap-2" key={filter}>
                <input
                  type="checkbox"
                  id={`filter-${idx}`}
                  checked={selectedFilters.includes(filter)}
                  onChange={() => toggleFilter(filter)}
                />
                <label htmlFor={`filter-${idx}`}>{filter}</label>
              </div>
            ))}
          </div>
          {selectedFilters.length > 0 && (
            <button
              onClick={clearFilters}
              className="mt-4 w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
            >
              Clear Filters
            </button>
          )}
        </aside>

        {/* Product Grid */}
        <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 flex-1">
          {filteredProducts.map((item, index) => (
            <div
              key={index}
              className="w-full border border-stone-200 p-4 rounded-lg shadow-sm hover:shadow-lg transition"
            >
              <span className="px-4 py-1 text-xs font-medium bg-red-600 text-white rounded-full">
                {item.category}
              </span>
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-44 object-cover my-3 rounded-md"
              />
              <p className="text-gray-800">{item.name}</p>
              <h1 className="text-red-600 text-lg font-bold">{item.price}</h1>
              <div className="mt-3">
                <div className="flex justify-center items-center border border-stone-300 gap-6 py-1 rounded-md">
                  <button
                    onClick={() => handleDecrement(index)}
                    className="px-2 text-lg font-bold"
                  >
                    -
                  </button>
                  <p className="text-center w-8">{counts[index]}</p>
                  <button
                    onClick={() => handleIncrement(index)}
                    className="px-2 text-lg font-bold"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => AddToCart(item, counts[index])}
                  className="w-full mt-3 py-2 bg-stone-950 text-white rounded-full hover:bg-red-600 hover:underline transition"
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
        </main>
      </div>
    </div>
  );
}
