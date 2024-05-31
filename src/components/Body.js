import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {

    //State Variable-Super Power Variable
    const [listOfRestaurants,setListOfRestaurants]=useState([]);
    const [filteredRestaurant,setFilteredRestaurant]=useState([]);
    const [searchText,setSearchText]=useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    useEffect(()=>{
        fetchData();
    },[]);   //comopnent render hone ke baad call hoga ye call back function
 
//https://corsproxy.io/?

    const fetchData = async () =>{
        //const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.1764665&lng=75.7885163&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        //const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.1764665&lng=75.7885163&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        //console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        //setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    
    //console.log(listOfRestaurants);

    const onlineStatus = useOnlineStatus();
    if(onlineStatus===false) 
        return (
            <h1>
                Looks like you are offline!! Please check your Internet Connection
            </h1>
        );

        const {loggedInUser, setUserName}=useContext(UserContext);

            
    return listOfRestaurants.length===0 ? (<Shimmer />) : (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text" className="border border-solid border-black" 
                        value={searchText} 
                        onChange={(e)=>{
                            setSearchText(e.target.value)
                        }}
                    />
                    <button className="px-4 py-2  bg-green-100 m-4 rounded-lg"
                        onClick={()=>{
                            //filter the res cards and update the list
                            //console.log(searchText);
                            const filteredRestaurant=listOfRestaurants.filter(
                                (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setFilteredRestaurant(filteredRestaurant);
                        }} 
                    >Search</button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                <button 
                    className="px-4 py-2 bg-gray-100 rounded-lg" 
                    onClick={()=>{
                        //filter logic here
                        const filteredList=listOfRestaurants.filter((res)=>res.info.avgRating>4);
                        //setListOfRestaurants(filteredList);
                        setFilteredRestaurant(filteredList);
                        //console.log(filteredList);
                    }}     
                >
                    Top Rated Restaurants
                </button>
                </div>

                <div className="search m-4 p-4 flex items-center ">
                    <label>Username : </label>&nbsp;
                    <input className="border border-black p-2" value={loggedInUser} onChange={(e)=> setUserName(e.target.value) }/>
                </div>
                
            </div>
            <div className="flex flex-wrap">
                {
                    filteredRestaurant.map((restaurant) => (
                    <Link style={{textDecoration: 'none',color: '#000',}} key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id}>
                            {restaurant.info.promoted ? (
                                <RestaurantCardPromoted resData={restaurant} />
                              ) : (
                                <RestaurantCard resData={restaurant} />
                              )}
                    </Link>
                    ))
                }
            </div>
        </div>
    )
}
export default Body;