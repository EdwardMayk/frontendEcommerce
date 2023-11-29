'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faL, faPrint, faBars, faXmark, faCircleUser, faPenToSquare, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

export function AdminBar() {
  const [menu, setMenu] = useState(false)
  const changeMenu = () => {
    if (menu) {
      setMenu(false)
    } else {
      setMenu(true)
    }
  }
  return (
    <>
      {/* Barra superior */}
      <div className='fixed p-4 min-w-full bg-cyan-400 z-50'>
        <div className='flex justify-between'>
          <div className='flex items-center'>
            {menu ?
              <FontAwesomeIcon icon={faXmark} size="xl" className='lg:hidden' onClick={changeMenu} />
              :
              <FontAwesomeIcon icon={faBars} size="xl" className='lg:hidden' onClick={changeMenu} />
            }
          </div>
          <div className='flex items-center'>
            <Link href="/" className='text-2xl font-bold'>
              <Image src="/images/RAGlogoFooter&NavBar.png" width={150} height={75} alt="" />
            </Link>
          </div>
          <div className='flex items-center'>
            <Link href="/login" className="hover:text-gray-200">
              <FontAwesomeIcon icon={faCircleUser} className="w-7 h-7" />
            </Link>
          </div>
        </div>
      </div>

      {/* Barra lateral*/}
      <div className={`lg:flex flex-col md:min-h-screen fixed p-2 bg-white w-full md:w-60 rounded-lg z-40 mt-20 shadow-lg ${menu ? 'lg:flex' : 'hidden'}`} id="sideNav">
        <nav className='flex flex-col md:text-start text-center'>
          <Link href="/admin" className='block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white'>
            <span className='pl-2'>Inicio</span>
          </Link>
          <Link href="/adminUser" className='block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white'>
            <span className='pl-2'>Usuarios</span>
          </Link>
          <Link href="/adminVenta" className='block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white'>
            <span className='pl-2'>Ventas</span>
          </Link>
          <Link href="/adminProduct" className='block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white'>
            <span className='pl-2'>Productos</span>
          </Link>
        </nav>
      </div>
    </>

  )
}

const adminHome = () => {
  // TABLE TEXT
  const bodytext = "text-center py-2 px-4 border-b border-grey-light"
  const headtext = "py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"

  return (
    <>
      <div>
        {/* <Navbar /> */}

        <AdminBar />

        {/* component */}
        <div className="flex flex-col min-h-screen bg-gray-100 pt-16 lg:pl-60">

          <div className="flex-1 flex flex-wrap">


            {/* Área de contenido principal */}
            <div className="flex-1 p-4 w-full md:w-1/2">
              {/* Contenedor de Gráficas */}
              <div className="mt-8 flex flex-wrap justify-between space-x-0 space-y-2 md:space-x-4 md:space-y-0">
                {/* Sección 1 - Gráfica de Usuarios */}
                <div className="flex-1 bg-white p-4 shadow rounded-lg lg:w-1/2">
                  <h2 className="text-gray-500 text-lg font-semibold pb-1">Usuarios</h2>
                  <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6" /> {/* Línea con gradiente */}
                  <div className="chart-container" style={{ position: 'relative', height: '150px', width: '100%' }}>
                    {/* El canvas para la gráfica */}
                    <canvas id="usersChart" />
                  </div>
                </div>
                {/* Sección 2 - Gráfica de Comercios */}
                <div className="flex-1 bg-white p-4 shadow rounded-lg lg:w-1/2">
                  <h2 className="text-gray-500 text-lg font-semibold pb-1">Comercios</h2>
                  <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6" /> {/* Línea con gradiente */}
                  <div className="chart-container" style={{ position: 'relative', height: '150px', width: '100%' }}>
                    {/* El canvas para la gráfica */}
                    <canvas id="commercesChart" />
                  </div>
                </div>
              </div>
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
                  <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded mr-2">
                    <FontAwesomeIcon icon={faEye} className="mr-2" />
                    Ver más
                  </button>
                  <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded">
                    <FontAwesomeIcon icon={faPrint} className="mr-2" />
                    Imprimir
                  </button>
                </div>
              </div>

              {/* Cuarto contenedor */}
              {/* Sección 4 - Tabla de Transacciones */}
              <div className="mt-8 bg-white p-4 shadow rounded-lg">
                <div className="bg-white p-4 rounded-md">
                  <h2 className="text-gray-500 text-lg font-semibold pb-4">Reportes de Ventas</h2>
                  <div className="relative max-w-md w-full">
                    <div className="absolute top-1 left-2 inline-flex items-center p-2">
                      <i className="fas fa-search text-gray-400" />
                    </div>
                    {/* Buscador */}
                    <input className="w-full h-10 pl-10 pr-4 py-2 text-base placeholder-gray-500 border rounded-full focus:shadow-outline" type="search" placeholder="Buscar..." />
                  </div>
                  <div className="my-1" />
                  <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6" /> {/* Línea con gradiente */}

                  {/* TABLA DE VENTAS */}
                  <table className="w-full table-auto text-sm">
                    <thead>
                      <tr className="text-sm leading-normal">
                        <th className={`${headtext} md:table-cell hidden`}>N° de venta</th>
                        <th className={`${headtext}`}>
                          <div className='flex md:hidden justify-center'>N y A</div>
                          <div className='md:flex hidden justify-center'>Nombres y Apellidos</div>
                        </th>
                        <th className={`${headtext}`}>Fecha</th>
                        <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light text-right">Monto</th>
                        <th className={`${headtext}`}>Acción</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-grey-lighter">
                        <td className={`${bodytext} md:table-cell hidden`}>1</td>
                        <td className={`${bodytext}`}>Carlos Sánchez</td>
                        <td className={`${bodytext}`}>27/07/2023</td>
                        <td className="text-right py-2 px-4 border-b border-grey-light">$1500</td>
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
                    <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded mr-2">
                      <FontAwesomeIcon icon={faEye} className="mr-2" />
                      Ver más
                    </button>
                    <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded">
                      <FontAwesomeIcon icon={faPrint} className="mr-2" />
                      Imprimir
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default adminHome;