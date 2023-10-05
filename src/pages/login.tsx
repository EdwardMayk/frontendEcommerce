import React, { useState } from 'react';
import Image from 'next/image';
import {  useNavigate } from 'react-router-dom'; // Importa useHistory para la redirección

import { useRouter } from "next/navigation";
import { useLoginMutation } from '../../graphql/generated/schema';
import Register from './register';



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
        const userRole = response.data.login.; // Obtén el rol del usuario

        if (userRole === 'admin') {
          // Redirige a la página de Dashboard solo si es un administrador
          router.push('/dashboard');
        } else {
          console.error('Acceso denegado: No eres un administrador');
        }
      } else {
        console.error('Inicio de sesión fallido');
      }
    } catch (error) {
      console.error('Error en la mutación de inicio de sesión:', error);
    }
  };
  return (

    <div className="flex flex-col items-center md:flex-row md:h-screen">
      <div className="flex items-center justify-center w-full md:w-1/2">
        <Image src="/images/cat.jpeg" alt="Login Image" width={400} height={600} />
      </div>
      <div className="flex flex-col items-center justify-center w-full md:w-1/4">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h1 className="text-2xl font-bold">Welcome back!</h1>
            <p className="mt-2 text-gray-600">
              Please sign in to your account.
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div>
              <label htmlFor="email" className="block font-bold text-gray-700">
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block font-bold text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-3 font-bold text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700"
              >
                Sign In
              </button>
            </div>
          </form>
          {error && <p className="text-red-500">{error.message}</p>} {/* Aquí se muestra el mensaje de error */}
          {data && data.login.status === 'ok' && (
            <p className="text-green-500">Inicio de sesión exitoso</p>
        )} {/* Mensaje de éxito */}
         <p className="mt-4">
            ¿No tienes una cuenta?{' '}
            <a href="/register" className="text-indigo-500 hover:underline">
              Regístrate aquí
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
