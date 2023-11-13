import { faBagShopping, faCircleUser, faMagnifyingGlass, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

function Navbar() {
  return (
    <div className="flex justify-between items-center px-8 py-4" >
      {/* Sección Izquierda */}
      <div className="flex items-center space-x-4" style={{ marginLeft: "200px" }}>
        <Link href="/" className="text-2xl font-bold hover:text-gray-600">
          <span><FontAwesomeIcon icon={faTruckFast} /></span>
        </Link>
      </div>

      {/* Sección Centro */}
      <div className='items-center'>
        <ul className="flex">
          <li className="mr-10">
            <Link href="/" className="hover:text-gray-200" style={{ fontFamily: 'Space Grotesk, sans-serif' ,fontSize:"14px"}}>
              Inicio
            </Link>
          </li>
          <li className="mr-10">
            <Link href="/shop" className="hover:text-gray-200" style={{fontSize:"14px"}}>
              Tienda
            </Link>
          </li>
          <li className="mr-10">
            <Link href="/products" className="hover:text-gray-200" style={{fontSize:"14px"}}>
              Productos
            </Link>
          </li>
          <li className="mr-10">
            <Link href="/contacto" className="hover:text-gray-200" style={{fontSize:"14px"}}>
              Contactanos
            </Link>
          </li>
        </ul>
      </div>

      {/* Sección Derecha */}
      <div style={{ marginRight: "200px" }}>
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
            <Link href="/perfil" className="hover:text-gray-200">
              <span><FontAwesomeIcon icon={faBagShopping} /></span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
