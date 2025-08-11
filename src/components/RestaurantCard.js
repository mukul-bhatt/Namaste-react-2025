import {CDN_URL} from "../utils/constants";
import "./RestaurantCard.css";

const RestaurantCard = ({data}) => {
    const {name, avgRating, cuisines, costForTwo, cloudinaryImageId} = data;
    return (
      <div className="res-card">
        <img
          src ={ CDN_URL + cloudinaryImageId }
          alt="restaurant_image"
          width="200px"
          height="200px"
        />
        <h2>{name}</h2>
        <p>{avgRating} ⭐️</p>
        <p>{cuisines.join(', ')} </p>
        <p>{costForTwo}</p>
      </div>
    );
  };

export default RestaurantCard;