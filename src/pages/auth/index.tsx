import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router'; // Change "next/navigation" to "next/router"
import { useLoginMutation } from '../../../graphql/generated/schema';

import Navbar from '@/components/navbar';
import Link from 'next/link';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const [loginMutation, { data, error, loading }] = useLoginMutation();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await loginMutation({
        variables: {
          email,
          password,
        },
      });

      if (response.data && response.data.login.status === 'ok') {
        const userRole = response.data.login.role;

        if (userRole === 'admin') {
          router.push('/dashboard');
        } else {
          router.push('/products');
        }
      } else {
        console.error('Inicio de sesión fallido');
      }
    } catch (error) {
      console.error('Error en la mutación de inicio de sesión:', error);
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col sm:flex-row items-center justify-center bg-white">
        <div className="mr-8 mb-4 sm:mb-0">
          <Image src="/images/audifonos.png" width={800} height={400} alt="logo_dashboard" />
        </div>

        <div className="w-full sm:w-96 bg-white p-8 rounded shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">Inicia sesión</h2>
          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <p className="text-gray-600 mt-4 text-center sm:text-left">
                ¿Aún no tienes una cuenta? <Link href="/registro" className="text-blue-500">Regístrate</Link>
              </p>
              <label htmlFor="username" className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="mt-1 p-2 w-full border rounded-md"
                required
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 p-2 w-full border rounded-md"
                required
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="rememberMe" name="rememberMe" className="mr-2" />
              <label htmlFor="rememberMe" className="text-sm text-gray-600">
                Recuérdame
              </label>
            </div>
            <Link href="/recovery" className="text-sm text-blue-500 text-center">
              ¿Has olvidado la contraseña?
            </Link>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md hover:bg-green-600"
              disabled={loading}
            >
              Iniciar Sesión
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
