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


// 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
//         'Accept': 'application/json, text/plain, */*',
//         'Accept-Language': 'en-US,en;q=0.9',
//         'Origin': 'https://www.swiggy.com',
//         'Referer': 'https://www.swiggy.com/',