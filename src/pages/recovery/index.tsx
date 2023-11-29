import React, { useState } from 'react';
import Link from 'next/link';
import { useGenerateCodePasswordMutation } from '../../../graphql/generated/schema';
import { useRouter } from 'next/router';

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
    </>
  );
};

export default Index;
