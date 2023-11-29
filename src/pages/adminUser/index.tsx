'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faL, faPrint, faBars, faXmark, faCircleUser, faPenToSquare, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { AdminBar } from '../admin';

const adminUser = () => {
    // TABLE TEXT
    const bodytext = "text-center py-2 px-4 border-b border-grey-light"
    const headtext = "py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"
  
    return (
      <>        
          {/* <Navbar /> */}
  
          <AdminBar />
  
          {/* component */}
          <div className="flex flex-col min-h-screen bg-gray-100 pt-16 lg:pl-60">
  
            <div className="flex-1 flex flex-wrap">
  
  
              {/* Área de contenido principal */}
              <div className="flex-1 p-4 w-full md:w-1/2">
                
                {/* Tercer contenedor debajo de los dos anteriores */}
                {/* Sección 3 - Tabla de Autorizaciones Pendientes */}
                <div className="mt-8 bg-white p-4 shadow rounded-lg">
                  <h2 className="text-gray-500 text-lg font-semibold pb-4">Reportes de Usuarios</h2>
                  <div className="relative max-w-md w-full">
                    <div className="absolute top-1 left-2 inline-flex items-center p-2">
                      <i className="fas fa-search text-gray-400" />
                    </div>
                    <input className="w-full h-10 pl-10 pr-4 py-1 text-base placeholder-gray-500 border rounded-full focus:shadow-outline" type="search" placeholder="Buscar..." />
                  </div>
                  <div className="my-1" /> {/* Espacio de separación */}
                  <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6" /> {/* Línea con gradiente */}
  
                  {/* TABLA DE USUARIOS */}
                  <table className="w-full table-auto text-sm">
                    {/* THEAD */}
                    <thead>
                      <tr className="text-sm leading-normal">
                        <th className={`${headtext} md:table-cell hidden`}>N°</th>
                        <th className={`${headtext}`}>
                          <div className='flex md:hidden justify-center'>N y A</div>
                          <div className='md:flex hidden justify-center'>Nombres y Apellidos</div>
                        </th>
                        <th className={`${headtext}`}>DNI</th>
                        <th className={`${headtext} md:table-cell hidden`}>Email</th>
                        <th className={`${headtext} md:table-cell hidden`}>Dirección</th>
                        <th className={`${headtext} md:table-cell hidden`}>Fecha de Registro</th>
                        <th className={`${headtext}`}>Telf</th>
                        <th className={`${headtext}`}>Acción</th>
                      </tr>
                    </thead>
                    {/* TBODY */}
                    <tbody>
                      <tr className="hover:bg-grey-lighter">
                        <td className={`${bodytext} md:table-cell hidden`}>1</td>
                        <td className={`${bodytext}`}>Juan Pérez</td>
                        <td className={`${bodytext}`}>75258589</td>
                        <td className={`${bodytext} md:table-cell hidden`}>raaaaaaa.@gmail.com</td>
                        <td className={`${bodytext} md:table-cell hidden`}>jr.amapolas 102</td>
                        <td className={`${bodytext} md:table-cell hidden`}>08/02/23</td>
                        <td className={`${bodytext}`}>999999999</td>
                        <td className={`${bodytext}`}>
                          <div className='flex justify-center items-center min-w-full'>
                            <button>
                              <FontAwesomeIcon icon={faPenToSquare} className='pr-2' size='lg' />
                            </button>
                            <button>
                              <FontAwesomeIcon icon={faCircleXmark} className='pl-2' size='lg' style={{ color: "#ff0000", }} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
  
                  <div className="text-right mt-4">
                    <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded">
                      <FontAwesomeIcon icon={faPrint} className="mr-2" />
                      Imprimir
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>       
      </>
    );
  };
  
  export default adminUser;