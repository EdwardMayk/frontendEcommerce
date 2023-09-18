import Navbar from '@/components/navbar';
import React, { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
}

const FavoriteProducts: React.FC = () => {
  const [favoriteProducts, setFavoriteProducts] = useState<Product[]>([]);
  
  // Función para agregar un producto a la lista de favoritos
  const addToFavorites = (product: Product) => {
    if (!favoriteProducts.some((p) => p.id === product.id)) {
      setFavoriteProducts([...favoriteProducts, product]);
    }
  };

  // Función para eliminar un producto de la lista de favoritos
  const removeFromFavorites = (productId: number) => {
    const updatedFavorites = favoriteProducts.filter((product) => product.id !== productId);
    setFavoriteProducts(updatedFavorites);
  };

  return (
    <>
    <Navbar />
    
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Productos Favoritos</h2>
      <ul className="space-y-2">
        {favoriteProducts.map((product) => (
          <li key={product.id} className="bg-white p-2 rounded-lg shadow-md flex justify-between items-center">
            <span>{product.name} - ${product.price}</span>
            <button onClick={() => removeFromFavorites(product.id)} className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600">
              Eliminar
            </button>
          </li>
        ))}
      </ul>
      <h3 className="text-xl font-semibold mt-4">Lista de Productos</h3>
      <ul className="space-y-2">
        {/* Aquí deberías renderizar una lista de productos */}
        <li className="bg-white p-2 rounded-lg shadow-md flex justify-between items-center">
          <span>Producto 1 - $10</span>
          <button onClick={() => addToFavorites({ id: 1, name: 'Producto 1', price: 10 })} className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
            Agregar a Favoritos
          </button>
        </li>
        <li className="bg-white p-2 rounded-lg shadow-md flex justify-between items-center">
          <span>Producto 2 - $20</span>
          <button onClick={() => addToFavorites({ id: 2, name: 'Producto 2', price: 20 })} className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
            Agregar a Favoritos
          </button>
        </li>
        {/* Agrega más productos aquí */}
      </ul>
    </div>
    </>
  );
};

export default FavoriteProducts;
