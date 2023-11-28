import React from 'react';
import Link from 'next/link';

const password= () => {
  return (
<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Iniciar sesión - Mi aplicación</title>
  <link
    href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
    rel="stylesheet"
  />
  <div className="min-h-screen flex items-center justify-center">
    <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
      <div className="flex justify-center mb-8">
        <img
          src="https://www.emprenderconactitud.com/img/POC%20WCS%20(1).png"
          alt="Logo"
          className="w-30 h-20"
        />
      </div>
      <h1 className="text-2xl font-semibold text-center text-gray-500 mt-8 mb-6">
        Recuperación de contraseña
      </h1>
      <p className="text-sm text-gray-600 text-center mt-8 mb-6">
        Introduce tu correo electrónico para restablecer tu contraseña
      </p>
      <form>
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm text-gray-600">
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-32 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mt-4 mb-4"
        >
          Enviar
        </button>
      </form>
      <div className="text-center">
        <p className="text-sm">
          Volver a{" "}
          <a href="#" className="text-cyan-600">
            Iniciar sesión
          </a>
        </p>
      </div>
      <p className="text-xs text-gray-600 text-center mt-8">© 2023 WCS LAT</p>
    </div>
  </div>
</>

  );
};

export default password;


