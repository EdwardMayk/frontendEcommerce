import React from 'react';
import { Image } from '@nextui-org/react';
import {  useGetAllProductsQuery } from '../../graphql/generated/schema';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProductsStore: React.FC = () => {

  const { loading, error, data } = useGetAllProductsQuery();
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const products = data?.products || [];
  console.log(products);

  return (
    <div className="ml-6">
      <div className="flex justify-between mx-4">
        <span className="text-left">Productos encontrados</span>
        <span className="text-right">Limpiar Filtros</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4 ml-3">
        {products.map((product, index) => (
          <div key={index} className="p-4 border rounded-lg bg-white items-center " >
            <Image src={product.image} alt="image"  />
            <div className="bg-gray-300 h-1 mt-4"></div>
            <div className="mt-4">
              <div className="text-xm">{product.name}</div>
              <div className="flex items-center justify-between">
                <div className="text-gray-600">{product.price}</div>
                <div className="flex items-center">
                  <div className="bg-gray-300 rounded-full p-2">
                    <FontAwesomeIcon icon={faHeart} />
                  </div>
                </div>
              </div>
              <div className="text-green-600">Marca nueva</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsStore;
