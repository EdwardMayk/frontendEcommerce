import Navbar from '@/components/navbar';
import { useUser } from '@/context/UserContext';
import { useRouter } from 'next/router'; // Asegúrate de importar useRouter
import React from 'react';

const Profile = () => {
    const { user, logout } = useUser();
    const router = useRouter(); // Obtén el objeto router

    if (!user) {
        // Manejar el caso en el que el usuario no esté autenticado
        // Puedes redirigirlo a la página de inicio de sesión u hacer cualquier otra acción
        return <p className="text-center mt-8 text-xl">No estás autenticado.</p>;
    }

    const { name, email, role } = user;

    const handleLogout = () => {
        // Realizar cualquier lógica adicional de cierre de sesión aquí
        // Por ejemplo, enviar una solicitud al servidor para cerrar la sesión
        logout();

        // Redirigir al usuario al dashboard después de cerrar sesión
        router.push('/dashboard');
    };

    return (
        <>
            <div>
                <div style={{ marginRight: "50px" }}>
                    <Navbar />
                </div>
                <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded-md shadow-md" style={{ marginTop: "20px" }}>
                    <h1 className="text-2xl font-bold mb-4">Bienvenido, {name}</h1>
                    <p className="mb-2"><span className="font-bold">Email:</span> {email}</p>
                    <p className="mb-4"><span className="font-bold">Rol:</span> {role}</p>

                    <button
                        onClick={handleLogout}
                        className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:shadow-outline-red"
                    >
                        Cerrar Sesión
                    </button>
                </div>
            </div>
        </>
    );
};

export default Profile;
