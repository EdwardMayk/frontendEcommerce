import { useState } from 'react';
import { faBagShopping, faCircleUser, faMagnifyingGlass, faSun, faMoon, faBell  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';


function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  const navbarStyles = `
    flex flex-col md:flex-row justify-between items-center px-8 py-4
    ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-600'}
  `;

  const linkStyles = `
    hover:text-gray-200
    ${darkMode ? 'text-gray-200' : 'text-gray-600'}
  `;

  return (
    <div className={navbarStyles}>
      {/* Sección Izquierda */}
      <div className="flex items-center space-x-4 mb-4 md:mb-0">
        <Link href="/" className={`text-2xl font-bold ${linkStyles}`}>
          <Image src="/images/RAGlogoFooter&NavBar.png" width={150} height={75} alt="" />
        </Link>
      </div>

      {/* Sección Centro */}
      <div className="items-center mb-4 md:mb-0">
        <ul className={`flex flex-col md:flex-row ${linkStyles}`}>
          
          <li className="md:mr-10 mb-2 md:mb-0">
            <Link href="/shop" className="hover:text-gray-200" style={{ fontSize: '14px' }}>
              Tienda
            </Link>
          </li>
          <li className="md:mr-10 mb-2 md:mb-0">
            <Link href="/products" className="hover:text-gray-200" style={{ fontSize: '14px' }}>
              Productos
            </Link>
          </li>
          <li className="md:mr-10 mb-2 md:mb-0">
            <Link href="/favorite" className="hover:text-gray-200" style={{ fontSize: '14px' }}>
              Mis Favoritos
            </Link>
          </li>
          <li className="md:mr-10 mb-2 md:mb-0">
            <Link href="/contacto" className="hover:text-gray-200" style={{ fontSize: '14px' }}>
              Contáctanos
            </Link>
          </li>
        </ul>
      </div>

      {/* Sección Derecha */}
      <div className="flex items-center space-x-4">
        <FontAwesomeIcon
          icon={darkMode ? faMoon : faSun}
          className={`cursor-pointer text-2xl ${darkMode ? 'text-gray-400' : 'text-yellow-400'}`}
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
      </div>
    </div>

    
  );
}

export default Navbar;
