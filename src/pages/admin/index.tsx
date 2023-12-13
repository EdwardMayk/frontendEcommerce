'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faL, faPrint, faBars, faXmark, faCircleUser, faPenToSquare, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { useGetUsersQuery } from '../../../graphql/generated/schema';
import { faHome, faUser, faShoppingCart, faBox, faSearch } from '@fortawesome/free-solid-svg-icons';
import NeonText from '@/components/neon/neonComp';

export function AdminBar() {
  const [menu, setMenu] = useState(false)
  const NeonColors = {
    red: '#e15d43',
    yellow: '#ffe30e'
  }
  const changeMenu = () => {
    if (menu) {
      setMenu(false)
    } else {
      setMenu(true)
    }
  }
  return (
    <>
      {/* Barra de Navegación */}
      <div className={`fixed p-4 min-w-full bg-gray-800 z-50 ${menu ? 'bg-opacity-90' : ''}`}>
        <div className='flex justify-between items-center'>
          <div className='flex items-center'>
            {menu ?
              <FontAwesomeIcon icon={faXmark} size="xl" className='lg:hidden text-yellow-500 hover:text-red-500 cursor-pointer' onClick={changeMenu} />
              :
              <FontAwesomeIcon icon={faBars} size="xl" className='lg:hidden text-yellow-500 hover:text-red-500 cursor-pointer' onClick={changeMenu} />
            }
          </div>
          <div className='flex items-center'>
            <Link href="/" className='text-2xl font-bold text-yellow-500 hover:text-red-500'>
              <Image src="/images/LogoNavBArRAGWhite.png" width={150} height={75} alt="" />
            </Link>
          </div>
          <div className='flex items-center'>
            <Link href="/profile" className="text-yellow-500 hover:text-red-500">
              <FontAwesomeIcon icon={faCircleUser} className="w-7 h-7" />
            </Link>
          </div>
        </div>
      </div>

      {/* Barra lateral Izquierda*/}      
      <div className={`lg:flex flex-col md:min-h-screen fixed p-2 bg-gray-800 w-full md:w-48 z-40 mt-20 shadow-lg ${menu ? 'lg:flex' : 'hidden'}`} id="sideNav">
        <nav className='flex flex-col md:text-start text-center justify-center items-center'>
          <Link href="/admin" className='flex items-center text-yellow-500 py-2.5 px-4 my-4 rounded transition duration-150 focus:outline-none transform hover:scale-110 transition-transform'>
            <FontAwesomeIcon icon={faHome} style={{ fontSize: '20px' }} className='mr-4' />
            <NeonText texto='Inicio' neonColor={NeonColors.yellow} neonSecondary={NeonColors.yellow} size='2xl' />
          </Link>
          <Link href="/adminUser" className='flex items-center text-yellow-500 py-2.5 px-4 my-4 rounded transition duration-150 focus:outline-none transform hover:scale-110 transition-transform'>
            <FontAwesomeIcon icon={faUser} style={{ fontSize: '20px' }} className='mr-4' />
            <NeonText texto='Usuarios' neonColor={NeonColors.yellow} neonSecondary={NeonColors.yellow} size='2xl' />
          </Link>
          <Link href="/adminVenta" className='flex items-center text-yellow-500 py-2.5 px-4 my-4 rounded transition duration-150 focus:outline-none transform hover:scale-110 transition-transform'>
            <FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: '20px' }} className='mr-4' />
            <NeonText texto='Ventas' neonColor={NeonColors.yellow} neonSecondary={NeonColors.yellow} size='2xl' />
          </Link>
          <Link href="/adminProduct" className='flex items-center text-yellow-500 py-2.5 px-4 my-4 rounded transition duration-150 focus:outline-none transform hover:scale-110 transition-transform'>
            <FontAwesomeIcon icon={faBox} style={{ fontSize: '20px' }} className='mr-4' />
            <NeonText texto='Productos' neonColor={NeonColors.yellow} neonSecondary={NeonColors.yellow} size='2xl' />
          </Link>
        </nav>
      </div>
    </>
  )
}

const AdminHome = () => {

  const { data: usersData, loading: usersLoading, error: usersError } = useGetUsersQuery();
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

  const bodytext = "text-center py-2 px-4 border-b border-grey-light"
  const headtext = "py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"

  return (
    <>
      <div>
        <AdminBar />
        <div className="flex flex-col min-h-screen bg-gray-800 pt-16 lg:pl-48">
          <div className="flex-1 flex flex-wrap">
            {/* Área de contenido principal */}
            <div className="flex-1 p-4 w-full md:w-1/2">
              {/* Contenedor de Gráficas */}
              <div className="flex flex-wrap justify-between space-x-0 space-y-2 md:space-x-4 md:space-y-0">
                {/* Sección 1 - Gráfica de Usuarios */}
                <div className="flex-1 bg-white p-4 shadow rounded-lg lg:w-1/2">
                  <h2 className="text-gray-500 text-lg font-semibold pb-1">Gráfica de Usuarios</h2>
                  <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6" /> {/* Línea con gradiente */}
                  <div className="chart-container" style={{ position: 'relative', height: '250px', width: '100%' }}>
                    {/* El canvas para la gráfica */}
                    <canvas id="usersChart" />
                  </div>

                  <div className="flex-1 mt-4">
                    <h2 className="text-gray-500 text-lg font-semibold pb-1">Usuarios</h2>
                    {usersLoading && <p>Loading users...</p>}
                    {usersError && <p>Error loading users: {usersError.message}</p>}
                    {usersData && (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {usersData.users.map((user) => (
                          <div key={user.uuid} className="bg-white p-4 shadow rounded-lg">
                            <h3 className="text-lg font-semibold">{user.firstname} {user.lastname}</h3>
                            <p className="text-gray-500">Email: {user.email}</p>
                            <p className="text-gray-500">Role: {user.role.name}</p>
                            <p className="text-gray-500">Creado El: {formatDate(user.createdAt)}</p>

                            {/* Add more user information as needed */}
                          </div>
                        ))}
                      </div>
                    )}
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
              <div className="mt-4 bg-white p-4 shadow rounded-lg relative">
                <div className="flex items-center justify-between">
                  <h2 className="text-gray-500 text-lg font-semibold pb-4">Reportes de Usuarios</h2>
                  <div className="relative">
                    <div className="absolute top-1 right-4 inline-flex items-center p-2">
                      <FontAwesomeIcon icon={faSearch} className="text-gray-600" />
                    </div>
                    <input
                      className="w-full h-10 pl-8 pr-8 text-base placeholder-gray-500 border rounded-full focus:shadow-outline"
                      type="search"
                      placeholder="Buscar usuario..."
                    />
                  </div>
                </div>
                <div className="my-1" />
                <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6" />

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
                  <button className="bg-gray-800 hover:bg-gray-900 text-yellow-500 font-semibold py-2 px-4 rounded mr-2">
                    <FontAwesomeIcon icon={faEye} className="mr-2 text-yellow-500" />
                    Ver más
                  </button>
                  <button className="bg-gray-800 hover:bg-gray-900 text-yellow-500 font-semibold py-2 px-4 rounded">
                    <FontAwesomeIcon icon={faPrint} className="mr-2 text-yellow-500" />
                    Imprimir
                  </button>
                </div>
              </div>

              {/* Cuarto contenedor */}
              {/* Sección 4 - Tabla de Ventas */}
              <div className="mt-4 bg-white  shadow rounded-lg relative">
                <div className="bg-white p-4 rounded-md ">
                  <div className="flex items-center justify-between">
                    <h2 className="text-gray-500 text-lg font-semibold pb-4">Reportes de Ventas</h2>

                    {/* Barra de búsqueda */}
                    <div className="relative">
                      <div className="absolute top-1 right-4 inline-flex items-center p-2">
                        <FontAwesomeIcon icon={faSearch} className="text-gray-600" />
                      </div>
                      <input
                        className="w-full h-10 pl-8 pr-8 text-base placeholder-gray-500 border rounded-full focus:shadow-outline"
                        type="search"
                        placeholder="Buscar venta..."
                      />
                    </div>
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
                    <button className="bg-gray-800 hover:bg-gray-900 text-yellow-500 font-semibold py-2 px-4 rounded mr-2">
                      <FontAwesomeIcon icon={faEye} className="mr-2 text-yellow-500" />
                      Ver más
                    </button>
                    <button className="bg-gray-800 hover:bg-gray-900 text-yellow-500 font-semibold py-2 px-4 rounded">
                      <FontAwesomeIcon icon={faPrint} className="mr-2 text-yellow-500" />
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

export default AdminHome;