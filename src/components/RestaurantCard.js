import { CDN_URL } from "../utils/constants";


export const RestaurantCard = ({resData}) =>{

    const {name, cuisines, avgRating, deliveryTime, costForTwoString, cloudinaryImageId} = resData?.data;
    
    return (
        <div className="res-card">
            <img 
            className="res-logo"
            alt="res-logo"
            src={CDN_URL+cloudinaryImageId} />
            <div className="res-details">
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{deliveryTime}</h4>
            <h4>{costForTwoString}</h4>
            </div>
        </div>
    )
}

export default RestaurantCard;