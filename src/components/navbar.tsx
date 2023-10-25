import Link from 'next/link';

function Navbar() {
  return (
    <nav className="bg-white p-4 text-xs">
      <div className="flex justify-center items-center">
        <div className="flex items-center">
          {/* <Link href="/" className="text-2xl font-bold hover:text-gray-600">
            Logo
          </Link> */}
        </div>
        <div className="flex items-center  space-x-10">
          <ul className="flex space-x-10">
            <li>
              <Link href="/" className="hover:text-gray-200">
                Incio
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-200">
                Nosotros
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-gray-200">
                Tienda
              </Link>
            </li>
            <li>
              <Link href="/favorite" className="hover:text-gray-200">
                Favoritos
              </Link>
            </li>
          </ul>
          <div className="flex items-center space-x-10">
            <Link href="/login" className="text-gray-800 px-4 py-2 rounded">
              Iniciar Sesion
            </Link>
            <Link href="/register" className="bg-blue-700 text-white px-4 py-2 rounded-full">
              Registrarse
            </Link>
          </div>
        </div>
      </div>
    </nav>

    
  );
}

export default Navbar;
