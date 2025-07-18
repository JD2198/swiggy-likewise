import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import {addItems} from '../utils/cartSlice';

const MenuItemLists = ({items}) => {

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
            // dispatch an action
        dispatch(addItems(item))

    }

    return (

        <div>
           {items.map((item) => (
            <div
             data-testid = "foodItems"
             key={item.card.info.id}  className="p-2 m-2 border-gray-200 border-b-2 justify-items-left flex justify-between">
                <div className="w-9/12">
                    <div className="py-2">
                         <span className="font-bold px-2">{item.card.info.name}</span>
                    
                        <span className="">₹ {item.card.info.price/100 || item.card.info.defaultPrice/100}</span>
                    </div> 
                        <p className="text-xs">{item.card.info.description }</p>   
                </div> 
                <div className="w-3/12 p-4">
                    <div className="absolute">
                    <button onClick={() => handleAddItem(item)} className="bg-amber-50  font-black shadow-2xl rounded-xl px-2 cursor-pointer text-green-800 m-1">Add +</button>
                    </div>
                    <img className="w-full " src= {CDN_URL + item.card.info.imageId} />
                    
                </div>   
            </div>
           ))}
        </div>
    );
};

export default MenuItemLists;  