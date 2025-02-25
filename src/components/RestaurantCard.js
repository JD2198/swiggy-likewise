import React from "react";
import {CDN_URL} from "../utils/constants";

const RestaurantCard = (props) => {

    // const {resName, cuisine} = props;

    const {resData} = props;

    const {cloudinaryImageId,name,cuisines,avgRating, sla} = resData.info;  // optional chaining?
    return (
        <div className="bg-blue-100 border-b-black border-2 w-75 m-4 p-4 items-center">
            <img className="" alt="res-logo" src={ CDN_URL+cloudinaryImageId}></img>
            {/* <h4>{resName}</h4> */}
            <h4 className="font-extrabold py-4">{name}</h4>    
            <h5>{cuisines.join(", ")}</h5>
            <h5>{avgRating}</h5>
            <h5>{sla.slaString}</h5>
        </div>
    )
}

export default RestaurantCard;