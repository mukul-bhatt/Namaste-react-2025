import { useRef, useState, useEffect } from "react";
import "./SubHeader.css";

// Need to work on why css is working for button components in this file because no css is imported
//  -- shared css
//  -- css.modules - first read about it properly only then use it

const SubHeader = ({ restaurantsData, setRestaurantsData }) => {
  const [inputValue, setInputValue] = useState("");
//   console.log("inputValue", inputValue);
  const originalDataRef = useRef(restaurantsData);

  const filterRestaurants = (restaurants) => {
    const filteredRestaurants = restaurants.filter(
      (res) => res.info.avgRating >= 4.5
    );
    setRestaurantsData(filteredRestaurants);
  };

  useEffect(() => {
    const resData = originalDataRef.current; // Reset to original data before filtering

    const selectedRestaurant = resData.filter((res) =>
      res.info.name.toLowerCase().includes(inputValue.toLowerCase())
    );

    setRestaurantsData(
      selectedRestaurant.length === 0 || inputValue === ""
        ? originalDataRef.current
        : selectedRestaurant
    );
  }, [inputValue]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="sub-header">
      {/* Buttons */}
      <div className="button-elements">
        <button
          className="filter-btn"
          onClick={() => filterRestaurants(restaurantsData)}
        >
          Top rated Restaurants
        </button>
        <button
          className="filter-btn"
          onClick={() => setRestaurantsData(originalDataRef.current)}
        >
          All Restaurants
        </button>
      </div>

      {/* Search functionality */}

      <div className="search-bar">
        <label htmlFor="input-text" className="sr-only">
          Search Restaurants
        </label>
        <div className="search-input-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="search-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            id="input-text"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Search for restaurants or dishes"
            className="search-input"
          />
        </div>
      </div>
    </div>
  );
};
export default SubHeader;
