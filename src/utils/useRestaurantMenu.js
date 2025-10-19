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


// export default useRestaurantMenu;



// import { useState, useEffect } from "react";

// const useRestaurantMenu = (restaurantId) => {
//   const [data, setData] = useState(null); // Initialize with null for better loading state handling

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const MENU_API_URL = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6090126&lng=76.9854526&restaurantId=${restaurantId}&catalog_qa=undefined&submitAction=ENTER`;

//   const fetchData = async () => {
//     try {
//       const response = await fetch(MENU_API_URL, {
//         method: 'POST', // Changed to POST
//         headers: {
//           'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
//         'Accept': 'application/json, text/plain, */*',
//         'Accept-Language': 'en-US,en;q=0.9',
//         'Origin': 'https://www.swiggy.com',
//         'Referer': 'https://www.swiggy.com/',
//           'Cookie': '__SW=jwi5u3nVjBqj6Y1ZTJJM6lOQskj8XAZR; _device_id=e212bd8a-9acb-f6bd-46bc-a145b68d6b09; _gcl_au=1.1.1854615398.1754486465; _ga_76P34S6XQ2=GS2.1.s1755000422$o1$g1$t1755000461$j21$l0$h0; _ga_LK8E6WBG6G=GS2.1.s1755000422$o1$g1$t1755000461$j21$l0$h0; userLocation={%22lat%22:28.6304203%2C%22lng%22:77.21772159999999%2C%22address%22:%22Connaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001%2C%20India%22%2C%22area%22:%22%22%2C%22showUserDefaultAddressHint%22:false}; _ot=REGULAR; fontsLoaded=1; _guest_tid=817571dc-1ab7-45b1-81d9-1a0ae1b0c103; _sid=nid53a94-de59-4905-901f-fbfa0a9cfcb6; _gid=GA1.2.1880025404.1760860699; aws-waf-token=5761a27d-e163-4d2d-9b3d-80a8cdda85b5:BQoAlY84WPsWAAAA:Rv1YUJ3+IzY6Sb5DCHdQdvKCKyuPuKIMOOViHYUo8qhLebg/6CEoUFbXRNwcHQkbdAnH7E/SIB1+aOBXLjIEzYPUpal3Ic3pYbM/KjCQczFOI+TO1ucK3VgiRiWTYCud6hCbN1larU+hBL/7lQNRkTgc4EioQ785CmIkpbDRC+yRe8r43UGBrwDwxsBexDtzFFNzTwK6xpSJ9dk9Nbvbl9XojzmbjOkw+v5yZ+z+uLVppsJhSvHF; _gat_0=1; _ga=GA1.1.1628258731.1754486465; _ga_YE38MFJRBZ=GS2.1.s1760860698$o33$g1$t1760861114$j60$l0$h0; _ga_34JYJ0BCRN=GS2.1.s1760860698$o33$g1$t1760861114$j60$l0$h0'
//         },
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const json = await response.json();
//       setData(json);
//     } catch (error) {
//       console.error("Failed to fetch menu data:", error);
//       // You might want to handle the error state here
//       setData(null);
//     }
//   };

//   return data;
// };

// export default useRestaurantMenu;