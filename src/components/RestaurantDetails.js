import MenuCard from "./MenuCard";
import { useState } from "react";
import { useParams } from "react-router";
import "./RestaurantDetails.css";
import NestedCard from "./NestedCard";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantDetails = () => {
  // state for menu is open/closed
  const [openTitle, setOpenTitle] = useState("");

  const { restaurantId } = useParams();

  // fetch data for menu
  const menuData = useRestaurantMenu(restaurantId);


  // Here useMemo can be used read about it, also graphQl can be used when data is large and only a small poriton of it is being used - do check it out
  const outerMenuCards = menuData?.data?.cards?.find(c => c?.groupedCard?.cardGroupMap?.REGULAR?.cards)?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
  const restaurantName = menuData?.data?.cards[0]?.card?.card?.text || [];    // Read about optional chaining and || statement


  return (
    <div className="res-details-card">
      <h2 className="res-name">{restaurantName}</h2>

      <div className="menu">
        {outerMenuCards.map((item) => {
          // console.log(item);
          const cardType = item?.card?.card["@type"];

          if (
            cardType ===
              `type.googleapis.com/swiggy.presentation.food.v2.ItemCategory` ||
            cardType ===
              `type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory`
          ) {

            const categoryId = item.card.card.categoryId;
            const isMenuOpen = openTitle === categoryId;    // check implemented using id's
            const categoryName = item.card.card.title;
            const numOfItems = item?.card?.card?.itemCards?.length;
            // console.log("numofitems", numOfItems) 
            return (
              <div key={categoryId} className="menu-container">
                <div className="menu-headings">
                {cardType ===
                    `type.googleapis.com/swiggy.presentation.food.v2.ItemCategory` ? <h1>{categoryName} ({numOfItems})</h1> : <h1>{categoryName}</h1>}
                  

                  {cardType ===
                    `type.googleapis.com/swiggy.presentation.food.v2.ItemCategory` && (
                    <button
                      onClick={() => {
                        setOpenTitle(isMenuOpen ? "" : categoryId);
                      }}
                    >
                      {isMenuOpen ? "⬆️" : "⬇️"}
                    </button>
                  )}
                </div>

                {/* Menu items for the particular category */}

                <div>
                  {isMenuOpen &&  cardType ===
                    `type.googleapis.com/swiggy.presentation.food.v2.ItemCategory` &&
                    item.card.card.itemCards?.map((menu) => {
                      return (
                        <MenuCard data={menu} key={menu.card.info.id} />
                      );
                    })}

                  {cardType ===
                    `type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory` &&
                    item.card.card.categories?.map((item) => {
                      //  console.log("item",item)
                      return (
                        <NestedCard item={item} openTitle={openTitle} setOpenTitle={setOpenTitle} key={item.categoryId} />
                      );
                    })}
                </div>

              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default RestaurantDetails;


// What's next:
//  - Bug fix : ✅
//  - which approach is better for this bug, category or title ??? ❌
//  - code looks messy - make it beautiful i.e short and easy to read and understand ❌
//  - Remove unnecessary commnets ❌

 