import {useState, useEffect} from "react";

const useRestaurantMenu = (restaurantId) => {

    const [data, setData] = useState([]);
    
    useEffect(()=>{
        fetchData();
    }, [])

    const MENUAPI = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6090126&lng=76.9854526&restaurantId=${restaurantId}&catalog_qa=undefined&submitAction=ENTER`;
    

    const fetchData = async () => {

        const data = await fetch(MENUAPI);
        const json =  await data.json();
        setData(json);


    }

    // console.log("menudata", data);
    return data;


}


export default useRestaurantMenu;