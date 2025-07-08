import React from "react";
import {CDN_URL} from "../utils/constants";

const RestaurantCard = (props) => {

    // const {resName, cuisine} = props;

    const {resData} = props;

    // console.log(resData);

    const {cloudinaryImageId,name,cuisines,avgRating, sla} = resData;  // optional chaining?
    return (
        <div data-testid = "resCard" className="bg-blue-100 border-b-black border-2 w-75 h-100 m-4 p-4 items-center">
            <img className="w-40" alt="res-logo" src={ CDN_URL+cloudinaryImageId}></img>
            {/* <h4>{resName}</h4> */}
            <h4 className="font-extrabold py-4">{name}</h4>    
            <h5>{cuisines.join(", ")}</h5>
            <h5>{avgRating}</h5>
            <h5>{sla.slaString}</h5>
        </div>
    )
}

// higher order func
export const withOfferLabel = (RestaurantCard) => {
    return ({}) => {
        return (
            <div>
                <label>10% off</label>
                <RestaurantCard/>
            </div>
        );
    };
}; 

export default RestaurantCard;