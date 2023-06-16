import { CDN_URL } from "../utils/constants";


export const RestaurantCard = ({resData}) =>{

    const {name, cuisines, area, avgRating,lastMileTravelString, deliveryTime, costForTwoString, cloudinaryImageId} = resData?.data;
    
    return (
        // <div className="res-card">
        //     <img 
        //     className="res-logo"
        //     alt="res-logo"
        //     src={CDN_URL+cloudinaryImageId} />
            
        //     <h3>{name}</h3>
        //     <h5>{cuisines.join(", ")}</h5>
        //     <span>
        //     <h4>{avgRating}</h4>
        //     <h4>{deliveryTime}</h4>
        //     <h4>{costForTwoString}</h4>
        //     </span>
            
        // </div>

        <div className="res-card">
      <img src={CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h5>{cuisines.join(", ")}</h5>
      <h6>{area}</h6>
      <span>
        <h4
          style={
            avgRating < 4 ? { backgroundColor: "red" } : { color: "white" }
          }
        >
          <i className="fa-solid fa-star"></i>
          {avgRating}
        </h4>
        <h4>{lastMileTravelString}</h4>
        <h4>{costForTwoString}</h4>
      </span>
    </div>
    )
}

export default RestaurantCard;