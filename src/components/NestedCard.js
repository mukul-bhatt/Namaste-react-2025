import MenuCard from "./MenuCard";

const NestedCard = ({item, openTitle, setOpenTitle}) => {

  const isNestedMenuOpen = openTitle === item.title;  // check implemented using title name - i think using id is better, so that i never get into this bug ever again
  return (
    <div className="nested-card">

      <h1>{item.title}</h1>

      <button onClick={() => { setOpenTitle(isNestedMenuOpen ? "" : item.title) }}>
        {isNestedMenuOpen ? "⬆️" : "⬇️"}
      </button>

      {/* Nested items  */}
      <div className="menu-container">
        {item.itemCards.map((menuItem) => {
          return (
            <MenuCard 
              data={menuItem}
              key={menuItem.card.info.id}
              title={openTitle}
              categoryId={item.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NestedCard;