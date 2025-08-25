import MenuCard from "./MenuCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./RestaurantDetails.css";

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
      //   console.log(data);
      //   console.log(data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards);
      //   console.log(data.data.cards[0].card.card.text);
    } catch (err) {
      console.error("Failed to fetch menu from backend:", err);
    }
  };

  // useEffect to make an api call via api recieved from the component in home page

  useEffect(() => {
    fetchMenu(MENUAPI);
  }, []);

  const outerMenuCards =
    outerData.length === 0
      ? []
      : outerData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const restaurantName =
    outerData.length === 0 ? [] : outerData.data.cards[0].card.card.text;
  return (
    <div className="res-details-card">
      <h2>{restaurantName}</h2>

      <div className="menu">
        {outerMenuCards.map((item) => {
          const cardType = item?.card?.card["@type"];
          console.log(item);
          if (
            cardType ===
              `type.googleapis.com/swiggy.presentation.food.v2.ItemCategory` ||
            cardType ===
              `type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory`
          ) {
            const isMenuOpen = openTitle === item.card.card.title;
            const categoryId = item.card.card.categoryId;
            return (
              <div key={categoryId}>
                <div className="header res-headings">
                  <h1>{item.card.card.title}</h1>
                  {cardType ===
                    `type.googleapis.com/swiggy.presentation.food.v2.ItemCategory` && (
                    <button
                      onClick={() => {
                        setOpenTitle(isMenuOpen ? "" : item.card.card.title);
                      }}
                    >
                      {isMenuOpen ? "⬆️" : "⬇️"}
                    </button>
                  )}
                </div>

                <div className="menu-container">
                  {cardType ===
                    `type.googleapis.com/swiggy.presentation.food.v2.ItemCategory` &&
                    item.card.card.itemCards?.map((menu) => {
                      return (
                        <MenuCard
                          data={menu}
                          key={menu.card.info.id}
                          title={openTitle}
                          titleName={item.card.card.title}
                        />
                      );
                    })}

                  {cardType ===
                    `type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory` &&
                    item.card.card.categories?.map((item) => {
                      const isNestedMenuOpen = openTitle === item.title;
                      return (
                        <div key={item.categoryId} className="nested-card">
                          <h1>{item.title}</h1>

                          <button
                            onClick={() => {
                              setOpenTitle(
                                isNestedMenuOpen ? "" : item.title
                              );
                            }} 
                          >
                            {isNestedMenuOpen ? "⬆️" : "⬇️"}

                            
                          </button>

                          <div className="menu-container">
                            {item.itemCards.map((menuItem)=>{
                              console.log("nested-item:",item)
                              return <MenuCard data={menuItem} key={menuItem.card.info.id} title={openTitle} titleName={item.title} />
                            })}
                          </div>
                        </div>
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
