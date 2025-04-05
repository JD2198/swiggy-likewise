import React, { useState, useEffect } from "react";

import RestaurantCard from "./RestaurantCard";
import resLst from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {

const [listOfRestaurant, setlListOfRestaurant] = useState([]);
const [filteredRestaurant, setFilteredRestaurant] = useState([]);

const [searchText, setSearchText] = useState("");

// Whenever state variables update, react triggers a reconciliation cycle(re-renders the component) 
console.log("Body rendered");

useEffect(()=>{
    // console.log("useEffect called");
    fetchData();
}, []);

const fetchData= async () => {

    try{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();

    console.log(json);
    setlListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    } catch (error) {
        console.error("Error fetching restaurant data:", error);
    }

};


    return listOfRestaurant?.length === 0 ? (
    <Shimmer/>
    ) : 
    
    (
        <div className="body">
            <div className="filter flex">
                <div className="px-4 py-2">
                    <input 
                    className="search-box border border-solid border-black" 
                    type="text" 
                    value={searchText} 
                    onChange={
                        (e) => {
                        setSearchText(e.target.value);
                    }}/>
                    <button className="mx-2 my-2  px-4 py-2 bg-cyan-100 cursor-pointer"
                     onClick={() => {
                        const filteredRestaurant = listOfRestaurant.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurant(filteredRestaurant);
                    }}>
                        Search</button>
                </div>    
                <div className="px-4 py-2 flex items-center">
                <button className="filter-btn mx-2 my-2 px-4 py-2  bg-cyan-100 cursor-pointer " onClick={() => {

                    const filteredList = listOfRestaurant.filter(
                    (res) => res.info.avgRating > 4.5
                    );
                    setlListOfRestaurant(filteredList);

                    }}> Top rated restaurants

                </button>
                </div>

                
            </div>
            <div className="flex flex-wrap">                
               
                {filteredRestaurant?.map((restaurant) => (
                    <Link 
                        key={restaurant.info.id}
                        to= {"/restaurants/" + restaurant.info.id}

                    >
                    <RestaurantCard  resData = {restaurant}/>
                    </Link>
                ))}
                
            </div>
        </div>
    )
}

export default Body;