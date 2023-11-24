import { faBriefcase, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Image } from '@nextui-org/react';
import React from 'react';
import Navbar from '@/components/navbar';

interface ProductProps {
  title: string;
  description: string;
  price: string;
  code: string;
}

const Favorite: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center bg-gray-100">
        <div className="text-center mt-8 mb-4">
          <h1 className="text-3xl font-semibold text-gray-800">Productos Favoritos</h1>
        </div>

        <ProductCard title="Iphone 12 Pro max 216gb" description="Oversized linen shirt" price="$1,000.00" code="13123" />

        <ProductCard title="Otro producto" description="Descripción del otro producto" price="$999.99" code="56789" />
      </div>
    </>
  );
};

const ProductCard: React.FC<ProductProps> = ({ title, description, price, code }) => (
  <div className="max-w-md mx-auto bg-white shadow-lg rounded-md overflow-hidden my-8">
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2">
        <Image src="/images/phone1.png" width={300} height={300} alt={title} />
      </div>
      <div className="w-full md:w-1/2 p-4">
        <h1 className="text-xl font-semibold mb-2 text-gray-800">{title}</h1>
        <p className="text-sm text-gray-600 mb-2">{description}</p>
        <p className="text-base text-gray-700 mb-2">Precio: {price}</p>
        <p className="text-base text-gray-700 mb-4">Código: {code}</p>
        <div className="flex justify-between items-center">
          <button className="w-full md:w-auto px-4 py-2 text-white rounded-md flex items-center bg-gray-800 mb-2 md:mb-0">
            <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
            Agregar al carrito
          </button>
          <div className="text-gray-500 cursor-pointer text-xl md:text-2xl">
            <FontAwesomeIcon icon={faTrash} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Favorite;
