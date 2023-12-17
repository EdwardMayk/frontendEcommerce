'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/navbar';
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

  const tableItemsSold = [
    {
      user: "Liam James Scott De la Verga Ostión",
      email: "liamjames@example.com",
      dni: "71746838",
      productos: "Teclado Redragon Kumara / K556 PRO",
      direccion: "El Tambo - Salaverry 155 / 157",
      fecha: "01/01/2002",
      telefono: "991668195",
      monto: "S/. 346"
    },
    {
      user: "Olivia Emma",
      email: "oliviaemma@example.com",
      dni: "71746838",
      productos: "Teclado Redragon Kumara / K556 PRO",
      direccion: "El Tambo - Salaverry 155 / 157",
      fecha: "01/01/2002",
      telefono: "991668195",
      monto: "S/. 346"
    },
    {
      user: "William Benjamin",
      email: "william.benjamin@example.com",
      dni: "71746838",
      productos: "Teclado Redragon Kumara / K556 PRO",
      direccion: "El Tambo - Salaverry 155 / 157",
      fecha: "01/01/2002",
      telefono: "991668195",
      monto: "S/. 346"
    },
    {
      user: "Liam James Scott De la Verga Ostión",
      email: "liamjames@example.com",
      dni: "71746838",
      productos: "Teclado Redragon Kumara / K556 PRO",
      direccion: "El Tambo - Salaverry 155 / 157",
      fecha: "01/01/2002",
      telefono: "991668195",
      monto: "S/. 346"
    },
    {
      user: "Olivia Emma",
      email: "oliviaemma@example.com",
      dni: "71746838",
      productos: "Teclado Redragon Kumara / K556 PRO",
      direccion: "El Tambo - Salaverry 155 / 157",
      fecha: "01/01/2002",
      telefono: "991668195",
      monto: "S/. 346"
    },
    {
      user: "William Benjamin",
      email: "william.benjamin@example.com",
      dni: "71746838",
      productos: "Teclado Redragon Kumara / K556 PRO",
      direccion: "El Tambo - Salaverry 155 / 157",
      fecha: "01/01/2002",
      telefono: "991668195",
      monto: "S/. 346"
    },
    {
      user: "Liam James Scott De la Verga Ostión",
      email: "liamjames@example.com",
      dni: "71746838",
      productos: "Teclado Redragon Kumara / K556 PRO",
      direccion: "El Tambo - Salaverry 155 / 157",
      fecha: "01/01/2002",
      telefono: "991668195",
      monto: "S/. 346"
    },
    {
      user: "Olivia Emma",
      email: "oliviaemma@example.com",
      dni: "71746838",
      productos: "Teclado Redragon Kumara / K556 PRO",
      direccion: "El Tambo - Salaverry 155 / 157",
      fecha: "01/01/2002",
      telefono: "991668195",
      monto: "S/. 346"
    },
    {
      user: "William Benjamin",
      email: "william.benjamin@example.com",
      dni: "71746838",
      productos: "Teclado Redragon Kumara / K556 PRO",
      direccion: "El Tambo - Salaverry 155 / 157",
      fecha: "01/01/2002",
      telefono: "991668195",
      monto: "S/. 346"
    },
    {
      user: "Liam James Scott De la Verga Ostión",
      email: "liamjames@example.com",
      dni: "71746838",
      productos: "Teclado Redragon Kumara / K556 PRO",
      direccion: "El Tambo - Salaverry 155 / 157",
      fecha: "01/01/2002",
      telefono: "991668195",
      monto: "S/. 346"
    },
    {
      user: "Olivia Emma",
      email: "oliviaemma@example.com",
      dni: "71746838",
      productos: "Teclado Redragon Kumara / K556 PRO",
      direccion: "El Tambo - Salaverry 155 / 157",
      fecha: "01/01/2002",
      telefono: "991668195",
      monto: "S/. 346"
    },
    {
      user: "William Benjamin",
      email: "william.benjamin@example.com",
      dni: "71746838",
      productos: "Teclado Redragon Kumara / K556 PRO",
      direccion: "El Tambo - Salaverry 155 / 157",
      fecha: "01/01/2002",
      telefono: "991668195",
      monto: "S/. 346"
    },
    {
      user: "Liam James Scott De la Verga Ostión",
      email: "liamjames@example.com",
      dni: "71746838",
      productos: "Teclado Redragon Kumara / K556 PRO",
      direccion: "El Tambo - Salaverry 155 / 157",
      fecha: "01/01/2002",
      telefono: "991668195",
      monto: "S/. 346"
    },
    {
      user: "Olivia Emma",
      email: "oliviaemma@example.com",
      dni: "71746838",
      productos: "Teclado Redragon Kumara / K556 PRO",
      direccion: "El Tambo - Salaverry 155 / 157",
      fecha: "01/01/2002",
      telefono: "991668195",
      monto: "S/. 346"
    },
    {
      user: "William Benjamin",
      email: "william.benjamin@example.com",
      dni: "71746838",
      productos: "Teclado Redragon Kumara / K556 PRO",
      direccion: "El Tambo - Salaverry 155 / 157",
      fecha: "01/01/2002",
      telefono: "991668195",
      monto: "S/. 346"
    },
  ]

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
                    Reporte De Ventas
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
              </div>

              <div className="mt-2 shadow border rounded-lg overflow-x-auto">
                <table className="w-full table-auto text-sm text-left">
                  <thead className="bg-blue-100 text-gray-600 font-medium border-b">
                    <tr className="divide-x">
                      <th className="py-3 px-6">Usuario</th>
                      <th className="py-3 px-6">DNI</th>
                      <th className="py-3 px-6">Correo Electrónico</th>
                      <th className="py-3 px-6">Productos</th>
                      <th className="py-3 px-6">Dirección</th>
                      <th className="py-3 px-6">Fecha de Registro</th>
                      <th className="py-3 px-6">Teléfono</th>
                      <th className="py-3 px-6">Monto</th>
                      <th className="py-3 px-6 text-center" style={{ position: 'sticky', right: 0, backgroundColor: '#e1effe', zIndex: 1 }}>Acciones</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white text-gray-600 divide-y">
                    {
                      tableItemsSold.map((item, idx) => (
                        <tr key={idx} className="divide-x">
                          <td className="px-6 py-4 whitespace-nowrap flex items-center gap-x-6">
                            <span>{idx + 1}</span>
                            {item.user}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">{item.dni}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{item.productos}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{item.direccion}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{item.fecha}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{item.telefono}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{item.monto}</td>
                          <td className="border px-6 py-4 text-center" style={{ position: 'sticky', right: 0, backgroundColor: '#ffffff', zIndex: 1 }}>
                            <div className='flex justify-center items-center min-w-full'>
                              <button>
                                <FontAwesomeIcon icon={faPenToSquare} className='pr-2' size='lg' />
                              </button>
                              <button>
                                <FontAwesomeIcon icon={faCircleXmark} className='pl-1' size='lg' style={{ color: "#ff0000" }} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
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