import React,{createContext, useState} from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext1=createContext(null);

const getDefaultCart1=()=>{
    let cart={};
    for (let index = 0; index < all_product.length; index++) {
        cart[index]=0;
        
    }
    return cart;
}

const ShopContextProvider1=(props)=>{
    const [cartItems,setCartItems]=useState(getDefaultCart1());
    

    const addToCart1=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        console.log(cartItems);
    }
    const removeFromCart1=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
    }

    const getTotalCartAmount1=()=>{
        let totalAmount=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo=all_product.find((product)=>product.id===Number(item))
                totalAmount+=itemInfo.new_price*cartItems[item];
            }
        }
        return totalAmount;
    }

    const getTotalCartItems1=()=>{
        let totalItem=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalItem+=cartItems[item];
            }
        }
        return totalItem;
    }

    const contextValue={getTotalCartItems1,getTotalCartAmount1,all_product,cartItems,addToCart1,removeFromCart1};
    return(
        <ShopContext1.Provider value={contextValue}>
            {props.children}
        </ShopContext1.Provider>
    )
}
export default ShopContextProvider1;