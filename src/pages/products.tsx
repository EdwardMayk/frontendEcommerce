import Category from '@/components/Category';
import GadgetsList from '@/components/GadgetsList';
import ProductsStore from '@/components/ProductsStore';
import Navbar from '@/components/navbar';
import SearchBar from '@/components/searchBar';
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
    <SearchBar />
    <GadgetsList /> 
    <Category />
    <ProductsStore /> 
    </>
  );
}

export default Products;
