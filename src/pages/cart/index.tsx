import Navbar from '@/components/navbar';
import React, { useState } from 'react';
import Image from 'next/image';
import { useShoppingCartContext } from '@/context/ShoppingCartContext';
import DetailsCart from '@/components/complements/DetailsCart';
import { useCartContext } from '@/context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


const Cart = () => {
    const { cart, removeFromCart } = useCartContext();
    const [showDeliveryForm, setShowDeliveryForm] = useState(false);

    const [paymentStatus, setPaymentStatus] = useState({ success: false, error: null, orderPreference: null });


    // Función para calcular el total del carrito
    const calculateTotal = () => {
        // Implementa la lógica para calcular el total del carrito
        // Puedes usar el array 'cart' del contexto para realizar cálculos
        return cart.reduce((total, item) => total + item.quantity * item.product.price, 0).toFixed(2);
    };

    const handleCheckout = async () => {
        // Construye la lista de productos para enviar al backend
        const productsToSend = cart.map(item => ({
            title: item.product.name,
            unit_price: item.product.price,
            currency_id: 'PEN',
            quantity: item.quantity,
        }));

        // Realiza la solicitud al backend
        try {
            const response = await fetch('http://localhost:3000/mercado/create-order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ items: productsToSend }),
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log(responseData)
                const initPoint = responseData.init_point;

                // Redirige al usuario al nuevo enlace proporcionado por init_point
                window.open(initPoint, '_blank');
                console.log('Order created successfully');
            } else {
                // La solicitud falló, maneja el error según tus necesidades
                console.error('Failed to create order');
            }
        } catch (error) {
            console.error('Error:', error);
        }
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
                                                <td className="py-4 items-center">S/.{item.product.price.toFixed(2)}</td>
                                                <td className="py-4 ">{item.quantity}</td>
                                                <td className="py-4">S/.{(item.quantity * item.product.price).toFixed(2)}</td>
                                                <td className="py-4">
                                                    {/* Agrega el botón de eliminar */}
                                                    <button
                                                        onClick={() => removeFromCart(item.product.uuid)}
                                                        className="text-red-500 hover:text-red-700"
                                                    >
                                                        <FontAwesomeIcon icon={faTimes} />
                                                    </button>
                                                </td>
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
                                    <span className="font-semibold text-gray-500">S/.</span>
                                </div >

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
                                    <span className="font-semibold text-green-500">GRATIS</span>
                                </div >

                                <div className="flex justify-between mb-2">
                                    <span className="text-bold">Subtotal</span>
                                    <span className="text-bold text-green-500">S/.{calculateTotal()}</span>
                                </div >

                                <div className="flex justify-between mb-2">
                                    <span className="text-gray-500">Envío</span>
                                    <span className="text-gray-500">S/.0.00</span>
                                </div>

                                <hr className="my-2" />

                                <div className="flex justify-between mb-2">
                                    <span className="font-semibold">Total</span>
                                    <span className="font-semibold">S/.{calculateTotal()}</span>
                                </div>

                                <div className="flex items-center space-x-4"></div>

                                <button
                                    onClick={handleCheckout}
                                    className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full"
                                >
                                    Checkout
                                </button>
                                {paymentStatus.success ? (
                                    <div>
                                        <p>¡Gracias por su compra! Pago exitoso.</p>
                                        {/* Puedes agregar más detalles o enlaces aquí si es necesario */}
                                        {paymentStatus.orderPreference && (
                                            <p>ID de preferencia: </p>
                                        )}
                                    </div>
                                ) : (
                                    // Muestra el mensaje de error si la creación de la orden o el pago no fue exitoso
                                    paymentStatus.error && <p>Error: {paymentStatus.error}</p>
                                    // Resto del contenido del componente
                                )}
                            </div>
                        </div >
                    </div >
                </div >
            </div >

        </>
    );
};

export default Cart;
