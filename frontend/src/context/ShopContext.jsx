import React, { createContext, useState } from "react";
import {product} from "../assets/assets"

// Create the global context object
export const ShopContext = createContext()


// Define the provider component that will wrap the app or parts of it
const ShopContextProvider = ({children}) => {
  // State to hold all products (like the menu, the reservation book etc.)
    const [products, setProducts] = useState(product)
    // Base backend URL - used throughout the app for API calls
    const url = "http://localhost:4000"

     // Auth token state, initialized from localStorage
    const [token, setToken] = useState(() => {

    try {
      const savedToken = localStorage.getItem("token");
      return savedToken || "";   //  --------------> If it's not found, then it return empty string
    } catch (error) {
      console.error("Error reading token from localStorage", error);
      return "";
    }
  });

    return (
       // It Provides the values to any component right here
        <ShopContext.Provider value={{products, url, token, setToken}}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;