import RestaurantCard from "./RestaurantCard";
import "./Body.css";
import Shimmer from "./Shimmer";
import SubHeader from "./SubHeader";
import { Link } from "react-router";
import { useState, useEffect } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

export const fetchData = async (setRestaurantsData) => {
  setRestaurantsData([]);
  const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6304203&lng=77.21772159999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING#"
  );
  const json = await data.json();
  // console.log(json);
  // Here i need to use optional chaining - learn before using
  setRestaurantsData(
    json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
  );
};

const Body = () => {

  const [restaurantsData, setRestaurantsData] = useState([]);



  useEffect(() => {
    fetchData(setRestaurantsData);
  }, []);

  const status = useOnlineStatus();

  if(!status) return <h1> Oops!! Looks like you are offline. Please check your internet </h1>

  if (restaurantsData.length === 0) {
    return (
      <div className="shimmer-grid">
        {Array(8).fill("").map((ele, index) => (
            <Shimmer key={index} />
          )
        )}
      </div>
    );
  }

  return (
    <div className="body">
      <SubHeader
        restaurantsData={restaurantsData}
        setRestaurantsData={setRestaurantsData}
      />
      <div className="res-container">
        {/* {console.log("restaurants", restaurantsData)} */}
        {restaurantsData.map((obj) => {
          return(
            <div key={obj.info.id}>
            <Link to={`/restaurant/${obj.info.id}`} >
            <RestaurantCard data={obj}  />
            </Link>
            </div>
          ) 
        })}
      </div>
    </div>
  );
};

export default Body;
