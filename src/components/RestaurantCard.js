import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData}=props;
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,sla} = resData?.info;
    return (
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200 hover:w-[265px]" >
            
            <img className="rounded-lg" alt="res-logo" src={CDN_URL + cloudinaryImageId} />
            
            <h3 className="font-bold py-2 text-lg">{name}</h3>
            {cuisines.join(", ")}<br></br>
            <b>Ratings : {avgRating}⭐</b><br></br>
            Cost for two : {costForTwo}<br></br>
            Delivery Time : {sla.deliveryTime}<br></br>
        </div>
    )
}

//Higher Order Component (useed to enhance the component)
//Input => RestaurantCard => RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard)=>{
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
                    Promoted
                </label>
                <RestaurantCard {...props} />
            </div>
        );
    };
};


export default RestaurantCard;