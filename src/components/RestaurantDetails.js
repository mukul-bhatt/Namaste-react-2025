import MenuCard from "./MenuCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./RestaurantDetails.css";
import NestedCard from "./NestedCard";

const RestaurantDetails = () => {
  const [outerData, setOuterData] = useState([]);
  const [openTitle, setOpenTitle] = useState("");

  const { restaurantId } = useParams();

  const MENUAPI = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6090126&lng=76.9854526&restaurantId=${restaurantId}&catalog_qa=undefined&submitAction=ENTER`;

  const fetchMenu = async (url) => {
    try {
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();
      console.log("Menu data from backend:", data);

      setOuterData(data);
    } catch (err) {
      console.error("Failed to fetch menu from backend:", err);
    }
  };

  // useEffect to make an api call via api recieved from the component in home page

  useEffect(() => {
    fetchMenu(MENUAPI);
  }, []);


  // Here useMemo can be used read about it, also graphQl can be used when data is large and only a small poriton of it is being used - do check it out
  const outerMenuCards =
    outerData.length === 0
      ? []
      : outerData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const restaurantName =
    outerData.length === 0 ? [] : outerData.data.cards[0].card.card.text;


  return (
    <div className="res-details-card">
      <h2 className="res-name">{restaurantName}</h2>

      <div className="menu">
        {outerMenuCards.map((item) => {

          const cardType = item?.card?.card["@type"];

          if (
            cardType ===
              `type.googleapis.com/swiggy.presentation.food.v2.ItemCategory` ||
            cardType ===
              `type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory`
          ) {

            const categoryId = item.card.card.categoryId;
            const isMenuOpen = openTitle === categoryId;    // check implemented using id's
            const CategoryName = item.card.card.title;
            return (
              <div key={categoryId} className="menu-container">
                <div className="menu-headings">

                  <h1>{CategoryName}</h1>

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
                      return (
                        <NestedCard item={item} openTitle={openTitle} setOpenTitle={setOpenTitle} key={item.categoryId}/>
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

