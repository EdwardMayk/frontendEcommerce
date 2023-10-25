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
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-200">
                About
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-gray-200">
                Tienda
              </Link>
            </li>
            <li>
              <Link href="/catalogo" className="hover:text-gray-200">
                Catálogo
              </Link>
            </li>
          </ul>
          <div className="flex items-center space-x-10">
            <Link href="/login" className="text-gray-800 px-4 py-2 rounded">
              Sign In
            </Link>
            <Link href="/signup" className="bg-blue-700 text-white px-4 py-2 rounded-full">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>

    
  );
}

export default Navbar;
