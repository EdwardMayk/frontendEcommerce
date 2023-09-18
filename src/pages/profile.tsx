import React from 'react';
import { useRouter } from 'next/router';
import Navbar from '@/components/navbar';

const UserProfile = () => {
  const router = useRouter();
  const { userId } = router.query; // Obtener el ID del usuario desde la URL

  // Aquí podrías cargar los detalles del usuario con el ID proporcionado
  // desde una API o desde algún otro lugar de tu elección.

  // Ejemplo de datos de usuario simulados
  const userData = {
    id: userId,
    name: 'Nombre del Usuario',
    email: 'usuario@example.com',
    // Otros detalles del usuario
  };

  return (
    <>
    <Navbar />
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold mb-4">Perfil de Usuario</h1>
        {userData ? (
          <div>
            <h2 className="text-xl font-semibold">{userData.name}</h2>
            <p className="text-gray-600 mb-2">Email: {userData.email}</p>
            {/* Mostrar otros detalles del usuario según sea necesario */}
          </div>
        ) : (
          <p className="text-gray-600">Cargando datos del usuario...</p>
        )}
      </div>
    </div>
    </>
  );
};

export default UserProfile;
