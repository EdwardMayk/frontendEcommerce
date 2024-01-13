'use client'
import { useEffect, useState } from 'react';
import { faBars, faXmark, faHeart, faCartShopping, faSearch, faUser, faCircleXmark, faBarsStaggered, faUserCircle, faSignOutAlt, faSun, faMoon, faDesktop, faExternalLinkAlt, faGamepad, faHeadphones, faKeyboard, faMicrophone, faMouse, faPrint, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import FilterProductsStore from './complements/FilterProductsStore';

function NavbarStore() {

  const marcas = [
    { nombre: "Gigabyte", logo: "/img/logoGigabytew.png" },
    { nombre: "Asus", logo: "/img/logoAsusWh.png" },
    { nombre: "Razer", logo: "/img/logoRazerw2.png" },
    { nombre: "ROG", logo: "/img/logoRogw.png" },
    { nombre: "MSI", logo: "/img/msiNewLogow.png" },
    { nombre: "VSG", logo: "/img/VSG4.png" },
    { nombre: "Logitech", logo: "/img/LogitechW.png" },
    // { nombre: "HyperX", logo: "/img/HyperXw.png" },
    { nombre: "Corsair", logo: "/img/CorsairW.png" },
  ];

  const categorias = [
    { titulo: 'Audífonos', icon: faHeadphones },
    { titulo: 'Mouse', icon: faMouse },
    { titulo: 'Teclados', icon: faKeyboard },
    { titulo: 'Pantallas', icon: faDesktop },
    { titulo: 'GamePad', icon: faGamepad },
    { titulo: 'Micrófonos', icon: faMicrophone },
    { titulo: 'WebCams', icon: faVideo },
    { titulo: 'Impresoras', icon: faPrint },
    { titulo: 'Accesorios', icon: faExternalLinkAlt },
  ]

  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
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

  const [open, setOpen] = useState(false);

  const handleMenuToggle = () => {
    setOpen(!open);
  };

  {/* className={` ${ColorsBWIcons} `} */ }
  const ColorsBWDiv = "bg-gray-100 dark:bg-gray-800"
  const ColorsBWIcons = "inline-block text-blue-600 dark:text-white"
  const linkStyle = "text-black dark:text-white transition ease-in-out duration-300 hover:[text-shadow:_0_0_10px_#0abdc6,_0_0_20px_#0abdc6,_0_0_30px_#0abdc6,_0_0_40px_#0abdc6] dark:hover:[text-shadow:_0_0_10px_#0abdc6,_0_0_20px_#0abdc6,_0_0_30px_#0abdc6,_0_0_40px_#0abdc6]"

  return (
    <>
      <section className="relative bg-gray-200 dark:bg-black" style={{ zIndex: 1000 }}>
        <div className="container mx-auto">
          <nav className="relative flex justify-between ">
            <div className="flex items-center justify-between w-full px-4 py-3 lg:px-0 ">
              <div className="flex justify-center items-center relative">
                <Image
                  alt=""
                  src={'/img/LogoRAG4.png'}
                  width={140}
                  height={0}
                  className="dark:hidden"
                />
                <Image
                  alt=""
                  src={'/img/LogoRAG4W.png'}
                  width={140}
                  height={0}
                  className="hidden dark:block"
                />
              </div>
              <div className="flex items-center lg:hidden ">
                <Link href="" className="mr-4">
                  <FontAwesomeIcon icon={faHeart} className={` p-1 w-6 h-6 ${ColorsBWIcons} `} />
                </Link>
                <Link href="/cart" className="flex items-center mr-4">
                  <FontAwesomeIcon icon={faCartShopping} className={` p-3 w-6 h-6 ${ColorsBWIcons} `} />
                </Link>
                <button
                  className="flex items-center px-3 py-2 rounded border lg:hidden"
                  onClick={handleMenuToggle}
                >
                  <FontAwesomeIcon icon={open ? faBarsStaggered : faBars} className={`w-7 h-7 ${ColorsBWIcons} `} />
                </button>
              </div>
              <ul className="text-xl font-bold text-white hidden font-medium lg:flex">
                <li className="md:mr-10 mb-2 md:mb-0 md:py-0 py-4">
                  <Link href="/dashboard" className={linkStyle}>
                    Inicio
                  </Link>
                </li>
                <li className="md:mr-10 mb-2 md:mb-0 md:py-0 py-4">
                  <Link href="/contact" className={linkStyle}>
                    Nosotros
                  </Link>
                </li>
                <li className="md:mr-10 mb-2 md:mb-0 md:py-0 py-4">
                  <Link href="/store" className={linkStyle}>
                    Tienda1
                  </Link>
                </li>
              </ul>
              <div className="items-center justify-end hidden lg:flex">
                <Link href="/favorite" className="flex items-center mr-3">
                  <FontAwesomeIcon icon={faHeart} className={`p-3 w-6 h-6 ${ColorsBWIcons} `} />
                </Link>
                <Link href="/cart" className="flex items-center mr-3">
                  <FontAwesomeIcon icon={faCartShopping} className={`p-3 w-6 h-6 ${ColorsBWIcons} `} />
                </Link>
                <label className="mr-2 swap swap-rotate">
                  <input type="checkbox" className="theme-controller" checked={darkMode}
                    onChange={handleThemeChange} />
                  <FontAwesomeIcon icon={faSun} className={`flex items-center swap-on fill-current p-3 w-7 h-7 ${ColorsBWIcons} `} />
                  <FontAwesomeIcon icon={faMoon} className={`flex items-center swap-off fill-current p-3 w-7 h-7 ${ColorsBWIcons} `} />
                </label>
                <div className="dropdown dropdown-hover dropdown-end">
                  <div tabIndex={0} role="button" className="btn bg-none border-none" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                    <FontAwesomeIcon icon={faUser} className={`w-7 h-7 ${ColorsBWIcons} `} />
                  </div>
                  <ul tabIndex={0} className="dropdown-content z-[1] menu bg-blue-100/50 rounded-box w-52 text-blue-600 dark:bg-gray-600/80 dark:text-yellow-400 font-bold">
                    <Link href="" className="flex items-center px-4 py-3 transition duration-300 hover:bg-blue-200 dark:hover:bg-gray-600 hover:rounded-md">
                      <FontAwesomeIcon icon={faUserCircle} className={`mr-3 text-xl ${ColorsBWIcons} `} />
                      <span className="text-lg">Perfil</span>
                    </Link>
                    <Link href="" className="flex items-center px-4 py-3 transition duration-300 hover:bg-blue-200 dark:hover:bg-gray-600 hover:rounded-md">
                      <FontAwesomeIcon icon={faSignOutAlt} className={`mr-3 text-xl ${ColorsBWIcons} `} />
                      <span className="text-lg">Cerrar Sesión</span>
                    </Link>
                    <div className="p-2 mt-3 flex justify-center items-center relative">
                      <Image
                        alt=""
                        src={'/img/LogoRAG4.png'}
                        width={80}
                        height={0}
                        className="dark:hidden"
                      />
                      <Image
                        alt=""
                        src={'/img/LogoRAG4W.png'}
                        width={80}
                        height={0}
                        className="hidden dark:block"
                      />
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
          <div className={`fixed inset-0 w-full bg-gray-800 opacity-50 lg:hidden dark:bg-gray-400 ${open ? 'translate-x-0 ease-in-opacity-100' : '-translate-x-full ease-out opacity-0'
            }`}></div>
          <div className={` fixed inset-0 h-screen p-3 text-gray-700 duration-500 transform shadow-md dark:bg-gray-800 bg-blue-50 w-80 lg:hidden lg:relative ${open ? 'translate-x-0 ease-in-opacity-100' : '-translate-x-full ease-out opacity-0'}`}>
            <div className="flex justify-between">
              <div className="p-4 flex justify-center items-center relative">
                <Image
                  alt=""
                  src={'/img/LogoRAG4.png'}
                  width={140}
                  height={0}
                  className="dark:hidden"
                />
                <Image
                  alt=""
                  src={'/img/LogoRAG4W.png'}
                  width={140}
                  height={0}
                  className="hidden dark:block"
                />
              </div>
              <button
                className="p-2 rounded-md hover:text-blue-300 lg:hidden dark:text-gray-300"
                onClick={() => setOpen(false)}
              >
                <FontAwesomeIcon icon={faCircleXmark} beat className={`p-2 w-9 h-9 ${ColorsBWIcons} `} />
              </button>
            </div>
            <div className="flex items-center px-5 mt-7 lg:hidden">
              <div className="dropdown dropdown-hover mr-3">
                <div tabIndex={0} role="button" className="btn bg-none border-none" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                  <FontAwesomeIcon icon={faUser} className={`w-7 h-7 ${ColorsBWIcons} `} />
                </div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu bg-blue-100/50 rounded-box w-52 text-blue-600 dark:bg-gray-600/80 dark:text-yellow-400 font-bold">
                  <Link href="" className="flex items-center px-4 py-3 transition duration-300 hover:bg-blue-200 dark:hover:bg-gray-600 hover:rounded-md">
                    <FontAwesomeIcon icon={faUserCircle} className={`mr-3 text-xl ${ColorsBWIcons} `} />
                    <span className="text-lg">Perfil</span>
                  </Link>
                  <Link href="" className="flex items-center px-4 py-3 transition duration-300 hover:bg-blue-200 dark:hover:bg-gray-600 hover:rounded-md">
                    <FontAwesomeIcon icon={faSignOutAlt} className={`mr-3 text-xl ${ColorsBWIcons} `} />
                    <span className="text-lg">Cerrar Sesión</span>
                  </Link>
                  <div className="p-2 mt-3 flex justify-center items-center relative">
                    <Image
                      alt=""
                      src={'/img/LogoRAG4.png'}
                      width={80}
                      height={0}
                      className="dark:hidden"
                    />
                    <Image
                      alt=""
                      src={'/img/LogoRAG4W.png'}
                      width={80}
                      height={0}
                      className="hidden dark:block"
                    />
                  </div>
                </ul>
              </div>
              <Link href="" className="mr-5 dark:text-gray-400">
                <FontAwesomeIcon icon={faHeart} className={`p-3 w-6 h-6 ${ColorsBWIcons} `} />
              </Link>
              <Link href="/cart" className="flex items-center mr-5 dark:text-gray-400">
                <FontAwesomeIcon icon={faCartShopping} className={`p-3 w-6 h-6 ${ColorsBWIcons} `} />
              </Link>
              <label className="ml-2 swap swap-rotate">
                <input type="checkbox" className="theme-controller" checked={darkMode}
                  onChange={handleThemeChange} />
                <FontAwesomeIcon icon={faSun} className={`flex items-center swap-on fill-current w-7 h-7 ${ColorsBWIcons} `} />
                <FontAwesomeIcon icon={faMoon} className={`flex items-center swap-off fill-current w-7 h-7 ${ColorsBWIcons} `} />
              </label>
            </div>
            <div className="flex items-center max-w-xs py-1 pl-4 bg-white rounded-lg mt-7 dark:text-gray-300 dark:bg-gray-500 lg:hidden">
              <input
                type="text"
                className="outline-none w-full py-2 pl-2 border-0 dark:text-white bg-white dark:bg-gray-500"
                placeholder="Buscar..."
              />
              <FontAwesomeIcon icon={faSearch} className={`p-3 w-6 h-6 ${ColorsBWIcons} `} />
            </div>
            <div className="mt-6 mb-4 price-filter ml-4 items-center justify-center text-blue-600 dark:text-yellow-400">
              <h3 className="text-lg font-bold">Filtrar por precio</h3>
              <div className="mt-1 flex items-center space-x-2">
                <span className="text-xl font-semibold">S/</span>
                <input type="text" placeholder="Mín" value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  className="bg-white dark:bg-gray-600 text-black dark:text-white border rounded py-2 px-3 text-sm w-16"
                />
                <span className="text-xl font-semibold">-</span>
                <input type="text" placeholder="Máx" value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="bg-white dark:bg-gray-600 text-black dark:text-white border rounded py-2 px-3 text-sm w-16"
                />
                <button className="text-white rounded py-1 px-2 ml-2 transition duration-300 hover:bg-blue-600 bg-blue-500 text-white dark:bg-yellow-500 dark:hover:bg-yellow-600 dark:text-black font-bold">
                  Aplicar
                </button>
              </div>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <div className="dropdown dropdown-hover pb-4 mt-2" style={{ zIndex: 1000 }}>
                <div tabIndex={0} role="button" className="mr-4 font-bold btn w-32 transition-colors duration-300 ease-in-out bg-blue-100/50 dark:bg-gray-700 dark:hover:bg-gray-800 hover:bg-white dark:text-yellow-400 text-blue-600" >
                  Categorías
                </div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu bg-blue-100/50 rounded-box w-52 text-blue-600 dark:bg-gray-600/80 dark:text-yellow-400 font-semibold">
                  {categorias.map((category, index) => (
                    <Link key={index} href="" className="flex items-center px-2 py-1 transition duration-300 hover:bg-blue-200 dark:hover:bg-gray-600 hover:rounded-md">
                      <input type="checkbox" className="checkbox mr-3" />
                      <FontAwesomeIcon icon={category.icon} className={`mr-3 text-xl ${ColorsBWIcons} `} />
                      <span className="text-lg">{category.titulo}</span>
                    </Link>
                  ))}
                </ul>
              </div>
              <div className="dropdown dropdown-hover mt-2" style={{ zIndex: 900 }}>
                <div tabIndex={0} role="button" className="mr-4 font-bold btn w-28 transition-colors duration-300 ease-in-out bg-blue-100/50 dark:bg-gray-700 dark:hover:bg-gray-800 hover:bg-white dark:text-yellow-400 text-blue-600">
                  Marcas
                </div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu bg-gray-100 rounded-box w-96 grid grid-cols-2 gap-4 text-blue-600 dark:bg-gray-600/80 dark:text-yellow-400 font-bold p-2">
                  {marcas.map((marca, index) => (
                    <li
                      key={index}
                      className="flex items-center p-2 transition duration-300 hover:rounded-md"
                    >
                      <label className="flex items-center space-x-2 cursor-pointer w-full">
                        <input type="checkbox" className="checkbox" />
                        <Image src={marca.logo} alt={marca.nombre} width={90} height={90} className="object-contain" />
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <ul className="px-5 text-left mt-7">
              <Link href="/dashboard" className="pb-3">
                <p className="text-m text-gray-700 hover:text-blue-400 dark:text-gray-100">
                  Inicio
                </p>
              </Link>
              <Link href="contact" className="pb-3">
                <p className="text-m text-gray-700 hover:text-blue-400 dark:text-gray-400 pt-2">
                  Nosotros
                </p>
              </Link>
              <Link href="store" className="pb-3">
                <p className="text-m text-gray-700 hover:text-blue-400 dark:text-gray-400 pt-2">
                  Tienda1
                </p>
              </Link>
            </ul> 
          </div>
        </div >
      </section>
    </>
  );
}

export default NavbarStore;
