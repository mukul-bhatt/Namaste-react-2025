import swiggyData from "../utils/data";
import RestaurantCard from "./RestaurantCard";
import "../index.css";
import { useState } from "react";


const Body = () => {

  const [restaurantsData, setRestaurantsData] = useState(swiggyData);

  const filterRestaurants = (restaurants) => {
    const filteredRestaurants = restaurants.filter(
      (res) => res.info.avgRating >= 4.5
    );
    setRestaurantsData(filteredRestaurants);
  };

  
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => filterRestaurants(swiggyData)}
        >
          Top rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {restaurantsData.map((obj) => {
          return <RestaurantCard data={obj.info} key={obj.info.id} />;
        })}
      </div>
    </div>
  );
};

export default Body;
