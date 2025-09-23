import { useState } from "react";
import { useCart } from "./CartContext";

export default function Babies() {
  const { addToCart } = useCart();

  const AddToCart = (item, quantity) => {
    addToCart({ ...item, quantity });
    alert("Product Added Successfully");
  };

  const dealsImg = [
    { img: "/babies2.jpg", name: "Baby Body Powder", price: "$ 6.99", category: "Deals" },
    { img: "/babies4.jpg", name: "Milk-Based Infant Formula Powder 12.5 oz.", price: "$ 8.49", category: "Deals" },
    { img: "/babies5.jpg", name: "Size 5 Diapers Super Pack 66 ct.", price: "$ 9.99", category: "Most Popular" },
    { img: "/babies6.jpg", name: "Size 2 Diapers Super Pack 66 ct.", price: "$ 5.99", category: "Deals" },
    { img: "/babies7.jpg", name: "Size 1 Diapers Super Pack 66 ct.", price: "$ 6.99", category: "Deals" },
    { img: "/babies8.jpg", name: "Unscented Baby Wipes 64 ct.", price: "$ 5.99", category: "Deals" },
    { img: "/babies9.jpg", name: "Baby Shampoo", price: "$ 8.49", category: "Most Popular" },
    { img: "/babies10.jpg", name: "Baby Lotion", price: "$ 9.99", category: "Most Popular" },
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
    <div className="px-4 py-16">
      <h1 className="font-bold text-3xl md:text-5xl mb-8 text-center">Babies</h1>

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
