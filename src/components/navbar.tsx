import { faBagShopping, faCircleUser, faMagnifyingGlass, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

function Navbar() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-8 py-4">
      {/* Sección Izquierda */}
      <div className="flex items-center space-x-4 mb-4 md:mb-0">
        <Link href="/" className="text-2xl font-bold hover:text-gray-600">
          <span><FontAwesomeIcon icon={faTruckFast} /></span>
        </Link>
      </div>

      {/* Sección Centro */}
      <div className='items-center mb-4 md:mb-0'>
        <ul className="flex flex-col md:flex-row">
          <li className="md:mr-10 mb-2 md:mb-0">
            <Link href="/" className="hover:text-gray-200" style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: "14px" }}>
              Inicio
            </Link>
          </li>
          <li className="md:mr-10 mb-2 md:mb-0">
            <Link href="/shop" className="hover:text-gray-200" style={{ fontSize: "14px" }}>
              Tienda
            </Link>
          </li>
          <li className="md:mr-10 mb-2 md:mb-0">
            <Link href="/products" className="hover:text-gray-200" style={{ fontSize: "14px" }}>
              Productos
            </Link>
          </li>
          <li className="mb-2 md:mb-0">
            <Link href="/contacto" className="hover:text-gray-200" style={{ fontSize: "14px" }}>
              Contactanos
            </Link>
          </li>
        </ul>
      </div>

      {/* Sección Derecha */}
      <div className="mb-4 md:mb-0">
        <ul className="flex space-x-4">
          <li>
            <Link href="/search" className="hover:text-gray-200">
              <span><FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#000000" }} /></span>
            </Link>
          </li>
          <li>
            <Link href="/login" className="hover:text-gray-200">
              <span><FontAwesomeIcon icon={faCircleUser} /></span>
            </Link>
          </li>
          <li>
            <Link href="/cart" className="hover:text-gray-200">
              <span><FontAwesomeIcon icon={faBagShopping} /></span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
