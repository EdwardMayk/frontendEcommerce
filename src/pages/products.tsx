import Navbar from '@/components/navbar';
import React from 'react';

// Ejemplo de datos de productos
const productos = [
  {
    id: 1,
    nombre: 'Producto 1',
    precio: 19.99,
    descripcion: 'Descripción del Producto 1. Este es un producto de alta calidad.',
    categoria: 'Electrónica',
    imagen: '/images/producto1.jpg',
  },
  {
    id: 2,
    nombre: 'Producto 2',
    precio: 29.99,
    descripcion: 'Descripción del Producto 2. Perfecto para tus necesidades diarias.',
    categoria: 'Ropa',
    imagen: '/images/producto2.jpg',
  },
  {
    id: 3,
    nombre: 'Producto 3',
    precio: 39.99,
    descripcion: 'Descripción del Producto 3. El producto ideal para tu hogar.',
    categoria: 'Hogar',
    imagen: '/images/producto3.jpg',
  },
  // Agrega más productos aquí
];

function Products() {
  return (
    <>
    <Navbar />
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-6 text-center">Nuestros Productos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productos.map((producto) => (
          <div key={producto.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img src={producto.imagen} alt={producto.nombre} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{producto.nombre}</h2>
              <p className="text-gray-600">${producto.precio.toFixed(2)}</p>
              <p className="text-sm text-gray-500 mt-2">{producto.descripcion}</p>
              <p className="text-sm text-indigo-500 mt-2">Categoría: {producto.categoria}</p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 block w-full">
                Agregar al Carrito
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Products;
