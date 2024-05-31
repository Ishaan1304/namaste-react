import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {

    const {resId}=useParams();
    console.log(resId);

    const resInfo = useRestaurantMenu(resId);  // useRestaurantMenu hook custom we will make

/*

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async ()=> {
        //fetchMenu
        
    }
  */  


    return(
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">Shree Ganga</h1>
            <h3 className="font-bold  text-lg">Chinese, Indian, Italian - Rs.150 for Two</h3>
            <h2>Menu</h2>
            <ul>
                <li>Biryani - Rs.100</li>
                <li>Burger - Rs.100</li>
                <li>Diet Coke - Rs.100</li>
                <li>Sandwich - Rs.100</li>
                <li>Pizza - Rs.100</li>
                <li>Biryani - Rs.100</li>
                <li>Burger - Rs.100</li>
                <li>Diet Coke - Rs.100</li>
                <li>Sandwich - Rs.100</li>
                <li>Pizza - Rs.100</li>
            </ul>
        </div>
    );
}
export default RestaurantMenu;