import {CDN_URL} from "../utils/constants";
import "./RestaurantCard.css";

const RestaurantCard = ({data}) => {

    const {info, cta} = data;
    const {name, avgRating, cuisines, costForTwo, cloudinaryImageId, aggregatedDiscountInfoV3} = info;
    const {header = "", subHeader = ""} = aggregatedDiscountInfoV3 || {};
    const {link} = cta;

    const handleClick = () => {
      console.log(link);
    }

    return (
      <div className="res-card" onClick={handleClick}>
        {(header || subHeader) &&  <label>{header + (subHeader ? " " + subHeader : "")}</label>}
        
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

// Higher Order Components
  export const withLabel = (RestaurantCard) => {
    return (props) => {
      return(
        <>
        <label>Items at ₹99</label>
        <RestaurantCard {...props}/>
        </>
      )
    }
  }


export default RestaurantCard;