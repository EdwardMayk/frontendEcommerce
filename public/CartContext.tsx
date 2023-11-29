import React, { createContext, useContext, ReactNode, useState } from 'react';

interface CartContextProps {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
}

interface CartItem {
    product: Product;
    quantity: number;
}

interface Product {
    name: string;
    price: number;
    image: string;
    description: string;
    uuid: string;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (item: CartItem) => {
        setCart((prevCart) => [...prevCart, item]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCartContext = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCartContext must be used within a CartProvider');
    }
    return context;
};
