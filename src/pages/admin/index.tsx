import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPrint } from '@fortawesome/free-solid-svg-icons';

const index = () => {
  return (
    <>
      <div>
        <Navbar />

        <div className='p-12'></div>
        {/* component */}
        <div className="flex flex-col h-screen bg-gray-100">

          <div className="flex-1 flex flex-wrap">
            {/* Barra lateral de navegación (oculta en dispositivos pequeños) */}

            {/* Área de contenido principal */}
            <div className="flex-1 p-4 w-full md:w-1/2">

              {/* Contenedor de Gráficas */}
              <div className="mt-8 flex flex-wrap space-x-0 space-y-2 md:space-x-4 md:space-y-0">
                <div className="p-2 bg-white w-full md:w-60 flex flex-col md:flex hidden" id="sideNav">
                  <nav>

                    <a className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white" href="#">
                      <i className="fas fa-users mr-2" />Reportes
                    </a>
                    <a className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white" href="#">
                      <i className="fas fa-store mr-2" />Productos
                    </a>

                  </nav>

                </div>
                {/* Primer contenedor */}
                {/* Sección 1 - Gráfica de Usuarios */}
                <div className="flex-1 bg-white p-4 shadow rounded-lg md:w-1/2">
                  <h2 className="text-gray-500 text-lg font-semibold pb-1">Usuarios</h2>
                  <div className="my-1" /> {/* Espacio de separación */}
                  <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6" /> {/* Línea con gradiente */}
                  <div className="chart-container" style={{ position: 'relative', height: '150px', width: '100%' }}>
                    {/* El canvas para la gráfica */}
                    <canvas id="usersChart" />
                  </div>
                </div>
                {/* Segundo contenedor */}
                {/* Sección 2 - Gráfica de Comercios */}
                <div className="flex-1 bg-white p-4 shadow rounded-lg md:w-1/2">
                  <h2 className="text-gray-500 text-lg font-semibold pb-1">Comercios</h2>
                  <div className="my-1" /> {/* Espacio de separación */}
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
                <table className="w-full table-auto text-sm">
                  <thead>
                    <tr className="text-sm leading-normal">
                      <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">N°</th>
                      <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Nombres y Apellidos</th>
                      <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">DNI</th>
                      <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Email</th>
                      <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Dirección</th>
                      <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Fecha de Registro</th>
                      <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Telf</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-grey-lighter">
                      <td className="py-2 px-4 border-b border-grey-light">1</td>
                      <td className="py-2 px-4 border-b border-grey-light">Juan Pérez</td>
                      <td className="py-2 px-4 border-b border-grey-light">75258589</td>
                      <td className="py-2 px-4 border-b border-grey-light">raaaaaaa.@gmail.com</td>
                      <td className="py-2 px-4 border-b border-grey-light">jr.amapolas 102</td>
                      <td className="py-2 px-4 border-b border-grey-light">08/02/23</td>
                      <td className="py-2 px-4 border-b border-grey-light">999999999</td>
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
                <div className="bg-white p-4 rounded-md mt-4">
                  <h2 className="text-gray-500 text-lg font-semibold pb-4">Reportes de Ventas</h2>
                  <div className="relative max-w-md w-full">
                    <div className="absolute top-1 left-2 inline-flex items-center p-2">
                      <i className="fas fa-search text-gray-400" />
                    </div>
                    <input className="w-full h-10 pl-10 pr-4 py-1 text-base placeholder-gray-500 border rounded-full focus:shadow-outline" type="search" placeholder="Buscar..." />
                  </div>
                  <div className="my-1" />
                  <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6" /> {/* Línea con gradiente */}
                  <table className="w-full table-auto text-sm">
                    <thead>
                      <tr className="text-sm leading-normal">
                        <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">N° de venta</th>
                        <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Nombres y Apellidos</th>
                        <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Fecha</th>
                        <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light text-right">Monto</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-grey-lighter">
                        <td className="py-2 px-4 border-b border-grey-light">1</td>
                        <td className="py-2 px-4 border-b border-grey-light">Carlos Sánchez</td>
                        <td className="py-2 px-4 border-b border-grey-light">27/07/2023</td>
                        <td className="py-2 px-4 border-b border-grey-light text-right">$1500</td>
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

export default index;


