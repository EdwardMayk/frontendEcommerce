'use client'
import { useState } from 'react';
import { faBagShopping, faCircleUser, faMagnifyingGlass, faSun, faMoon, faBell, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';


function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menu, setMenu] = useState(true);
  const hamburgerMenu = () => {
    if (menu) {
      setMenu(false)
      console.log(menu);

    } else {
      setMenu(true)
      console.log(menu);

    }
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  const navbarStyles = `
    flex flex-row justify-between items-center px-8 py-4   fixed min-w-full z-20
    ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-600'}
  `;

  const linkStyles = `
    ${darkMode ? 'text-gray-200' : 'text-gray-600'}
  `;
  const LinkBar = () => {
    return (
      <div className='text-center'>
        <ul className={`flex flex-col md:flex-row ${linkStyles} md:text-lg text-4xl md:font-light font-bold`}>

          <li className="md:mr-10 mb-2 md:mb-0 md:py-0 py-4">
            <Link href="/store" className="hover:text-gray-200">
              Tienda
            </Link>
          </li>
          <li className="md:mr-10 mb-2 md:mb-0 md:py-0 py-4">
            <Link href="/favorite" className="hover:text-gray-200">
              Mis Favoritos
            </Link>
          </li>
          <li className="md:mr-10 mb-2 md:mb-0 md:py-0 py-4">
            <Link href="/contact" className="hover:text-gray-200">
              Contáctanos
            </Link>
          </li>
          <li className="md:mr-10 mb-2 md:mb-0 md:py-0 py-4">
            <Link href="/admin" className="hover:text-gray-200">
              Dashboard
            </Link>
          </li>
        </ul>
      </div>

    )
  }
  const Icons = () => {
    return (
      <>
        <FontAwesomeIcon
          icon={darkMode ? faMoon : faSun}
          className={`hidden md:flex cursor-pointer text-2xl ${darkMode ? 'text-gray-400' : 'text-yellow-400'}`}
          onClick={toggleDarkMode}
        />
        <ul className="flex space-x-4 ml-4 items-center"> {/* Agregada la clase items-center */}
          <li>
            <Link href="/notifications" className="hover:text-gray-200">
              <span><FontAwesomeIcon icon={faBell} className="w-6 h-6" style={{ color: darkMode ? '#ffffff' : '#000000' }} /></span>
            </Link>
          </li>
          <li>
            <Link href="/cart" className="hover:text-gray-200">
              <span><FontAwesomeIcon icon={faBagShopping} className="w-6 h-6" style={{ color: darkMode ? '#ffffff' : '#000000' }} /></span>
            </Link>
          </li>
          <li>
            <Link href="/login" className="hover:text-gray-200">
              <span><FontAwesomeIcon icon={faCircleUser} className="w-7 h-7" style={{ color: darkMode ? '#ffffff' : '#000000' }} /></span>
            </Link>
          </li>
        </ul>
      </>
    )
  }
  return (
    <>
      <div className={navbarStyles}>
        {/* Logo */}
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          <Link href="/" className={`text-2xl font-bold ${linkStyles}`}>
            <Image src="/images/RAGlogoFooter&NavBar.png" width={150} height={75} alt="" />
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
        <FontAwesomeIcon icon={faBars} className='md:hidden' onClick={hamburgerMenu} />
      </div>
      <div className={`${menu ? "hidden" : "flex"} flex-col fixed min-w-full min-h-screen bg-white z-30`}>
        <div className='flex justify-end px-8 py-9'>
          {menu ?

            <><FontAwesomeIcon icon={faBars} className='md:hidden' onClick={hamburgerMenu} /></> :
            <><FontAwesomeIcon icon={faXmark} beat size="2xl" className='md:hidden' onClick={hamburgerMenu} /></>
          }

        </div>
        <div className='flex flex-col justify-center items-center min-h-[calc(80vh)]'>
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
