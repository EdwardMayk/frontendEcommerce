import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import Dropdown from '@/components/complements/Dropdown';
import FilterProductStore from '@/components/complements/FilterProductsStore';
import FooterInterface from '@/components/complements/FooterInterface';
import NavbarStore from '@/components/navbarStore';
import { faCartShopping, faHeart, faHeartPulse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React, { useState } from 'react';


`const ADD_TO_WISHLIST = gql
  mutation addToWishlist($productId: ID!) {
    addToWishlist(productId: $productId) {
      titulo,
      imagen,
      descCorta,
      precio,
      precioNormal
      message
      // Puedes devolver más datos según tus necesidades
    }
  }
`;

const Tienda = () => {
    `const [addToWishlistMutation] = useMutation(ADD_TO_WISHLIST); `

    const productos = [
        { titulo: "Teclado Redragon BRAHMA K586RGB PRO Spanish", imagen: "/img/TecladoRedragonBrahma.png", DescCorta: "Teclado Opto-Mecánico, Switch Outemu Blue, LED RGB, Español, 100% Anti-Ghosting, Macros, Multimedia, Perfiles", precio: "340", precioNormal: "390" },
        { titulo: "Teclado Redragon BRAHMA K586RGB PRO Spanish", imagen: "/img/TecladoRedragonBrahma.png", DescCorta: "Teclado Opto-Mecánico, Switch Outemu Blue, LED RGB, Español, 100% Anti-Ghosting, Macros, Multimedia, Perfiles", precio: "340", precioNormal: "390" },
        { titulo: "Teclado Redragon BRAHMA K586RGB PRO Spanish", imagen: "/img/TecladoRedragonBrahma.png", DescCorta: "Teclado Opto-Mecánico, Switch Outemu Blue, LED RGB, Español, 100% Anti-Ghosting, Macros, Multimedia, Perfiles", precio: "340", precioNormal: "390" },
        { titulo: "Teclado Redragon BRAHMA K586RGB PRO Spanish", imagen: "/img/TecladoRedragonBrahma.png", DescCorta: "Teclado Opto-Mecánico, Switch Outemu Blue, LED RGB, Español, 100% Anti-Ghosting, Macros, Multimedia, Perfiles", precio: "340", precioNormal: "390" },
        { titulo: "Teclado Redragon BRAHMA K586RGB PRO Spanish", imagen: "/img/TecladoRedragonBrahma.png", DescCorta: "Teclado Opto-Mecánico, Switch Outemu Blue, LED RGB, Español, 100% Anti-Ghosting, Macros, Multimedia, Perfiles", precio: "340", precioNormal: "390" },
        { titulo: "Teclado Redragon BRAHMA K586RGB PRO Spanish", imagen: "/img/TecladoRedragonBrahma.png", DescCorta: "Teclado Opto-Mecánico, Switch Outemu Blue, LED RGB, Español, 100% Anti-Ghosting, Macros, Multimedia, Perfiles", precio: "340", precioNormal: "390" },
        { titulo: "Teclado Redragon BRAHMA K586RGB PRO Spanish", imagen: "/img/TecladoRedragonBrahma.png", DescCorta: "Teclado Opto-Mecánico, Switch Outemu Blue, LED RGB, Español, 100% Anti-Ghosting, Macros, Multimedia, Perfiles", precio: "340", precioNormal: "390" },
        { titulo: "Teclado Redragon BRAHMA K586RGB PRO Spanish", imagen: "/img/TecladoRedragonBrahma.png", DescCorta: "Teclado Opto-Mecánico, Switch Outemu Blue, LED RGB, Español, 100% Anti-Ghosting, Macros, Multimedia, Perfiles", precio: "340", precioNormal: "390" },
        { titulo: "Teclado Redragon BRAHMA K586RGB PRO Spanish", imagen: "/img/TecladoRedragonBrahma.png", DescCorta: "Teclado Opto-Mecánico, Switch Outemu Blue, LED RGB, Español, 100% Anti-Ghosting, Macros, Multimedia, Perfiles", precio: "340", precioNormal: "390" },
        { titulo: "Teclado Redragon BRAHMA K586RGB PRO Spanish", imagen: "/img/TecladoRedragonBrahma.png", DescCorta: "Teclado Opto-Mecánico, Switch Outemu Blue, LED RGB, Español, 100% Anti-Ghosting, Macros, Multimedia, Perfiles", precio: "340", precioNormal: "390" },
        { titulo: "Teclado Redragon BRAHMA K586RGB PRO Spanish", imagen: "/img/TecladoRedragonBrahma.png", DescCorta: "Teclado Opto-Mecánico, Switch Outemu Blue, LED RGB, Español, 100% Anti-Ghosting, Macros, Multimedia, Perfiles", precio: "340", precioNormal: "390" },
        { titulo: "Teclado Redragon BRAHMA K586RGB PRO Spanish", imagen: "/img/TecladoRedragonBrahma.png", DescCorta: "Teclado Opto-Mecánico, Switch Outemu Blue, LED RGB, Español, 100% Anti-Ghosting, Macros, Multimedia, Perfiles", precio: "340", precioNormal: "390" },
        { titulo: "Teclado Redragon BRAHMA K586RGB PRO Spanish", imagen: "/img/TecladoRedragonBrahma.png", DescCorta: "Teclado Opto-Mecánico, Switch Outemu Blue, LED RGB, Español, 100% Anti-Ghosting, Macros, Multimedia, Perfiles", precio: "340", precioNormal: "390" },
        { titulo: "Teclado Redragon BRAHMA K586RGB PRO Spanish", imagen: "/img/TecladoRedragonBrahma.png", DescCorta: "Teclado Opto-Mecánico, Switch Outemu Blue, LED RGB, Español, 100% Anti-Ghosting, Macros, Multimedia, Perfiles", precio: "340", precioNormal: "390" },
    ];

    const ColorsBWDiv = "bg-gray-100 dark:bg-black";

    `const handleAddToWishlist = async (productId) => {
        try {
          const { data } = await addToWishlistMutation({
            variables: { productId },
          });
    
          // Puedes manejar la respuesta de la mutación según tus necesidades
          console.log(data.addToWishlist.message);
    
          // También puedes realizar actualizaciones locales si es necesario
        } catch (error) {
          console.error('Error al agregar a la lista de deseos', error);
        }
      }; `


    return (
        <>
            <NavbarStore />
            <FilterProductStore />
            <section className={`p-4 col-span-6 ${ColorsBWDiv}`}>
                <div className="mt-4 px-4 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-6">
                    {productos.map((producto, index) => (
                        <div key={index} className="relative overflow-hidden bg-white shadow rounded-xl dark:bg-gray-700 mb-4">
                            <div className="relative overflow-hidden group">
                                <div className="mb-5 overflow-hidden">
                                    <Image className="object-cover mx-auto transition-all rounded h-72 hover:scale-110" width={500} height={500} src={producto.imagen} alt="" />
                                    <div className="absolute flex flex-col top-4 right-4">
                                        <a href="#" className="flex items-center">
                                            <div className="relative flex items-center justify-center p-3 mb-3 transition-all translate-x-20 bg-blue-100/70 rounded dark:bg-gray-600/70 dark:text-white group-hover:translate-x-0 wishlist hover:bg-blue-200/70 dark:hover:bg-gray-500/70 group">
                                                <FontAwesomeIcon icon={faHeart} beat className="inline-block text-red-500 w-6 h-6" />
                                            </div>
                                        </a>
                                        <a href="#" className="flex items-center">
                                            <div className="relative flex items-center justify-center p-3 mb-3 transition-all translate-x-20 bg-blue-100/70 rounded dark:bg-gray-600/70 dark:text-white group-hover:translate-x-0 wishlist hover:bg-blue-200/70 dark:hover:bg-gray-500/70 group">
                                                <FontAwesomeIcon icon={faCartShopping} beat className="inline-block text-green-400 w-6 h-6" />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <a>
                                <h3 className="px-5 mb-4 text-lg font-bold dark:text-white">{producto.titulo}</h3>
                            </a>
                            <div className="flex">
                                <div className="w-1/2 px-5 pb-3">
                                    <p className="text-lg font-bold text-blue-500 dark:text-blue-300">
                                        <span>S/{producto.precio}</span>
                                    </p>
                                    <span className="block -mt-1 text-xs font-semibold text-gray-400 line-through">S/{producto.precioNormal}</span>
                                </div>
                                <button className="flex-1 text-sm text-white transition-all bg-blue-500 rounded-r-none hover:bg-blue-600 rounded-t-xl">
                                    Añadir al Carrito
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <FooterInterface />
            </section>
            
        </>
    );
};

export default Tienda;

