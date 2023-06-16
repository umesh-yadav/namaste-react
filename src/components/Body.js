
import { useState } from "react";

import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () =>{

    //Local State variable - super powerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);
    const [searchInput, setSearchInput] = useState("");
    

    return (
        <div className="body">
            <div className="search-container">
                <input type="text" id="searchbar" placeholder="type your favourite restaurant" 
            
                onChange={(e)=> {
                    setSearchInput(e.target.value);
                   // console.log(searchInput.length);
                    if(searchInput.length>1){
                            const filteredData = listOfRestaurants.filter(
                                (res)=> res?.data?.name.toLowerCase().includes(searchInput.toLowerCase())
                            );
                            console.log(filteredData);
                    setListOfRestaurants(filteredData);
                     }else{
                        setListOfRestaurants(resList);
                    }

                }}
                value={searchInput}
                />
                <button id="searchbtn" onClick={()=>{
                    const filteredData = listOfRestaurants.filter(
                        (res)=> res?.data?.name.toLowerCase().includes(searchInput.toLowerCase())
                    );
                    setListOfRestaurants(filteredData);
                    if(searchInput===""){
                        setListOfRestaurants(resList);
                    }
                }}>Search</button>
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