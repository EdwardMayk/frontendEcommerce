import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useLoginMutation } from '../../../graphql/generated/schema';
import Link from 'next/link';
import { useUser } from '@/context/UserContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useUser();

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
        const user = {
          email: response.data.login.email,
          name: response.data.login.name,
          role: response.data.login.role,
        };
        login(user);

        const userRole = response.data.login.role;

        if (userRole === 'admin') {
          router.push('/admin');
        } else {
          router.push('/dashboard');
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
      <main className="h-screen bg-gray-900 lg:flex flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 py-16 space-y-4 z-20">
          <div className="flex items-center justify-center">
            <Image
              alt=""
              src={'/images/RAGlogoFooter&NavBar.png'}
              quality={100}
              width={250}
              height={250}
              className="rounded-full"
            />
          </div>
          <div className="text-center">
            <h3 className="mt-4 text-gray-800 text-2xl font-bold sm:text-3xl pt-5">Iniciar Sesión</h3>
            <div className="mt-5 space-y-2">
              ¿Aún no tienes una cuenta?
              <Link href={"/register"} className='ml-1 font-medium text-indigo-600 hover:text-indigo-500'>
                Regístrate
              </Link>
            </div>
          </div>
          <form onSubmit={handleLogin} className="mt-8 space-y-5">
            <div>
              <label htmlFor="username" className="font-medium">
                Correo Electrónico
              </label>
              <input
                type="text"
                id="username"
                name="username"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="font-medium">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="px-3 flex items-center">
              <input type="checkbox" id="rememberMe" name="rememberMe" className="mr-2" />
              <label htmlFor="rememberMe" className="text-sm text-gray-600">
                Recordar mis credenciales
              </label>
            </div>
            <button
              type="submit" className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150" disabled={loading}
            >
              Iniciar Sesión
            </button>
            <div className="text-center">
              <Link href="/recoverypass" className="hover:text-indigo-600">
                ¿Has olvidado la contraseña?
              </Link>
            </div>
          </form>
        </div>
        <div
          className="absolute inset-0 my-auto h-[500px] rounded-full"
          style={{
            background: "linear-gradient(rgba(192, 132, 252, 0.2), rgba(232, 121, 249, 0.26), rgba(192, 132, 252, 0.1))",
            filter: "blur(40px)"
          }}
        />
      </main>
    </>
  );
}

export default Login;
