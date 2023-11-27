import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Product {
    name: string;
    image: string;
    price: number;
    brand?: string | null; // Make it optional
    uuid: string;
    description: string;
}

interface ProductContextProps {
    selectedProduct: Product | null;
    setProduct: (product: Product) => void;
}

const ProductContext = createContext<ProductContextProps | undefined>(undefined);

interface ProductProviderProps {
    children: ReactNode;
}

export const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(() => {
        // Check if window is defined before accessing it
        const storedProduct = typeof window !== 'undefined' ? window.localStorage.getItem('selectedProduct') : null;
        return storedProduct ? JSON.parse(storedProduct) : null;
    });

    const setProduct = (product: Product) => {
        setSelectedProduct(product);
        // Check if window is defined before accessing it
        if (typeof window !== 'undefined') {
            window.localStorage.setItem('selectedProduct', JSON.stringify(product));
        }
    };

    // Clean up local storage when the component is unmounted
    useEffect(() => {
        return () => {
            // Check if window is defined before accessing it
            if (typeof window !== 'undefined') {
                window.localStorage.removeItem('selectedProduct');
            }
        };
    }, []);

    return (
        <ProductContext.Provider value={{ selectedProduct, setProduct }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProductContext = (): ProductContextProps => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error('useProductContext must be used within a ProductProvider');
    }
    return context;
};
