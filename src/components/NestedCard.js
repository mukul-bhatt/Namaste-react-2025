import MenuCard from "./MenuCard";
import "./NestedCard.css";

const NestedCard = ({item, openTitle, setOpenTitle}) => {

  const isNestedMenuOpen = openTitle === item.title;  // check implemented using title name - i think using id is better, so that i never get into this bug ever again
  return (
    <div>
      
      <div  className="nested-headings">

      <h1>{item.title}</h1>

      <button onClick={() => { setOpenTitle(isNestedMenuOpen ? "" : item.title) }}>
        {isNestedMenuOpen ? "⬆️" : "⬇️"}
      </button>

      </div>

      {/* Nested items  */}
     {isNestedMenuOpen && <div>
        {item.itemCards.map((menuItem) => {
          console.log("menuItem", menuItem);
          return (
            <MenuCard 
              data={menuItem}
              key={menuItem.card.info.id}
              title={openTitle}
              categoryId={item.title}
            />
          );
        })}
      </div>}
    </div>
  );
};

export default NestedCard;