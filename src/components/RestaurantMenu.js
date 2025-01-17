import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {

    const [resMenuInfo, setResMenuInfo] = useState(null);

    const {resId} = useParams();
    

    useEffect(() => {
        fetchMenuData();
    }, [])

    const fetchMenuData = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();

        setResMenuInfo(json.data); // taking only data part from the whole api n putting in resMenuInfo
    }
    if (resMenuInfo === null) return <Shimmer/>;
    const {name, cuisines, avgRating, costForTwoMessage} = resMenuInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resMenuInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;

    // itemcards is your array so iterating 
    return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{avgRating}</h3>
            <h3>{costForTwoMessage}</h3>
            <h2>Menu</h2>
            <ul>
                {itemCards.map(item => <li key= {item.card.info.id} > {item.card.info.name}- {"Rs."} {item.card.info.defaultPrice/100 || item.card.info.price/100}</li>)}
                
                {/* <li>Coke</li>
                <li>Burger</li> */}
            </ul>
        </div>
    )
}

export default RestaurantMenu;