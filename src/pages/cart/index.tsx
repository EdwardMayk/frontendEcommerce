import Navbar from '@/components/navbar';
import React, { useState } from 'react';
import Image from 'next/image';
import { useShoppingCartContext } from '@/context/ShoppingCartContext';



const Cart = () => {
    const { state: { cart }, dispatch } = useShoppingCartContext();
    const [showDeliveryForm, setShowDeliveryForm] = useState(false);

    const calculateTotal = () => {
        let total = 0;
        cart.forEach((item) => {
            total += item.product.price * item.quantity;
        });
        return total.toFixed(2);
    };

    return (
        <>
            <Navbar />

            <div className="bg-gray-100 min-h-screen py-8">
                <div className="container mx-auto px-4">
                    <h1 className="text-2xl font-semibold mb-4">Carrito</h1>

                    <div>
                        <h2 className="sr-only">Steps</h2>

                        <div>
                            <ol
                                className="grid grid-cols-1 divide-x divide-gray-100 overflow-hidden rounded-lg border border-gray-100 text-sm text-gray-500 sm:grid-cols-3"
                            >
                                <li className="flex items-center justify-center gap-2 p-4">
                                    <svg
                                        className="h-7 w-7 shrink-0"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                                        />
                                    </svg>

                                    <p className="leading-none">
                                        <strong className="block font-medium"> Details </strong>
                                        <small className="mt-1"> Some info about you. </small>
                                    </p>
                                </li>

                                <li
                                    className="relative flex items-center justify-center gap-2 bg-gray-50 p-4"
                                >
                                    <span
                                        className="absolute -left-2 top-1/2 hidden h-4 w-4 -translate-y-1/2 rotate-45 border border-gray-100 ltr:border-b-0 ltr:border-s-0 ltr:bg-white rtl:border-e-0 rtl:border-t-0 rtl:bg-gray-50 sm:block"
                                    >
                                    </span>

                                    <span
                                        className="absolute -right-2 top-1/2 hidden h-4 w-4 -translate-y-1/2 rotate-45 border border-gray-100 ltr:border-b-0 ltr:border-s-0 ltr:bg-gray-50 rtl:border-e-0 rtl:border-t-0 rtl:bg-white sm:block"
                                    >
                                    </span>

                                    <svg
                                        className="h-7 w-7 shrink-0"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>

                                    <p className="leading-none">
                                        <strong className="block font-medium"> Address </strong>
                                        <small className="mt-1"> Where we sending it? </small>
                                    </p>
                                </li>

                                <li className="flex items-center justify-center gap-2 p-4">
                                    <svg
                                        className="h-7 w-7 shrink-0"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                                        />
                                    </svg>

                                    <p className="leading-none">
                                        <strong className="block font-medium"> Payment </strong>
                                        <small className="mt-1"> Show us the money. </small>
                                    </p>
                                </li>
                            </ol>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="md:col-span-2">
                            <div className="bg-white rounded-lg shadow-md p-4 mb-4 overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr>
                                            <th className="text-left font-semibold">Producto</th>
                                            <th className="text-left font-semibold">Precio</th>
                                            <th className="text-left font-semibold">Cantidad</th>
                                            <th className="text-left font-semibold">Total</th>
                                            <th className="text-left font-semibold">Acción</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cart.map((item) => (
                                            <tr key={item.product.uuid}>
                                                <td className="py-4">
                                                    <div className="flex items-center">
                                                        <div className="h-16 w-16 mr-4">
                                                            <Image src={item.product.image} width={500} height={300} alt={item.product.name} />
                                                        </div>
                                                        <span className="font-semibold">{item.product.name}</span>
                                                    </div>
                                                </td>
                                                <td className="py-4">${item.product.price.toFixed(2)}</td>
                                                <td className="py-4">{item.quantity}</td>
                                                <td className="py-4">${(item.quantity * item.product.price).toFixed(2)}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="md:col-span-1 mt-4">
                            <div className="bg-white rounded-lg shadow-md p-4">
                                <h2 className="text-lg font-semibold mb-4">Resumen</h2>
                                <div className="mb-4 border border-gray-300 p-4 rounded-lg flex justify-between items-center">
                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            className="form-radio"
                                            name="shippingOption"
                                            onChange={() => setShowDeliveryForm(!showDeliveryForm)}
                                        />
                                        <span className="ml-2 text-sm text-gray-700">Delivery</span>
                                    </label>
                                    <span className="font-semibold text-gray-500">$21.98</span>
                                </div>

                                {showDeliveryForm && (
                                    <div className="">
                                        <div className="">



                                            <div className="container mx-auto">
                                                <div className="inputs w-full max-w-2xl p-6 mx-auto">
                                                    
                                                    <form className="mt-6 border-t border-gray-400 pt-4">
                                                        <div className="flex flex-wrap -mx-3 mb-6">
                                                            <div className="w-full md:w-full px-3 mb-6">
                                                                <label
                                                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                                    htmlFor="grid-text-1"
                                                                >
                                                                    Dirección
                                                                </label>
                                                                <input
                                                                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                                                                    id="grid-text-1"
                                                                    type="text"
                                                                    placeholder="Jirón Andrés Avelino Cáceres 155 (Una cuadra antes...)"
                                                                    required
                                                                />
                                                            </div>

                                                            <div className="w-full md:w-full px-3 mb-6">
                                                                <label
                                                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                                    htmlFor="grid-text-1"
                                                                >
                                                                    Telefono
                                                                </label>
                                                                <input
                                                                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                                                                    id="grid-text-1"
                                                                    type="text"
                                                                    placeholder="+51 999 999 999"
                                                                    required
                                                                />
                                                            </div>

                                                            <div className="w-full md:w-full px-3 mb-6">
                                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                                                    Elige tu Distrito
                                                                </label>
                                                                <div className="flex-shrink w-full inline-block relative">
                                                                    <select className="block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded">
                                                                        <option>Huancayo</option>
                                                                        <option>ElTambo</option>
                                                                        <option>Chilca</option>
                                                                    </select>
                                                                    <div className="pointer-events-none absolute top-0 mt-3  right-0 flex items-center px-2 text-gray-600">
                                                                        <svg
                                                                            className="fill-current h-4 w-4"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            viewBox="0 0 20 20"
                                                                        >
                                                                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div className="mb-4 border border-gray-300 p-4 rounded-lg flex justify-between items-center">
                                    <label className="flex items-center">
                                        <input type="radio" className="form-radio" name="shippingOption" />
                                        <span className="ml-2 text-sm text-gray-700">Recogo en tienda</span>
                                    </label>
                                    <span className="font-semibold text-gray-500">$21.98</span>
                                </div>

                                <div className="flex justify-between mb-2">
                                    <span className="text-bold">Subtotal</span>
                                    <span className="text-bold text-green-500">${calculateTotal()}</span>
                                </div>

                                <div className="w-full mt-4">
                                    <div className="flex flex-wrap items-center gap-4">
                                        <span className="text-gray-700 white:text-gray-400">Aplicar Cupón</span>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2 font-normal placeholder-gray-400 border white:border-gray-700 white:placeholder-gray-500 white:text-gray-400 white:bg-gray-800"
                                            placeholder="Escribe tu cupón"
                                        />
                                        <button className="inline-block w-full px-4 py-2 font-bold text-center text-gray-100 bg-blue-500 rounded-md lg:w-32 hover:bg-blue-600">
                                            Aplicar
                                        </button>
                                    </div>
                                </div>

                                <div className="flex justify-between mb-2">
                                    <span className="text-gray-500">Envío</span>
                                    <span className="text-gray-500">$0.00</span>
                                </div>

                                <hr className="my-2" />

                                <div className="flex justify-between mb-2">
                                    <span className="font-semibold">Total</span>
                                    <span className="font-semibold">${calculateTotal()}</span>
                                </div>

                                <div className="flex items-center space-x-4"></div>

                                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Cart;
