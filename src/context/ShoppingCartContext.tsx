import React, { createContext, useContext, useReducer, ReactNode } from 'react';

interface ShoppingCartContextProps {
    children: ReactNode;
}

interface Product {
    name: string;
    price: number;
    image: string;
    description: string;
    uuid: string;
}

interface CartItem {
    product: Product;
    quantity: number;
}

interface ShoppingCartState {
    selectedProduct: Product | null;
    cart: CartItem[];
}

type ShoppingCartAction =
    | { type: 'SELECT_PRODUCT'; payload: Product }
    | { type: 'ADD_TO_CART'; payload: { product: Product; quantity: number } };

const ShoppingCartContext = createContext<{
    state: ShoppingCartState;
    dispatch: React.Dispatch<ShoppingCartAction>;
} | undefined>(undefined);

const shoppingCartReducer = (
    state: ShoppingCartState,
    action: ShoppingCartAction
): ShoppingCartState => {
    switch (action.type) {
        case 'SELECT_PRODUCT':
            return { ...state, selectedProduct: action.payload };
        case 'ADD_TO_CART':
            const existingCartItemIndex = state.cart.findIndex(
                (item) => item.product.uuid === action.payload.product.uuid
            );

            if (existingCartItemIndex !== -1) {
                const updatedCart = [...state.cart];
                updatedCart[existingCartItemIndex].quantity += action.payload.quantity;
                return { ...state, cart: updatedCart };
            } else {
                return {
                    ...state,
                    cart: [...state.cart, { product: action.payload.product, quantity: action.payload.quantity }],
                };
            }
        default:
            return state;
    }
};

export const ShoppingCartProvider: React.FC<ShoppingCartContextProps> = ({ children }) => {
    const [state, dispatch] = useReducer(shoppingCartReducer, {
        selectedProduct: null,
        cart: [],
    });

    return (
        <ShoppingCartContext.Provider value={{ state, dispatch }}>
            {children}
        </ShoppingCartContext.Provider>
    );
};

const useShoppingCartContext = () => {
    const context = useContext(ShoppingCartContext);
    if (!context) {
        throw new Error('useShoppingCartContext must be used within a ShoppingCartProvider');
    }
    return context;
};

export { useShoppingCartContext };
