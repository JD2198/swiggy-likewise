import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantMenuCategories from "./RestaurantMenuCategories";

const RestaurantMenu = () => {

    const {resId} = useParams();
    const resMenuInfo = useRestaurantMenu(resId);
    
    if (resMenuInfo === null) return <Shimmer/>;
    const {name, cuisines, avgRating, costForTwoMessage} = resMenuInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resMenuInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;    

    const categories = resMenuInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    // console.log(categories);

    // itemcards is your array so iterating     
    return (
        <div className="text-center">
            <h1 className="text-2xl font-bold py-5">{name}</h1>
            <h3>{cuisines.join(", ")} - {costForTwoMessage}</h3>

            {/* Accordians categories */}
           {categories.map((category) => (<RestaurantMenuCategories data={category?.card?.card}/>)) }; 
        </div>
    );   
};

export default RestaurantMenu;