import Navbar from '@/components/navbar';
import React, { useState } from 'react';

const Cart = () => {
  // Datos de ejemplo para los productos en el carrito
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Producto 1', price: 20.99 },
    { id: 2, name: 'Producto 2', price: 15.49 },
    { id: 3, name: 'Producto 3', price: 10.99 },
  ]);

  // Función para eliminar un elemento del carrito
  const removeFromCart = (itemid: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemid);
    setCartItems(updatedCart);
  };
  

  // Función para calcular el total de la compra
  const calculateTotal = () => {
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);
    return total.toFixed(2);
  };

  return (
    <>
    <Navbar />
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold mb-4">Carrito de Compras</h1>
        {cartItems.length === 0 ? (
          <p className="text-gray-600">El carrito está vacío.</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 focus:outline-none"
                >
                  Eliminar
                </button>
              </div>
            ))}
            <hr className="my-4" />
            <div className="flex justify-between">
              <span className="font-semibold">Total:</span>
              <span className="text-xl">${calculateTotal()}</span>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600">
              Completar Compra
            </button>
          </div>
        )}
      </div>
    </div>
    </>

  );
};

export default Cart;
