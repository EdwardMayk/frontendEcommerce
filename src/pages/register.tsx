import React, { useState, ChangeEvent, FormEvent } from 'react';
import Navbar from '@/components/navbar';
import Image from 'next/image';
import Link from 'next/link';
import { useCreateUserMutation } from '../../graphql/generated/schema';
import { useRouter } from 'next/router';

const Register: React.FC = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const handleFirstnameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFirstname(e.target.value);
  };

  const handleLastnameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLastname(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Llamar a tu mutación GraphQL o enviar una solicitud a la API
      const response = await registerMutation({
        variables: {
          firstname,
          lastname,
          email,
          password
        },
      });

      // Resto de la lógica de manejo de respuesta
      if (response.data?.createUser) {
        console.log('Registro exitoso:', response.data.createUser);

        // Puedes redirigir a la página de inicio de sesión o a donde desees
        router.push('/login');
      } else {
        console.error('Error en el registro:', response.errors);
      }
    } catch (error) {
      console.error('Error en el registro:', error);
    }
  };

  const [registerMutation, { data, error }] = useCreateUserMutation();

  return (
    <>
      <Navbar />
      <div style={{ display: 'flex', height: '100vh' }}>
        <div className="w-1/2 h-full p-8 flex items-center">
          <Image src="/images/audifonos.png" width={800} height={400} alt="logo_dashboard" />
        </div>
        <div className="w-1/2 h-full p-8 flex items-center" style={{ backgroundColor: 'white', marginBottom: '200px' }}>
          <form className="w-full max-w-md space-y-4" onSubmit={handleRegister}>
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Regístrate</h2>
            <div>
              <label htmlFor="firstname" className="block text-sm font-medium text-gray-600">
                Nombre
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                value={firstname}
                onChange={handleFirstnameChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="lastname" className="block text-sm font-medium text-gray-600">
                Apellido
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                value={lastname}
                onChange={handleLastnameChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
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
                value={password}
                onChange={handlePasswordChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md hover:bg-green-600"
            >
              Registrar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
