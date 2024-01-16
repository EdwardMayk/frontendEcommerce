import Navbar from '@/components/navbar';
import React, { useState } from 'react';
import Image from 'next/image';
import { useShoppingCartContext } from '@/context/ShoppingCartContext';
import DetailsCart from '@/components/complements/DetailsCart';
import { useCartContext } from '@/context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faXmark } from '@fortawesome/free-solid-svg-icons';
import NavbarStore from '@/components/navbarStore';
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

const Cart = () => {
    const { cart, removeFromCart } = useCartContext();
    const [showDeliveryForm, setShowDeliveryForm] = useState(false);
    const [paymentStatus, setPaymentStatus] = useState({ success: false, error: null, orderPreference: null });
    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.quantity * item.product.price, 0).toFixed(2);
    };

    const handleCheckout = async () => {
        const productsToSend = cart.map(item => ({
            title: item.product.name,
            unit_price: item.product.price,
            currency_id: 'PEN',
            quantity: item.quantity,
        }));


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

                window.open(initPoint, '_blank');
                console.log('Order created successfully');
            } else {
                console.error('Failed to create order');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const products = [
        {
            id: 1,
            name: 'Throwback Hip Bag',
            href: '#',
            color: 'Salmon',
            price: 'S/90.00',
            quantity: 1,
            imageSrc: '/img/TecladoRedragonBrahma.png',
            imageAlt: 'Mamadas',
        },
        {
            id: 2,
            name: 'Medium Stuff Satchel',
            href: '#',
            color: 'Blue',
            price: 'S/32.00',
            quantity: 1,
            imageSrc: '/img/TecladoRedragonBrahma.png',
            imageAlt: 'Mamadas',
        },

    ]

    const [open, setOpen] = useState(true)


    return (
        <>

            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                                <Transition.Child
                                    as={Fragment}
                                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                                    enterFrom="translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                                    leaveFrom="translate-x-0"
                                    leaveTo="translate-x-full"
                                >
                                    <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                                        <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                            <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                                <div className="flex items-start justify-between">
                                                    <Dialog.Title className="text-lg font-medium text-gray-900">Carrito de Compras</Dialog.Title>
                                                    <div className="ml-3 flex h-7 items-center">
                                                        <button
                                                            type="button"
                                                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                                                            onClick={() => setOpen(false)}>
                                                            <span className="absolute -inset-0.5" />
                                                            <span className="sr-only">Close panel</span>
                                                            <FontAwesomeIcon icon={faXmark} className="h-6 w-6" aria-hidden="true" />
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="mt-8">
                                                    <div className="flow-root">
                                                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                                                            {products.map((product) => (
                                                                <li key={product.id} className="flex py-6">
                                                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                                        <Image className="h-full w-full object-cover object-center" width={500} height={500} src={product.imageSrc} alt={product.imageAlt} />
                                                                    </div>

                                                                    <div className="ml-4 flex flex-1 flex-col">
                                                                        <div>
                                                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                                                <h3>
                                                                                    <a href={product.href}>{product.name}</a>
                                                                                </h3>
                                                                                <p className="ml-4">{product.price}</p>
                                                                            </div>
                                                                            <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                                                        </div>
                                                                        <div className="flex flex-1 items-end justify-between text-sm">
                                                                            <p className="text-gray-500"> {product.quantity}</p>
                                                                            <div className="flex">
                                                                                <button
                                                                                    type="button"
                                                                                    className="font-medium text-indigo-600 hover:text-indigo-500">
                                                                                    ELiminar
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                        <div className="container mx-auto">
                                                            <div className="inputs w-full max-w-2xl p-6 mx-auto">

                                                                <div className="md:col-span-1 mt-4">
                                                                    <div className="">
                                                                        <h2 className="text-lg font-semibold mb-4">Resumen</h2>
                                                                        <div className="mb-2 border border-gray-300 p-2 rounded-lg flex justify-between items-center">
                                                                            <label className="flex items-center">
                                                                                <input
                                                                                    type="radio"
                                                                                    className="form-radio"
                                                                                    name="shippingOption"
                                                                                    onChange={() => setShowDeliveryForm(!showDeliveryForm)} />
                                                                                <span className="ml-1 text-sm text-gray-700">Delivery</span>
                                                                            </label>
                                                                            <span className="font-semibold text-gray-500">S/.</span>
                                                                        </div>


                                                                        {showDeliveryForm && (
                                                                            <div className="container mx-auto">
                                                                                <div className="inputs w-full max-w-2xl p-4 mx-auto">
                                                                                    <form>
                                                                                        <div className="flex flex-wrap -mx-2 space-y-2">
                                                                                            <div className="w-full px-2 mb-2">
                                                                                                <label
                                                                                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
                                                                                                    htmlFor="name">
                                                                                                    Nombres y Apellidos
                                                                                                </label>
                                                                                                <input
                                                                                                    className="appearance-none block w-full bg-white text-black border border-gray-400 shadow-inner rounded-sm py-2 px-3 leading-tight focus:outline-none focus:border-gray-500"
                                                                                                    id="name"
                                                                                                    type="text"
                                                                                                    placeholder=""
                                                                                                    required
                                                                                                />
                                                                                            </div>
                                                                                            <div className="w-full px-2 mb-2">
                                                                                                <label
                                                                                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
                                                                                                    htmlFor="dni">
                                                                                                    DNI
                                                                                                </label>
                                                                                                <input
                                                                                                    className="appearance-none block w-full bg-white text-black border border-gray-400 shadow-inner rounded-sm py-2 px-3 leading-tight focus:outline-none focus:border-gray-500"
                                                                                                    id="dni"
                                                                                                    type="text"
                                                                                                    placeholder=""
                                                                                                    required
                                                                                                />
                                                                                            </div>
                                                                                            <div className="w-full px-2 mb-2">
                                                                                                <label
                                                                                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
                                                                                                    Elige tu Distrito
                                                                                                </label>
                                                                                                <div className="relative">
                                                                                                    <select className="block appearance-none text-black w-full bg-white border border-gray-400 shadow-inner px-3 py-2 pr-8 rounded-sm leading-tight focus:outline-none focus:border-gray-500">
                                                                                                        <option>Huancayo</option>
                                                                                                        <option>El Tambo</option>
                                                                                                        <option>Chilca</option>
                                                                                                    </select>
                                                                                                    <div className="pointer-events-none absolute top-0 mt-2 right-0 flex items-center px-2 text-gray-600">
                                                                                                        <svg
                                                                                                            className="fill-current h-3 w-3"
                                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                                            viewBox="0 0 20 20">
                                                                                                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                                                                                        </svg>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="w-full px-2 mb-2">
                                                                                                <label
                                                                                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
                                                                                                    htmlFor="address">
                                                                                                    Dirección
                                                                                                </label>
                                                                                                <input
                                                                                                    className="appearance-none block w-full bg-white text-black border border-gray-400 shadow-inner rounded-sm py-2 px-3 leading-tight focus:outline-none focus:border-gray-500"
                                                                                                    id="address"
                                                                                                    type="text"
                                                                                                    placeholder="Jirón Andrés Avelino Cáceres 155 (Una cuadra antes...)"
                                                                                                    required
                                                                                                />
                                                                                            </div>
                                                                                            <div className="w-full px-2 mb-2">
                                                                                                <label
                                                                                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
                                                                                                    htmlFor="phone">
                                                                                                    Teléfono
                                                                                                </label>
                                                                                                <input
                                                                                                    className="appearance-none block w-full bg-white text-black border border-gray-400 shadow-inner rounded-sm py-2 px-3 leading-tight focus:outline-none focus:border-gray-500"
                                                                                                    id="phone"
                                                                                                    type="text"
                                                                                                    placeholder="+51 999 999 999"
                                                                                                    required
                                                                                                />
                                                                                            </div>
                                                                                        </div>
                                                                                    </form>
                                                                                </div>

                                                                            </div>

                                                                        )}

                                                                        <div className="mb-2 border border-gray-300 p-2 rounded-lg flex justify-between items-center">
                                                                            <label className="flex items-center">
                                                                                <input type="radio" className="form-radio" name="shippingOption" />
                                                                                <span className="ml-1 text-sm text-gray-700">Recogo en tienda</span>
                                                                            </label>
                                                                            <span className="font-semibold text-green-500">GRATIS</span>
                                                                        </div>


                                                                    </div>
                                                                </div >
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">

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

                                                <div className="flex items-center space-x-4">
                                                    <button
                                                        onClick={handleCheckout}
                                                        className="bg-black text-white py-2 px-4 rounded-lg mt-4 w-full hover:bg-green-800 focus:outline-none focus:shadow-outline"
                                                    >
                                                        Comprar
                                                    </button>
                                                    {paymentStatus.success ? (
                                                        <div>
                                                            <p>¡Gracias por su compra! Pago exitoso.</p>
                                                            {/* Puedes agregar más detalles o enlaces aquí si es necesario */}
                                                            {paymentStatus.orderPreference && (
                                                                <p>ID de preferencia: {paymentStatus.orderPreference}</p>
                                                            )}
                                                        </div>
                                                    ) : (
                                                        // Muestra el mensaje de error si la creación de la orden o el pago no fue exitoso
                                                        paymentStatus.error && <p>Error: {paymentStatus.error}</p>
                                                        // Resto del contenido del componente
                                                    )}
                                                </div>


                                            </div>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    );
};

export default Cart;
