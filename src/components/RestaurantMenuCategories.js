import { useState } from 'react';
import MenuItemLists from './MenuItemLists';



const RestaurantMenuCategories = ({data}) => {

    console.log({data});
    
    const [showItems, setShowItems] = useState(false);

    // this function will show and hide our item list on click 
    const handleClickMenuItems = () => {
        setShowItems(!showItems);
    }

    return (
        <div>
            {/* Accordian header */}
            
            <div className="w-6/12 mx-auto bg-gray-50 my-4 shadow-2xl p-4">
                <div className='flex justify-between cursor-pointer' onClick={handleClickMenuItems}>
                    <span className="font-extrabold">{data.title} ({data.itemCards.length})</span>
                    <span>⬇️</span>
                </div>

                <div>
                {showItems && <MenuItemLists items={data.itemCards}/>}
                </div>
                
            </div>

            {/* Accordian body */}
        </div>
    )
};

export default RestaurantMenuCategories;