import Dropdown from '@/components/complements/Dropdown';
import FilterProductStore from '@/components/complements/FilterProductsStore';
import NavbarStore from '@/components/navbarStore';
import { faBars, faBarsStaggered, faCaretDown, faCaretRight, faCheck, faDesktop, faExternalLinkAlt, faGamepad, faHeadphones, faKeyboard, faMicrophone, faMouse, faPrint, faSearch, faSignOutAlt, faUser, faUserCircle, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const FilterProductsStore = () => {

    const marcas = [
        { nombre: "Redragon", logo: "/img/logoRedragonw.png", logoDark: "/img/logoRedragonB.png" },
        { nombre: "Gigabyte", logo: "/img/logoGigabytew.png", logoDark: "/img/logoGigabyte.png" },
        { nombre: "Asus", logo: "/img/logoAsusWh.png", logoDark: "/img/logoAsus.png" },
        { nombre: "Razer", logo: "/img/logoRazerw2.png", logoDark: "/img/logoRazer.png" },
        { nombre: "ROG", logo: "/img/logoRogw.png", logoDark: "/img/logoRogB.png" },
        { nombre: "MSI", logo: "/img/msiNewLogow.png", logoDark: "/img/msiNewLogo.png" },
        { nombre: "VSG", logo: "/img/VSG4.png", logoDark: "/img/VSG2.png" },
        { nombre: "Logitech", logo: "/img/LogitechW.png", logoDark: "/img/logitechb.png" },
        // { nombre: "HyperX", logo: "/img/HyperXw.png", logoDark: "/img/NoHaycreo....png" },
        { nombre: "Corsair", logo: "/img/CorsairW.png", logoDark: "/img/logoCorsairBlack.png" },
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

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <>
            <div className={`flex flex-col md:flex-row items-center justify-center bg-neutral-100 dark:bg-black ${isMobile ? 'hidden' : ''}`}>
                <div className="dropdown dropdown-hover" style={{ zIndex: 900 }}>
                    <div tabIndex={0} role="button" className="mr-4 font-bold border-none btn w-32 transition-colors duration-300 ease-in-out bg-blue-100 dark:bg-gray-800 dark:hover:bg-gray-800 hover:bg-white dark:text-yellow-400 text-blue-600" >
                        Categorías
                    </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu bg-blue-100/80 rounded-box w-52 text-blue-600 dark:bg-gray-600/90 dark:text-yellow-400 font-semibold">
                        {categorias.map((category, index) => (
                            <Link key={index} href="" className="flex items-center px-2 py-1 transition duration-300 hover:bg-blue-200 dark:hover:bg-gray-600 hover:rounded-md">
                                <input type="checkbox" className="checkbox mr-3" />
                                <FontAwesomeIcon icon={category.icon} className="mr-3 text-xl" />
                                <span className="text-lg">{category.titulo}</span>
                            </Link>
                        ))}
                    </ul>
                </div>
                <div className="dropdown dropdown-hover" style={{ zIndex: 900 }}>
                    <div tabIndex={0} role="button" className="mr-8 font-bold border-none btn w-32 transition-colors duration-300 ease-in-out bg-blue-100 dark:bg-gray-800 dark:hover:bg-gray-800 hover:bg-white dark:text-yellow-400 text-blue-600">
                        Marcas
                    </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu bg-blue-100/50 rounded-box w-96 grid grid-cols-2 gap-4 text-blue-600 dark:bg-gray-600/90 dark:text-yellow-400 font-bold p-2">
                        {marcas.map((marca, index) => (
                            <li
                                key={index}
                                className="flex items-center p-2 transition duration-300 hover:rounded-md"
                            >
                                <label className="flex items-center space-x-2 cursor-pointer w-full">
                                    <input type="checkbox" className="checkbox" />
                                    <Image src={marca.logo} alt={marca.nombre} width={90} height={90} className="object-contain hidden dark:block " />
                                    <Image src={marca.logoDark} alt={marca.nombre} width={90} height={90} className="object-contain dark:hidden" />
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="border items-center hidden max-w-xs pl-4 rounded-lg dark:text-gray-700 bg-white dark:bg-neutral-100 lg:flex">
                    <FontAwesomeIcon icon={faSearch} className="mr-1 inline-block text-blue-600 dark:text-yellow-400 w-5 h-5" />
                    <input type="text" className="outline-none w-64 rounded-lg py-2 pl-3 dark:text-gray-700 bg-white dark:bg-neutral-100"
                        placeholder="Buscar producto..." />
                </div>
                <div className="price-filter ml-4 items-center justify-center text-blue-600 dark:text-yellow-400">
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
            </div>
        </>
    );
};

export default FilterProductsStore;
