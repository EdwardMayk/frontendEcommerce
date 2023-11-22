import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { useLoginMutation } from '../../graphql/generated/schema';
import Register from './register';
import Navbar from '@/components/navbar';
import Link from 'next/link';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();


  const [loginMutation, { data, error }] = useLoginMutation();



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
        console.log('Inicio de sesión exitoso');
        const userRole = response.data.login.role;
        console.log(document.cookie);

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
      <Navbar />

      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="mr-8">

          <Image src="/images/audifonos.png" width={800} height={400} alt="" />
        </div>

        <div className="w-full sm:w-96 bg-white p-8 rounded shadow-md">
          {/* Contenedor del formulario de inicio de sesión */}
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Inicia sesión</h2>
          <form className="space-y-4">
            <div>
              <p className="text-gray-600 mt-4">
                ¿Aún no tienes una cuenta? <Link href="/registro" className="text-blue-500">Regístrate</Link>
              </p>
              <label htmlFor="username" className="block text-sm font-medium text-gray-600">
                email
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="mt-1 p-2 w-full border rounded-md"
                required
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
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                className="mr-2"
              />
              <label htmlFor="rememberMe" className="text-sm text-gray-600">
                Recuérdame
              </label>
            </div>
            <Link href="/olvido-contrasena" className="text-sm text-blue-500">
              ¿Has olvidado la contraseña?
            </Link>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md hover:bg-green-600"
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
