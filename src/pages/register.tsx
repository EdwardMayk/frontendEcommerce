import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faEnvelopeOpen, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import Navbar from '@/components/navbar';


const Register = () => {
  return (
    <>
    <Navbar />
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="bg-transparent p-8 rounded shadow-md w-96 text-center text-black">
        <div className="mb-4 text-black">
          <h1 className="text-2xl font-bold mb-4">Registro</h1>
          <p>Por favor introduzca sus datos</p>
        </div>
        <div className="mb-4 relative text-black border-2 rounded-md">
          <FontAwesomeIcon
            icon={faUser}
            className="absolute left-3 top-3 text-gray-400 "
          />
          <input
            type="text"
            placeholder="Nombre"
            className="w-full border border-gray-300 rounded p-2 pl-8 bg-transparent text-black" // Hacemos el fondo transparente
          />
        </div>
        <div className="mb-4 relative border-2 rounded-md text-black">
          <FontAwesomeIcon
            icon={faUser}
            className="absolute left-3 top-3 text-gray-400"
          />
          <input
            type="text"
            placeholder="Apellido"
            className="w-full border border-gray-300 rounded p-2 pl-8 bg-transparent" // Hacemos el fondo transparente
          />
        </div>
        <div className="mb-4 relative border-2 rounded-md text-black">
          <FontAwesomeIcon
            icon={faEnvelopeOpen}
            className="absolute left-3 top-3 text-gray-400"
          />
          <input
            type="email"
            placeholder="Correo"
            className="w-full border border-gray-300 rounded p-2 pl-8 bg-transparent" // Hacemos el fondo transparente
          />
        </div>
        <div className="mb-4 relative border-2 rounded-md text-black">
          <FontAwesomeIcon
            icon={faLock}
            className="absolute left-3 top-3 text-gray-400"
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="w-full border border-gray-300 rounded p-2 pl-8 bg-transparent" // Hacemos el fondo transparente
          />
        </div>
        <div className="mb-4 relative border-2 rounded-md text-black">
          <FontAwesomeIcon
            icon={faLock}
            className="absolute left-3 top-3 text-gray-400"
          />
          <input
            type="password"
            placeholder="Confirmar contraseña"
            className="w-full border border-gray-300 rounded p-2 pl-8 bg-transparent" // Hacemos el fondo transparente
          />
        </div>
        <div>
          <button className="text-black font-semibold py-2 px-4 rounded-md border border-[#36981D]"> {/* Hacemos el fondo del botón transparente */}
            Registrarse
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Register;
