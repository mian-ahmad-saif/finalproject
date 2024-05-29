import React, { useContext, useState, createContext } from "react";

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
}

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart(prev => {
            const existingItemIndex = prev.findIndex(cartItem => cartItem.id === item.id);
            if (existingItemIndex > -1) {
                const updatedCart = [...prev];
                updatedCart[existingItemIndex].quantity += item.quantity;
                return updatedCart;
            } else {
                return [...prev, item];
            }
        });
    };

    const removeFromCart = (id) => {
        console.log(id)
        const filterCart = cart.filter((item) => item.id !== id);
        setCart(filterCart);
    }

    const handleQuantity = (id, quantity) => {
        const updatedCart = cart.map((item) => {
            if (item.id === id) {
                return { ...item, quantity };
            }
            return item;
        });
        setCart(updatedCart);
    }

    const value = {
        cart,
        addToCart,
        removeFromCart,
        handleQuantity
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;
