'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPrint, faPenToSquare, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { useGetUsersQuery } from '../../../graphql/generated/schema';
import { faSearch, faChartLine } from '@fortawesome/free-solid-svg-icons';
import { AdminBar } from '../adminNavBar';

export function InicioDashboardReport() {
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

  const handlePrint = () => {
    window.print();
  };

  const NeonColors = {
    pink: '#e15d43',
    sky: '#262a33'
  }

  const tableItemsUsers = [
    {
      user: "Liam James Scott De la Verga Ostión",
      email: "liamjames@example.com",
      dni: "71746838",
      direccion: "El Tambo - Salaverry 155 / 157",
      fecha: "01/01/2002",
      telefono: "991668195"
    },
    {
      user: "Olivia Emma",
      email: "oliviaemma@example.com",
      dni: "71746838",
      direccion: "El Tambo - Salaverry 155 / 157",
      fecha: "01/01/2002",
      telefono: "991668195"
    },
    {
      user: "William Benjamin",
      email: "william.benjamin@example.com",
      dni: "71746838",
      direccion: "El Tambo - Salaverry 155 / 157",
      fecha: "01/01/2002",
      telefono: "991668195"
    },
  ]

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
  ]

  const tableProductsRAG = [
    {
      name: "K550 Teclado Redragon YAMA black, Spanish",
      marca: "REDRAGON",
      categoria: "Teclados",
      // switch: "Morado",
      // conexion: "Cableado",
      descripcionCorta: "Switch Outemu Purple MK2, fuerza de actuación 62g, RGB, Anti-Ghosting, Aluminio y Abs reforzado",
      // descripcionLarga: "", TENER EN CUENTA
      // dimensiones: "45.5 x 22.4 x 2.6 cm",
      // peso: "1.5 kg ",
      precioCompra: "S/. 339.00",
      precioVenta: "S/. 369.00"
    },
    {
      name: "Auriculares Redragon HYLAS H260P-RGB PINK",
      marca: "REDRAGON",
      categoria: "Audífonos",
      // switch: "Morado",
      // Audio: "Stereo",
      // conexion: "Cableado",
      descripcionCorta: "Switch Outemu Purple MK2, fuerza de actuación 62g, RGB, Anti-Ghosting, Aluminio y Abs reforzado",
      // descripcionLarga: "", TENER EN CUENTA
      // dimensiones: "45.5 x 22.4 x 2.6 cm",
      // peso: "1.5 kg ",
      precioCompra: "S/. 85.00",
      precioVenta: "S/. 100.00"
    },
    {
      name: "M711W Mouse Redragon COBRA WHITE",
      marca: "REDRAGON",
      categoria: "Audífonos",
      // switch: "Morado",
      // Audio: "Stereo",
      // conexion: "Cableado",
      descripcionCorta: "Switch Outemu Purple MK2, fuerza de actuación 62g, RGB, Anti-Ghosting, Aluminio y Abs reforzado",
      // descripcionLarga: "", TENER EN CUENTA
      // dimensiones: "12 x 6.6 x 4 cm",
      // peso: "105 g",
      precioCompra: "S/. 100.00",
      precioVenta: "S/. 140.00"
    },
  ]

  const tableItems = [
    {
      label: "Productos",
      title: "Productos más Visitados",
      items: [
        {
          Nombre: "rag.com.pe/reddragonkumara",
          Clicks: "129",
          Impresion: "Good"
        },
        {
          Nombre: "rag.com.pe/reddragonk556PRO",
          Clicks: "798",
          Impresion: "Normal"
        },
        {
          Nombre: "rag.com.pe/LogitechG535",
          Clicks: "399",
          Impresion: "Great"
        },
      ]
    },
    {
      label: "Páginas",
      title: "Páginas más Visitadas",
      items: [
        {
          Nombre: "https://www.google.com",
          Clicks: "129",
          Impresion: "Good"
        },
        {
          Nombre: "https://www.youtube.com",
          Clicks: "798",
          Impresion: "Normal"
        },
        {
          Nombre: "https://www.github.com",
          Clicks: "399",
          Impresion: "Great"
        },
      ]
    },
    {
      label: "Distritos",
      title: "Distritos Populares",
      items: [
        {
          Nombre: "Mauritania",
          Clicks: "203",
          Impresion: "Good"
        },
        {
          Nombre: "United state america",
          Clicks: "408",
          Impresion: "Great"
        },
        {
          Nombre: "France",
          Clicks: "99",
          Impresion: "Bad"
        },
      ]
    },
    {
      label: "Dispositivos",
      title: "Dispositivos más usados",
      items: [
        {
          Nombre: "Android",
          Clicks: "360",
          Impresion: "Normal"
        },
        {
          Nombre: "Linux",
          Clicks: "190",
          Impresion: "Good"
        },
        {
          Nombre: "Macbook",
          Clicks: "129",
          Impresion: "Good"
        },
      ]
    },
  ]

  const [selectedItem, setSelectedItem] = useState(0)
  const labelColors = {
    "Good": {
      color: "text-green-600 bg-green-50",
    },
    "Normal": {
      color: "text-blue-600 bg-blue-50",
    },
    "Great": {
      color: "text-pink-600 bg-pink-50",
    },
    "Bad": {
      color: "text-red-600 bg-red-50",
    },
  }

  return (
    <>
      <AdminBar />

      <div className="bg-gray-200 flex-1 sm:ml-60 max-w-screen mx-auto px-4 md:px-8 p-8 ">
        <div className="font-bold max-w-lg">
          <h3 className="text-gray-700 text-xl font-bold sm:text-3xl">
            REPORTES
          </h3>
        </div>

        {/*   TABLA DE DATOS DE LA PÁGINA POR VERSE

        <div className="p-4 bg-gray-100 shadow rounded-lg border text-sm mt-6 overflow-x-auto">
          <ul role="tablist" className="w-full border-b flex items-center gap-x-3 overflow-x-auto">
            {
              tableItems.map((item, idx) => (
                <li key={idx} className={`py-2 border-b-2 ${selectedItem == idx ? "border-indigo-600 text-indigo-600" : "border-white text-gray-500"}`}>
                  <button
                    role="tab"
                    aria-selected={selectedItem == idx ? true : false}
                    aria-controls={`tabpanel-${idx + 1}`}
                    className="py-2.5 px-4 rounded-lg duration-150 hover:text-indigo-600 hover:bg-gray-50 active:bg-gray-100 font-medium"
                    onClick={() => setSelectedItem(idx)}
                  >
                    {item.label}
                  </button>
                </li>
              ))
            }
          </ul>
          <table className="w-full table-auto text-left">
            <thead className="text-gray-600 font-medium border-b">
              <tr>
                <th className="w-9/12 py-4 pr-6">{tableItems[selectedItem].title}</th>
                <th className="py-4 pr-6">Clicks</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 divide-y">
              {
                tableItems[selectedItem].items.map((item, idx) => (
                  <tr key={idx}>
                    <td className="pr-6 py-4 whitespace-nowrap">{item.Nombre}</td>
                    <td className="pr-6 py-4 whitespace-nowrap text-indigo-600">{item.Clicks}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div> 
        */}

        <div className="flex items-center justify-center">
          <div className="bg-gradient-to-r from-yellow-500 to-gray-700 w-3/4 h-1 my-8" />
        </div>

        <div className="flex-1 flex flex-wrap">
          <div className="flex-1 w-full md:w-1/2">
            <div className="border flex flex-wrap justify-between space-x-0 space-y-2 md:space-x-3 md:space-y-0">
              <div className="bg-white flex-1 p-4 shadow rounded-lg lg:w-1/2 md:w-full border">
                <h3 className="text-gray-800 text-xl font-bold sm:text-2xl mb-4">Gráfico de Usuarios</h3>
                <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6" />
                <div className="chart-container" style={{ position: 'relative', height: '350px', width: '100%' }}>
                  <canvas id="usersChart" />
                </div>
              </div>
              <div className="flex-1 bg-white p-4 shadow rounded-lg lg:w-1/2 md:w-full border">
                <h3 className="text-gray-800 text-xl font-bold sm:text-2xl mb-4">Gráficos de Ventas</h3>
                <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6" />
                <div className="chart-container" style={{ position: 'relative', height: '150px', width: '100%' }}>
                  <canvas id="commercesChart" />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="bg-gradient-to-r from-yellow-500 to-gray-700 w-3/4 h-1 my-8" />
            </div>

            <div className="max-w-screen mx-auto">
              <div className="rounded-lg relative">
                <div className="flex items-center justify-between">
                  <h3 className="flex-grow text-gray-800 text-xl font-bold sm:text-2xl">
                    Reporte De Usuarios
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
                  <thead className="bg-green-200 text-gray-600 font-medium border-b">
                    <tr className="divide-x">
                      <th className="py-3 px-6">Usuario</th>
                      <th className="py-3 px-6">DNI</th>
                      <th className="py-3 px-6">Correo Electrónico</th>
                      <th className="py-3 px-6">Dirección</th>
                      <th className="py-3 px-6">Fecha de Registro</th>
                      <th className="py-3 px-6">Teléfono</th>
                      <th className="py-3 px-6 text-center" style={{ position: 'sticky', right: 0, backgroundColor: '#bcf0da', zIndex: 1 }}>Acciones</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white text-gray-600 divide-y">
                    {
                      tableItemsUsers.map((item, idx) => (
                        <tr key={idx} className="divide-x">
                          <td className="px-6 py-4 whitespace-nowrap flex items-center gap-x-6">
                            <span>{idx + 1}</span>
                            {item.user}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">{item.dni}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{item.direccion}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{item.fecha}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{item.telefono}</td>
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
                  <Link href="/adminUsers" className="text-white hover:text-yellow-400 bg-gray-800 btn-active duration-300 rounded-md flex items-center py-2 px-4 sm:mb-0">
                    <FontAwesomeIcon icon={faEye} className="w-5 h-5 mr-2" />
                    Ver más
                  </Link>
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

            <div className="flex items-center justify-center">
              <div className="bg-gradient-to-r from-yellow-500 to-gray-700 w-3/4 h-1 my-8" />
            </div>

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
                  <Link href="/adminSales" className="text-white hover:text-yellow-400 bg-gray-800 btn-active duration-300 rounded-md flex items-center py-2 px-4 sm:mb-0">
                    <FontAwesomeIcon icon={faEye} className="w-5 h-5 mr-2" />
                    Ver más
                  </Link>
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

            <div className="flex items-center justify-center">
              <div className="bg-gradient-to-r from-yellow-500 to-gray-700 w-3/4 h-1 my-8" />
            </div>

            <div className="max-w-screen mx-auto">
              <div className="rounded-lg relative">
                <div className="flex items-center justify-between">
                  <h3 className="flex-grow text-gray-800 text-xl font-bold sm:text-2xl">
                    Productos en la Tienda
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
                  <thead className="bg-red-200 text-gray-600 font-medium border-b">
                    <tr className="divide-x">
                      <th className="py-3 px-6">Producto</th>
                      <th className="py-3 px-6">Marca</th>
                      <th className="py-3 px-6">Categoría</th>
                      <th className="py-3 px-6">Descripcion Corta</th>
                      <th className="py-3 px-6">Precio Venta</th>
                      <th className="py-3 px-6">Precio Compra</th>
                      <th className="py-3 px-6 text-center" style={{ position: 'sticky', right: 0, backgroundColor: '#fbd5d5', zIndex: 1 }}>Acciones</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white text-gray-600 divide-y">
                    {
                      tableProductsRAG.map((item, idx) => (
                        <tr key={idx} className="divide-x">
                          <td className="px-6 py-4 whitespace-nowrap flex items-center gap-x-6">
                            <span>{idx + 1}</span>
                            {item.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">{item.marca}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{item.categoria}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{item.descripcionCorta}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{item.precioVenta}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{item.precioCompra}</td>
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
                  <Link href="/adminProducts" className="text-white hover:text-yellow-400 bg-gray-800 btn-active duration-300 rounded-md flex items-center py-2 px-4 sm:mb-0">
                    <FontAwesomeIcon icon={faEye} className="w-5 h-5 mr-2" />
                    Ver más
                  </Link>
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

            <div className="flex items-center justify-center">
              <div className="bg-gradient-to-r from-yellow-500 to-gray-700 w-3/4 h-1 my-8" />
            </div>

            <div className="flex-1 mt-4">
              <h2 className="text-gray-500 text-lg font-semibold pb-1">Usuarios</h2>
              {usersLoading && <p>Cargando Usuarios...</p>}
              {usersError && <p>Error al cargar los usuarios...: {usersError.message}</p>}
              {usersData && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {usersData.users.map((user) => (
                    <div key={user.uuid} className="bg-white p-4 shadow rounded-lg">
                      <h3 className="text-lg font-semibold">{user.firstname} {user.lastname}</h3>
                      <p className="text-gray-500">Email: {user.email}</p>
                      <p className="text-gray-500">Role: {user.role.name}</p>
                      <p className="text-gray-500">Creado El: {formatDate(user.createdAt)}</p>
                    </div>
                  ))}
                </div>
              )}
              <h3 className="text-black">Aquí Loaders Doctor Kuchiki, usteh mismo eeee</h3>
              <span className="loading loading-spinner loading-lg mr-3"></span>
              <span className="loading loading-dots loading-lg mr-3"></span>
              <span className="loading loading-ring loading-lg mr-3"></span>
              <span className="loading loading-ball loading-lg mr-3"></span>
              <span className="loading loading-bars loading-lg mr-3"></span>
              <span className="loading loading-infinity loading-lg mr-3"></span>
              <span className="loading loading-spinner text-primary mr-3"></span>
              <span className="loading loading-spinner text-secondary mr-3"></span>
              <span className="loading loading-spinner text-accent mr-3"></span>
              <span className="loading loading-spinner text-neutral mr-3"></span>
              <span className="loading loading-spinner text-info mr-3"></span>
              <span className="loading loading-spinner text-success mr-3"></span>
              <span className="loading loading-spinner text-warning mr-3"></span>
              <span className="loading loading-spinner text-error mr-3"></span>
              <h3 className="text-black">Skeleton Loaders</h3>
              <div className="flex flex-col gap-4 w-52">
                <div className="bg-gray-600 skeleton h-32 w-full"></div>
                <div className="bg-gray-600 skeleton h-4 w-28"></div>
                <div className="bg-gray-600 skeleton h-4 w-full"></div>
                <div className="bg-gray-600 skeleton h-4 w-full"></div>
              </div>
              <div className="mt-8 flex flex-col gap-4 w-64">
                <div className="bg-gray-600 skeleton h-32 w-full"></div>
                <div className="bg-gray-600 skeleton h-4 w-28"></div>
                <div className="bg-gray-600 skeleton h-4 w-full"></div>
                <div className="bg-gray-600 skeleton h-4 w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default InicioDashboardReport;