
import { useDispatch, useSelector } from "react-redux";
import MenuItemLists from "./MenuItemLists";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart())
    }
    return (
        <>
        <div className="text-center text-2xl font-medium m-4">Cart</div>
        
        <div className="w-6/12 m-auto text-center">
            <button onClick={handleClearCart} className="bg-amber-500 text-xl p-2 cursor-pointer">Clear Cart</button>
            {cartItems.length ===0 && <div className="m-10 text-2xl font-black">Cart is empty!! Add items to the cart</div>}
            <MenuItemLists items = {cartItems}/>
        </div>
        
        </>
    )
}

export default Cart;