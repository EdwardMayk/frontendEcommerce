'use client'
import { useState } from 'react';
import { faBagShopping, faCircleUser, faMagnifyingGlass, faSun, faMoon, faBell, faBars, faXmark, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { useUser } from '@/context/UserContext';


function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menu, setMenu] = useState(true);
  const { user } = useUser(); // Extrae el usuario del contexto

  const hamburgerMenu = () => {
    if (menu) {
      setMenu(false)

    } else {
      setMenu(true)
    }
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  const navbarStyles = `
    flex flex-row justify-between items-center px-8 py-4 fixed min-w-full z-50 backdrop-blur-sm`;

  
  const LinkBar = () => {
    const linkStyle = "transition ease-in-out duration-300 hover:[text-shadow:_0_0_10px_#0abdc6,_0_0_20px_#0abdc6,_0_0_30px_#0abdc6,_0_0_40px_#0abdc6]"
    return (
      <div className='text-center'>
        <ul className="flex flex-col md:flex-row md:text-lg text-4xl font-bold md:font-semibold text-white z-50">
          <li className="md:mr-10 mb-2 md:mb-0 md:py-0 py-4">
            <Link href="/dashboard" className={linkStyle}>
              Inicio
            </Link>
          </li>
          <li className="md:mr-10 mb-2 md:mb-0 md:py-0 py-4">
            <Link href="/store" className={linkStyle}>
              Tienda
            </Link>
          </li>
          <li className="md:mr-10 mb-2 md:mb-0 md:py-0 py-4">
            <Link href="/favorite" className={linkStyle}>
              <div className='flex justify-center'>
                <p className='pr-2 hidden lg:block'>Mis</p>
                <p>Favoritos</p>
              </div>
            </Link>
          </li>
          <li className="md:mr-10 mb-2 md:mb-0 md:py-0 py-4">
            <Link href="/contact" className={linkStyle}>
              Nosotros
            </Link>
          </li>
          <li className={`md:mr-10 mb-2 md:mb-0 md:py-0 py-4 ${user && user.role === 'admin' ? '' : 'hidden'}`}>
            <Link href="/admin" className='transition ease-in-out duration-300 hover:text-indigo-400'>
              Dashboard
            </Link>
          </li>
          <li className="md:mr-10 mb-2 md:mb-0 md:py-0 py-4">
            <Link href="/order" className={linkStyle}>
              <div className='flex justify-center'>
                <p className='pr-2 hidden lg:block'>Estado del</p>
                <p>Pedido</p>
              </div>
            </Link>
          </li>
        </ul>
      </div>

    )
  }
  const Icons = () => {
    const { user } = useUser();
    console.log('User Context:', user);

    return (
      <>

        <ul className="flex space-x-4 ml-4 items-center">
          <li>
            <Link href="/cart" className="hover:text-gray-200">
              <span><FontAwesomeIcon icon={faBagShopping} className="w-6 h-6" style={{ color: darkMode ? '#ffffff' : '#ffffff' }} /></span>
            </Link>
          </li>
          {
            user ? (
              <li>
                <Link href="/profile" className="hover:text-gray-200">
                  <span><FontAwesomeIcon icon={faCircleUser} className="w-7 h-7" style={{ color: darkMode ? '#ffffff' : '#ffffff' }} /></span>
                </Link>
              </li>
            ) : (
              <li>
                <Link href="/auth" className="hover:text-gray-200">
                  <span><FontAwesomeIcon icon={faUserPlus} className="w-7 h-7" style={{ color: darkMode ? '#ffffff' : '#ffffff' }} /></span>
                </Link>
              </li>
            )
          }

        </ul>
      </>
    )
  }
  return (
    <>
      <div className={navbarStyles}>
        {/* Logo */}
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          <Link href="/" className="text-2xl font-bold">
            <Image src="/img/Logo5.png" width={150} height={75} alt="" />
          </Link>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center mb-4 md:mb-0">
          <LinkBar />
        </div>

        {/* Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <Icons />
        </div>

        {/* HambuergerMenu */}
        <FontAwesomeIcon icon={faBars} size="2xl" style={{ color: darkMode ? '#ffffff' : '#ffffff' }} className='md:hidden' onClick={hamburgerMenu} />
      </div>
      <div className={`${menu ? "hidden" : "flex"} flex-col fixed min-w-full min-h-screen bg-black z-50`}>
        <div className='flex justify-end px-8 py-9'>
          {menu ?

            <><FontAwesomeIcon icon={faBars} size="2xl" className='md:hidden' onClick={hamburgerMenu} /></> :
            <><FontAwesomeIcon icon={faXmark} style={{ color: darkMode ? '#ffffff' : '#ffffff' }} beat size="2xl" className='md:hidden' onClick={hamburgerMenu} /></>
          }

        </div>
        <div className='flex flex-col bg-black justify-center items-center min-h-[calc(80vh)]'>
          <LinkBar />
          <div className='pt-4'>
            <Icons />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
