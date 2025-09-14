import "./MenuCard.css";


const IMG_CDN_URL = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/`;

const MenuCard = ({data}) =>{

    const {name, defaultPrice, finalPrice, price, description, imageId, ratings} = data.card.info;
        return (
            <div className="menu-card">
                <div className="left">
                    <h2>{name}</h2>
                    <h3>₹ {defaultPrice/100 || finalPrice/100 || price/100} </h3>
                    <h3>{ratings.aggregatedRating.rating}⭐️</h3>
                    <h4>
                    {
                        description && typeof description === "string"
                        ? description.slice(0, 150) + (description.length > 150 ? "..." : "")
                        : "No description available"
                    }
                    </h4>
                </div>
    
               
    
                <div className="right">
                    <img src={IMG_CDN_URL + imageId} />
                </div>
    
            </div>
        )

    }
    


export default MenuCard;    


