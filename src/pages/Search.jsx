import { useState } from "react";

const Search = () => {
  const [searchIterm, setSearchIterm] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchResault, setSearchResault] = useState([]);
  const [searchCategory, setSearchCategory] = useState("name");

  const restaurants = [
    {
      name: "Pasta Palace",
      cuisine: "Italian",
      foodItems: ["Pasta", "Pizza", "Salad"],
    },
    {
      name: "Sushi Express",
      cuisine: "Japanese",
      foodItems: ["Sushi", "Ramen", "Tempura"],
    },
    {
      name: "Taco Town",
      cuisine: "Mexican",
      foodItems: ["Tacos", "Burritos", "Nachos"],
    },
  ];

  const handleInputChange = (e) => {
    setSearchIterm(e.target.value);
  };

  const searchhandling = () => {
    const result = restaurants.filter((restaurant) => {
      const searchTermLower = searchIterm.toLowerCase();
      if (searchCategory === "name") {
        return restaurant.name.toLowerCase().includes(searchTermLower);
      } else if (searchCategory === "cuisine") {
        return restaurant.cuisine.toLowerCase().includes(searchTermLower);
      } else if (searchCategory === "foodItems") {
        return restaurant.foodItems.some((item) =>
          item.toLowerCase().includes(searchTermLower)
        );
      }
      return false;
    });
    setSearchResault(result);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    searchhandling();
  };

  const handleCategorySelect = (category) => {
    setSearchCategory(category);
    setDropdownOpen(false);
  };

  return (
    <form className="max-w-lg mx-auto" onSubmit={handleSearch}>
      <div className="flex items-center">
        <div className="relative">
          <button
            id="dropdown-button"
            className="py-2.5 px-4 text-sm font-medium text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
            type="button"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {searchCategory.charAt(0).toUpperCase() + searchCategory.slice(1)}
            <svg
              className="w-2.5 h-2.5 ml-2.5 inline-block"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1l4 4 4-4"
              />
            </svg>
          </button>
          {dropdownOpen && (
            <div
              id="dropdown"
              className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdown-button"
              >
                <li>
                  <button
                    type="button"
                    onClick={() => handleCategorySelect("name")}
                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Name
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleCategorySelect("cuisine")}
                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Cuisine
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleCategorySelect("foodItems")}
                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Food Items
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="relative w-full">
          <input
            type="search"
            value={searchIterm}
            onChange={handleInputChange}
            id="search-dropdown"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-r-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
            placeholder="Search restaurants..."
            required
          />
          <button
            type="submit"
            className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 19l-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
      {/* Render the search result */}
      <div className="mt-4">
        {searchResault.length > 0 ? (
          <ul className="list-disc pl-5">
            {searchResault.map((restaurant, index) => (
              <li key={index} className="text-gray-900 dark:text-white">
                {restaurant.name} - {restaurant.cuisine}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-900 dark:text-white">No results found</p>
        )}
      </div>
    </form>
  );
};

export default Search;
