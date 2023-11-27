import Image from 'next/image';
import React, { useState } from 'react';
import { useProductContext } from '@/context/ProductContext';
import Navbar from '@/components/navbar';
import Link from 'next/link';
import { useShoppingCartContext } from '@/context/ShoppingCartContext';

interface ProductInterfaceProps {
    name: string;
    price: number;
    image: string;
    description: string;
}


const ProductInterface: React.FC = () => {
    const { selectedProduct } = useProductContext();
    const { state, dispatch } = useShoppingCartContext();
    const [quantity, setQuantity] = useState(1);


    if (!selectedProduct) {
        return null;
    }

    const { name, price, image, description, uuid } = selectedProduct;

    const handleDecrease = () => {
        // No permitir que la cantidad sea menor que 1
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleIncrease = () => {
        // Puedes establecer una cantidad máxima si es necesario
        setQuantity(quantity + 1);
    };

    const handleAddToCart = () => {
        if (uuid) {
            dispatch({ type: 'ADD_TO_CART', payload: { product: { name, price, image, description, uuid }, quantity } });
            state.cart.map((item) => {
                console.log('item', item);
            }
            )
            console.log('product added to cart', { name, price, image, description, uuid, quantity });
        }
    };



    return (
        <>
            <Navbar />

            <div className="bg-white py-6 sm:py-8 lg:py-12" style={{ marginLeft: "200px", marginRight: "200px" }}>
                <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                    <div className="grid gap-8 md:grid-cols-2">
                        <div className="grid gap-4 lg:grid-cols-5">
                            <div className="order-last flex gap-4 lg:order-none lg:flex-col">
                                <div className="overflow-hidden rounded-lg bg-gray-100">
                                    <Image src={image} width={500} height={300} alt="logo_dashboard2" />
                                </div>
                                <div className="overflow-hidden rounded-lg bg-gray-100">
                                    <Image src={image} width={500} height={300} alt="logo_dashboard2" />
                                </div>
                                <div className="overflow-hidden rounded-lg bg-gray-100">
                                    <Image src={image} width={500} height={300} alt="logo_dashboard2" />
                                </div>
                            </div>
                            <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4 w-auto">
                                <Image src={image} width={800} height={300} alt="logo_dashboard2" />
                                <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
                                    sale
                                </span>
                                <a
                                    href="#"
                                    className="absolute right-4 top-4 inline-block rounded-lg border bg-white px-3.5 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:text-gray-700 md:text-base"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                        />
                                    </svg>
                                </a>
                            </div>

                        </div>
                        <div className="md:py-8">
                            <div className="mb-2 md:mb-3">
                                <span className="mb-0.5 inline-block text-gray-500">Fancy Brand</span>
                                <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                                    {name}
                                </h2>
                            </div>
                            <div className="mb-6 flex items-center gap-3 md:mb-10">
                                <div className="flex h-7 items-center gap-1 rounded-full bg-indigo-500 px-2 text-white">
                                    <span className="text-sm">4.2</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>
                                <span className="text-sm text-gray-500 transition duration-100">
                                    56 ratings
                                </span>
                            </div>
                            {/* 
                            <div className="mb-4 md:mb-6">
                                <span className="mb-3 inline-block text-sm font-semibold text-gray-500 md:text-base">
                                    Color
                                </span>
                                <div className="flex flex-wrap gap-2">
                                    <span className="h-8 w-8 rounded-full border bg-gray-800 ring-2 ring-gray-800 ring-offset-1 transition duration-100" />
                                    <button
                                        type="button"
                                        className="h-8 w-8 rounded-full border bg-gray-500 ring-2 ring-transparent ring-offset-1 transition duration-100 hover:ring-gray-200"
                                    />
                                    <button
                                        type="button"
                                        className="h-8 w-8 rounded-full border bg-gray-200 ring-2 ring-transparent ring-offset-1 transition duration-100 hover:ring-gray-200"
                                    />
                                    <button
                                        type="button"
                                        className="h-8 w-8 rounded-full border bg-white ring-2 ring-transparent ring-offset-1 transition duration-100 hover:ring-gray-200"
                                    />
                                </div>
                            </div> */}
                            <div className="mb-4 md:mb-6">
                                <div className="w-32 mb-2">
                                    <span className="inline-block text-sm font-semibold text-gray-500 md:text-base">
                                        QuantityDADASDS
                                    </span>
                                    <div className="relative flex flex-row w-full h-10 mt-6 bg-transparent rounded-lg">
                                        <button
                                            onClick={handleDecrease}
                                            className="w-20 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-150 hover:bg-gray-400"
                                        >
                                            <span className="m-auto text-2xl font-thin">
                                                -
                                            </span>
                                        </button>
                                        <input
                                            type="number"
                                            value={quantity}
                                            onChange={(e) => setQuantity(parseInt(e.target.value, 10) || 1)}
                                            className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-300 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-150 focus:outline-none text-md hover:text-black"
                                        />
                                        <button
                                            onClick={handleIncrease}
                                            className="w-20 h-full text-gray-600 bg-gray-300 rounded-r outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-150 hover:text-gray-700 hover:bg-gray-400"
                                        >
                                            <span className="m-auto text-2xl font-thin">+</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-4">
                                <div className="flex items-end gap-2">
                                    <span className="text-xl font-bold text-gray-800 md:text-2xl">
                                        S/. {price}
                                    </span>
                                    <span className="mb-0.5 text-red-500 line-through">S/. 30.00</span>
                                </div>
                                <span className="text-sm text-gray-500">Incluye IGV</span>
                            </div>
                            <div className="mb-6 flex items-center gap-2 text-gray-500">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                                    />
                                </svg>
                            </div>
                            <div className="flex gap-2.5">
                                <Link href={`/cart`}>
                                    <button
                                        onClick={handleAddToCart}
                                        className="inline-block flex-1 rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 sm:flex-none md:text-base"
                                    >
                                        Añadir al carrito
                                    </button>
                                </Link>
                                <a
                                    href="#"
                                    className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
                                >
                                    Comprar Ahora
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mx-auto max-w-screen-xl px-4 md:px-24 md:py-8">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                        Descripción
                    </h3>
                    <p className="text-gray-700">
                        {description}
                    </p>
                    {/* <p className="text-gray-700 mt-4">
                        Disponible en varios colores para adaptarse a tu estilo, este pullover ofrece una combinación de comodidad y estilo. La alta calificación de 4.2 basada en 56 opiniones demuestra la satisfacción de nuestros clientes con este elegante pullover.
                    </p> */}
                </div>
            </div >
        </>
    )
};



export default ProductInterface;
