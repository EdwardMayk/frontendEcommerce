'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faL, faPrint, faSearch, faXmark, faCircleUser, faPenToSquare, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { AdminBar } from '../adminNavBar';

const adminVenta = () => {

  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    };

    const formattedDate: string = new Date(dateString).toLocaleDateString('en-US', options);
    return formattedDate;
  };

  const handlePrint = () => {
    window.print();
  };  

  return (
    <>
      <AdminBar />
      <div className="bg-gray-200 flex-1 sm:ml-60 max-w-screen mx-auto px-4 md:px-8 p-8 ">
        <div className="flex-1 flex flex-wrap">
          <div className="flex-1 w-full md:w-1/2">
            <div className="max-w-screen mx-auto">
              <div className="rounded-lg relative">
                <div className="flex items-center justify-between">
                  <h3 className="flex-grow text-gray-800 text-xl font-bold sm:text-2xl">
                    Interfaz para añadir un nuevo Producto a la Tienda
                  </h3>
                  <div className="relative">
                    <div className="absolute top-1 right-4 inline-flex items-center p-2">
                      <FontAwesomeIcon icon={faSearch} className="text-gray-600" />
                    </div>
                    <input
                      className="w-full h-10 pl-5 pr-24 text-base placeholder-gray-500 border rounded-full focus:shadow-outline bg-white"
                      type="search"
                      placeholder="Buscar..."
                    />
                  </div>
                </div>
                <h3 className="flex-grow text-gray-800 text-xl font-bold sm:text-2xl">
                  Aún en desarrollo... xD O no?¿
                </h3>
                <span className="loading loading-infinity loading-lg mr-3"></span>
              </div>
              <div className="flex flex-col sm:flex-row items-center sm:justify-between mt-2">
                <div className="text-left join">
                  <button className="text-white hover:text-yellow-400 bg-gray-800 join-item btn-active h-11 w-11 duration-300 rounded-md">1</button>
                  <button className="text-white hover:text-yellow-400 bg-gray-800 join-item h-11 w-11 duration-300">2</button>
                  <button className="text-white hover:text-yellow-400 bg-gray-800 join-item h-11 w-11 duration-300">3</button>
                  <button className="text-white hover:text-yellow-400 bg-gray-800 join-item h-11 w-11 duration-300">4</button>
                  <button className="text-white hover:text-yellow-400 bg-gray-800 join-item h-11 w-11 duration-300 rounded-md">5</button>
                </div>
                <div className="text-right flex">
                  <button
                    className="bg-gray-800 hover:bg-gray-900 text-gray-100 hover:text-yellow-400 duration-300 font-semibold py-2 px-4 rounded-md ml-2"
                    onClick={handlePrint}
                  >
                    <FontAwesomeIcon icon={faPrint} className="mr-2" />
                    Imprimir
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default adminVenta;