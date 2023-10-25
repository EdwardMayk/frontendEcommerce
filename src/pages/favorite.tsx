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

const favorite: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
        <div className="text-center mb-8 text-extrabold">
          <h1 className="text-2xl font-semibold">FAVORITOS</h1>
        </div>

        {/* Agregar más elementos de productos aquí */}
        <ProductCard title="Iphone 12 Pro max 216gb" description="Oversized linen shirt" price="$1,000.00" code="13123" />

        <ProductCard title="Otro producto" description="Descripción del otro producto" price="$999.99" code="56789" />

        {/* Fin de elementos de productos */}
      </div>
    </>
  );
};

const ProductCard: React.FC<ProductProps> = ({ title, description, price, code }) => (
  <div className="rounded-xl w-400 flex p-4 mx-auto my-8" style={{ backgroundColor: "#faf9f8", width: "800px" }}>
    <div className="">
      <Image src="/images/phone1.png" width={300} height={300} />
    </div>
    <div className="w-full ml-2">
      <h1 className="text-xl font-semibold mb-2" style={{ color: '#699b89' }}>{title}</h1>
      <h2 className="text-base mb-2">{description}</h2>
      <h2 className="text-base mb-2">Price: {price}</h2>
      <h2 className="text-base mb-4">Code: {code}</h2>
      <button className="px-4 py-2 text-white rounded-md flex items-center" style={{ backgroundColor: '#222222' }}>
        <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
        Mover al carrito de compras
      </button>
      <div className="absolute top-0 right-0 m-2 text-gray-500 cursor-pointer">
        <FontAwesomeIcon icon={faTrash} />
      </div>
    </div>
  </div>
);

export default favorite;
