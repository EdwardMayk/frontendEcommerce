// Importa las librerías y componentes necesarios
import React, { useState } from 'react';
import { useRouter } from 'next/router';

import Navbar from '@/components/navbar';
import Link from 'next/link';
import { useUser } from '@/context/UserContext';
import { useCreateUserMutation } from '../../../graphql/generated/schema';

function Register() {
    // Estado local para los campos del formulario
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');

    // Funciones para manejar cambios en los campos del formulario
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
    const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value);
    const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setLastName(e.target.value);
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);


    // Hooks y funciones para la autenticación y navegación
    const router = useRouter();
    const { login } = useUser();
    const [registerMutation, { data, error, loading }] = useCreateUserMutation();

    // Función para manejar el registro
    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await registerMutation({
                variables: {
                    email,
                    firstname: firstName,
                    lastname: lastName,
                    password,
                },
            });

            if (response.data) {
                console.log('Registro exitoso');
                router.push('/auth');
            } else {
                console.error('Registro fallido');
            }
        } catch (error) {
            console.error('Error en la mutación de registro:', error);
        }
    };


    return (
        <>
            {/* Estructura de la interfaz de usuario similar a la de Login */}
            <div className="min-h-screen flex flex-col sm:flex-row items-center justify-center bg-white">
                {/* ... (Código similar al de Login para la imagen) */}
                <div className="w-full sm:w-96 bg-white p-8 rounded shadow-md">
                    <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">Regístrate</h2>
                    <form className="space-y-4" onSubmit={handleRegister}>
                        {/* Campos del formulario para el registro */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                                Email
                            </label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                className="mt-1 p-2 w-full border rounded-md"
                                required
                                value={email}
                                onChange={handleEmailChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">
                                Nombre
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                className="mt-1 p-2 w-full border rounded-md"
                                required
                                value={firstName}
                                onChange={handleFirstNameChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">
                                Apellido
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                className="mt-1 p-2 w-full border rounded-md"
                                required
                                value={lastName}
                                onChange={handleLastNameChange}
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
                        {/* Enlaces y botón similar al componente Login */}
                        <Link href="/login" className="text-sm text-blue-500 text-center">
                            ¿Ya tienes una cuenta? Inicia sesión
                        </Link>
                        <button
                            type="submit"
                            className="w-full bg-black text-white py-2 rounded-md hover:bg-green-600"
                            disabled={loading}
                        >
                            Registrarse
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Register;
