import { configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
    // Store will have slices

    reducer: {
        cart: cartReducer,
    },
  },  
);

export default appStore;