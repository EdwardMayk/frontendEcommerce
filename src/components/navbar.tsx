'use client'
import { useEffect, useState } from 'react';
import { faBagShopping, faCircleUser, faMagnifyingGlass, faSun, faMoon, faBell, faBars, faXmark, faUserPlus, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { useUser } from '@/context/UserContext';


function Navbar() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (!prefersDarkScheme) {
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  const [menu, setMenu] = useState(true);
  const { user } = useUser();

  const hamburgerMenu = () => {
    if (menu) {
      setMenu(false)

    } else {
      setMenu(true)
    }
  }

  const navbarStyles = `
    flex flex-row justify-between items-center px-8 py-4 fixed min-w-full z-50 backdrop-blur-sm`;


  const LinkBar = () => {
    const linkStyle = "text-black dark:text-white transition ease-in-out duration-300 hover:[text-shadow:_0_0_10px_#0abdc6,_0_0_20px_#0abdc6,_0_0_30px_#0abdc6,_0_0_40px_#0abdc6] dark:hover:[text-shadow:_0_0_10px_#0abdc6,_0_0_20px_#0abdc6,_0_0_30px_#0abdc6,_0_0_40px_#0abdc6]"

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
            <Link href="/admin" className={linkStyle}>
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
          <li className={`md:mr-10 mb-2 md:mb-0 md:py-0 py-4`}>
            <Link href="/tienda" className={linkStyle}>
              Tienda2
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
          <label className="mr-2 swap swap-rotate">
            <input type="checkbox" className="theme-controller" checked={darkMode}
              onChange={handleThemeChange} />
            <FontAwesomeIcon icon={faSun} className="flex items-center swap-on fill-current inline-block p-3 text-white w-7 h-7" />
            <FontAwesomeIcon icon={faMoon} className="flex items-center swap-off fill-current inline-block p-3 text-black w-7 h-7" />
          </label>
          <Link href="/cart" className="hover:text-gray-200">
            <span>
              <FontAwesomeIcon icon={faShoppingCart} className="text-black dark:text-white w-6 h-6 mr-4" />
            </span>
          </Link>
          {
            user ? (
              <Link href="/profile" className="hover:text-gray-200">
                <span>
                  <FontAwesomeIcon icon={faUser} className="text-black dark:text-white w-7 h-7" />
                </span>
              </Link>
            ) : (
              <Link href="/auth" className="hover:text-gray-200">
                <span>
                  <FontAwesomeIcon icon={faUser} className="text-black dark:text-white w-7 h-7" />
                </span>
              </Link>
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
            <Image
              alt=""
              src={'/img/LogoRAG4.png'}
              width={150}
              height={0}
              className="dark:hidden"
            />
            <Image
              alt=""
              src={'/img/LogoRAG4W.png'}
              width={150}
              height={0}
              className="hidden dark:block"
            />
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
        <FontAwesomeIcon icon={faBars} className='md:hidden text-black dark:text-white w-8 h-8' onClick={hamburgerMenu} />
      </div>
      <div className={`${menu ? "hidden" : "flex"} flex-col fixed min-w-full min-h-screen bg-black z-50`}>
        <div className='flex justify-end px-8 py-9'>
          {menu ?
            <>
              <FontAwesomeIcon icon={faBars} className='md:hidden text-black dark:text-white w-7 h-7' onClick={hamburgerMenu} />
            </> :
            <>
              <FontAwesomeIcon icon={faXmark} beat className="md:hidden text-black dark:text-white w-8 h-8" onClick={hamburgerMenu} />
            </>
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
