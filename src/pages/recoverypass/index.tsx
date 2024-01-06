import React, { useState } from 'react';
import Link from 'next/link';
import { useGenerateCodePasswordMutation } from '../../../graphql/generated/schema';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Index = () => {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const [generateCodePassword] = useGenerateCodePasswordMutation();

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Llama a la mutación con el correo electrónico
      const { data } = await generateCodePassword({
        variables: {
          email: email,
        },
      });

      console.log(data);

      router.push('/change');
    } catch (error) {
      console.error('Error al ejecutar la mutación:', error);
    }
  };

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/*

      RESPALDO ANTIGUO CODIGO

      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
          <div className="flex justify-center mb-8"></div>
          <h1 className="text-2xl font-semibold text-center text-gray-500 mt-8 mb-6">
            Recuperación de contraseña
          </h1>
          <p className="text-sm text-gray-600 text-center mt-8 mb-6">
            Introduce tu correo electrónico para restablecer tu contraseña
          </p>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-6">
              <label className="block mb-2 text-sm text-gray-600">
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-cyan-500 focus:border-black"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full md:w-32 bg-black text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mt-4 mb-4"
            >
              Enviar
            </button>
          </form>
          <div className="text-center">
            <p className="text-sm">
              Volver a{' '}
              <Link href="/auth" className="text-cyan-600">
                Iniciar sesión
              </Link>
            </p>
          </div>
        </div>
      </div >
      */}

      <main className="h-screen bg-gray-900 lg:flex flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 space-y-4 z-20">
          <h3 className="text-gray-800 text-center text-2xl font-bold sm:text-3xl pt-8">Recuperar Contraseña</h3>
          <div className="text-center py-2 space-y-2 text-gray-500">
            Escribe tu correo electrónico para restablecer tu contraseña, te mandaremos un código al correo, para confirmar que sea  tu cuenta.
          </div>
          <form onSubmit={handleFormSubmit} className="mt-8 space-y-5">
            <div>
              <label htmlFor="username" className="font-medium text-gray-500">
                Correo Electrónico
              </label>
              <div className="relative mt-2">
                <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Ingrese su correo electrónico"
                  className="w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
            </div>
            <button
              type="submit" className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
            >
              Enviar Código
            </button>
          </form>
          <div className="pt-6 mt-5 space-y-2 text-center">
            Volver a
            <Link href={"/auth"} className='ml-2 font-medium text-indigo-600 hover:text-indigo-500 text-center'>
              Iniciar Sesión
            </Link>
          </div>
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
};

export default Index;
