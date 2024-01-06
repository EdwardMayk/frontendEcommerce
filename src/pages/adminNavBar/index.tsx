'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faBars, faSignOutAlt, faQuestion, faPlus, faPrint, faPenToSquare, faXmark } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { useGetUsersQuery } from '../../../graphql/generated/schema';
import { faHome, faUser, faShoppingCart, faBox, faSearch, faChartLine } from '@fortawesome/free-solid-svg-icons';
import NeonText from '@/components/neon/neonComp';

export function AdminBar() {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const NeonColors = {
    red: '#e15d43',
    yellow: '#ffe30e'
  }

  const linkStyle =
    "transition ease-in-out duration-300 hover:[text-shadow:_0_0_12px_#0abdc6,_0_0_20px_#0abdc6,_0_0_30px_#0abdc6,_0_0_40px_#0abdc6] text-gray-100 py-6 px-4 flex items-center";

  const navigation = [
    {
      href: '/admin',
      name: 'Inicio',
      icon: <FontAwesomeIcon icon={faHome} className="w-5 h-5" />,
    },
    {
      href: '/adminUsers',
      name: 'Usuarios',
      icon: <FontAwesomeIcon icon={faUser} className="w-5 h-5" />,
    },
    {
      href: '/adminSales',
      name: 'Ventas',
      icon: <FontAwesomeIcon icon={faShoppingCart} className="w-5 h-5" />,
    },
    {
      href: '/adminProducts',
      name: 'Productos',
      icon: <FontAwesomeIcon icon={faBox} className="w-5 h-5" />,
    },
    {
      href: '/adminNewProduct',
      name: 'Añadir Producto',
      icon: <FontAwesomeIcon icon={faPlus} className="w-5 h-5" />,
    },
    {
      href: '/adminGraphics',
      name: 'Gráficos',
      icon: <FontAwesomeIcon icon={faChartLine} className="w-5 h-5" />,
    },
  ];

  const navsFooter = [
    {
      href: '/NiChompiHayAquí',
      name: 'Ayuda',
      icon: <FontAwesomeIcon icon={faQuestion} className="w-5 h-5" />
    },
    {
      href: '/SupuestaPagDeConfig',
      name: 'Configuración',
      icon: <FontAwesomeIcon icon={faCog} className="w-5 h-5" />,
    },
    {
      href: '/LogOut?NoséQueVaAquí',
      name: 'Cerrar Sesión',
      icon: <FontAwesomeIcon icon={faSignOutAlt} className="w-5 h-5" />,
    },
  ];

  return (
    <>
      <div className="flex flex-col sm:flex-row" data-printable>
        <nav className="fixed top-0 left-0 w-60 h-full border-r bg-gray-800 space-y-8 hidden sm:block">
          <div className="flex flex-col h-full">
            <div className='h-24 flex items-center px-12'>
              <Image
                alt=""
                src={'/img/LogoRAG4W.png'}
                width={140}
                height={100}
              />
            </div>
            <div className="flex-1 flex flex-col h-full overflow-auto">
              <ul className="px-4 text-xl font-medium flex-1">
                {
                  navigation.map((item, idx) => (
                    <li key={idx}>
                      <Link href={item.href} className="flex items-center gap-x-5 text-white px-9 py-4 rounded-lg hover:bg-yellow-400 duration-100">
                        <div className="text-white">{item.icon}</div>
                        {item.name}
                      </Link>
                    </li>
                  ))
                }
              </ul>
              <div>
                <ul className="px-4 pb-4 text-sm font-medium">
                  {
                    navsFooter.map((item, idx) => (
                      <li key={idx}>
                        <Link href={item.href} className="flex items-center gap-x-3 text-white p-1.5 rounded-lg hover:bg-gray-400 duration-100">
                          <div className="text-white">{item.icon}</div>
                          {item.name}
                        </Link>
                      </li>
                    ))
                  }
                </ul>
                <div className="py-5 px-7 border-t">
                  <div className="flex items-center gap-x-4">
                    <Image src={'/img/LogoRAG3W.png'} className=" rounded-full" alt='' width={60} height={60} quality={100} />
                    <div>
                      <span className="block text-white text-sm font-semibold">Franz Mongüe Agüero</span>
                      <Link
                        href="/dashboard"
                        className="block mt-px text-gray-400 hover:text-indigo-600 text-xs"
                      >
                        Bienvenido
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="sm:hidden fixed top-0 right-0 p-4">
          <button onClick={toggleMobileMenu}>
            <FontAwesomeIcon icon={faBars} className="text-black text-2xl" />
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-60">
            <div className="bg-white p-6 rounded-lg">
              <button className="absolute top-3 right-3 text-gray-700" onClick={toggleMobileMenu}>
                <FontAwesomeIcon icon={faXmark} className="text-white text-4xl" />
              </button>
              <ul className="text-black">
                {navigation.map((item, idx) => (
                  <li key={idx} className="mb-6">
                    <Link href={item.href}>
                      <p className="flex items-center gap-x-2">
                        {item.icon} {item.name}
                      </p>
                    </Link>
                  </li>
                ))}
                <li className="mb-6">
                  <Link href="/NiChompiHayAquí">
                    <p className="flex items-center gap-x-2">
                      <FontAwesomeIcon icon={faQuestion} className="w-5 h-5" /> Ayuda
                    </p>
                  </Link>
                </li>
                <li className="mb-6">
                  <Link href="/SupuestaPagDeConfig">
                    <p className="flex items-center gap-x-2">
                      <FontAwesomeIcon icon={faCog} className="w-5 h-5" /> Configuración
                    </p>
                  </Link>
                </li>
                <li className="mb-6">
                  <Link href="/LogOut?NoséQueVaAquí">
                    <p className="flex items-center gap-x-2">
                      <FontAwesomeIcon icon={faSignOutAlt} className="w-5 h-5" /> Cerrar Sesión
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

const AdminHome = () => {

  return (
    <>
      <div>
        <AdminBar />
      </div>
    </>
  );
};

export default AdminHome;