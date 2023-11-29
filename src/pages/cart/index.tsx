import Navbar from '@/components/navbar';
import React, { useState } from 'react';
import Image from 'next/image';
import { useShoppingCartContext } from '@/context/ShoppingCartContext';
import DetailsCart from '@/components/complements/DetailsCart';



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

                        <DetailsCart />
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
                                    <span className="font-semibold text-gray-500">s/8.00</span>
                                </div>

                                {showDeliveryForm && (
                                    <div className="">
                                        <div className="">

                                            <div className="container mx-auto">
                                                <div className="inputs w-full max-w-2xl p-6 mx-auto">

                                                    <form>
                                                        <div className="flex flex-wrap -mx-3 mb-6">
                                                            <div className="w-full md:w-full px-3 mb-6">
                                                                <label
                                                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                                    htmlFor="grid-text-1"
                                                                >
                                                                    Nombres y Apellidos
                                                                </label>
                                                                <input
                                                                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                                                                    id="grid-text-1"
                                                                    type="text"
                                                                    placeholder=""
                                                                    required
                                                                />
                                                            </div>
                                                            <div className="w-full md:w-full px-3 mb-6">
                                                                <label
                                                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                                    htmlFor="grid-text-1"
                                                                >
                                                                    DNI
                                                                </label>
                                                                <input
                                                                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                                                                    id="grid-text-1"
                                                                    type="text"
                                                                    placeholder=""
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
                                    <span className="font-semibold text-gray-500">s/0.00</span>
                                </div>

                                <div className="flex justify-between mb-2">
                                    <span className="text-bold">Subtotal</span>
                                    <span className="text-bold text-green-500">${calculateTotal()}</span>
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
                                    Verificar
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
