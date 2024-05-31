import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
    const [resInfo,setResInfo]=useState(null);
    useEffect(()=> {
        fetchData();
    },[]);

    const fetchData = async () => {
        //logic to fetch
        //const data = await fetch(MENU_API + resId);
        //const json = await data.json();
        //setResInfo(json.data);
    };

    return "Dummy Info";
}

export default useRestaurantMenu;