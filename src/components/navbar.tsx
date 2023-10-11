import Link from 'next/link';
import { useCookies } from 'react-cookie'; // Importa useCookies para acceder a las cookies

function Navbar() {
  const [cookies, ,] = useCookies(['access_token', 'role']); // Obtén las cookies de access_token y role

  console.log('cookies', cookies);

    const isLoggedIn = cookies.access_token != null; // Verifica si el usuario está autenticado
    console.log('isLoggedIn', isLoggedIn);
    const userRole = cookies.role || ''; // Obtiene el rol del usuario

  return (
    <div className="bg-gray-900 text-white">
      <div className="container mx-auto py-6 px-4 md:px-12">
        <div className="flex justify-between items-center">
          <a href="#" className="text-3xl font-bold font-heading">
            Logo Here
          </a>
          <ul className="hidden md:flex space-x-12 font-semibold font-heading">
            <li>
              <Link href="/login" className="hover:text-gray-200">
                Home
              </Link>
            </li>
            {isLoggedIn && ( // Mostrar elementos solo si el usuario está autenticado
              <>
                <li>
                  <Link href="/products" className="hover:text-gray-200">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/favorite" className="hover:text-gray-200">
                    Favorites
                  </Link>
                </li>
                {userRole === 'admin' && ( // Mostrar el elemento solo si el usuario tiene rol de administrador
                  <li>
                    <Link href="/dashboard" className="hover:text-gray-200">
                      Dashboard
                    </Link>
                  </li>
                )}
              </>
            )}
          </ul>
          <div className="hidden xl:flex items-center space-x-5">
            {/* Otros enlaces de navegación */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
