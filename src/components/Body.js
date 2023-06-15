
import { useState } from "react";

import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () =>{

    //Local State variable - super powerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);
    

    return (
        <div className="body">
            <div className="search-container">
                <input type="text" id="searchbar" placeholder="type your favourite restaurant" />
                <button id="searchbtn">Search</button>
            </div>
            <div className="filter">
                <button className="filterbtn" onClick={ ()=>{
                    const filteredList = listOfRestaurants.filter(
                        (res)=> res.data.avgRating > 4
                    );
                    setListOfRestaurants(filteredList);
                }}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                 
                {
                    listOfRestaurants.map((restaurant) => (
                        <RestaurantCard key={restaurant.data.id}  resData={restaurant}/>
                    ))
                }
            
            </div>
        </div>
    )
}

export default Body;