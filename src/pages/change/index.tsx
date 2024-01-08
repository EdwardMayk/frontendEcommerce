import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { useResetPasswordMutation } from '../../../graphql/generated/schema';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEye, faEyeSlash, faKey, faLock } from '@fortawesome/free-solid-svg-icons';

const Index = () => {
    const [isPasswordHidden, setPasswordHidden] = useState(true)
    const fieldsRef = useRef()
    const [state, setState] = useState({ code1: "", code2: "", code3: "", code4: "", code5: "" })

    const router = useRouter();

    const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const email = (event.target as any).email.value;
        const code = (event.target as any).code.value;
        const password = (event.target as any).password.value;

        try {
            const response = await resetPasswordMutation({
                variables: {
                    email: email,
                    resetCode: code,
                    newPassword: password,
                },
            });

            console.log('Mutation Response:', response);
            router.push('/auth');

        } catch (mutationError) {
            console.error('Mutation Error:', mutationError);
        }
    };

    return (
        <>
            <main className="h-screen flex items-center justify-center bg-gray-900 px-4">
                <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 py-16 space-y-4 z-20">
                    <div className="flex items-center justify-center">
                        <Image
                            alt=""
                            src={'/img/LogoRAG4.png'}
                            quality={100}
                            width={250}
                            height={250}
                            className="rounded-full"
                        />
                    </div>
                    <div className="text-center">
                        <h3 className="mt-4 text-gray-800 text-2xl font-bold sm:text-3xl pt-5">Cambia tu Contraseña</h3>
                        <div className="mt-5 space-y-2">
                            Volver a
                            <Link href={"/auth"} className='ml-1 font-medium text-indigo-600 hover:text-indigo-500'>
                                Iniciar Sesión
                            </Link>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                        <div>
                            <label htmlFor="email" className="font-medium text-gray-500">
                                Correo Electrónico
                            </label>
                            <div className="relative mt-2">
                                <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto" />
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder="Vuelva a Ingresar su correo electrónico"
                                    className="w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg input-field"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="code" className="font-medium text-gray-500">
                                Código de Verificación
                            </label>
                            <div className="relative mt-2">
                                <FontAwesomeIcon icon={faLock} className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto" />
                                <input
                                    type="code"
                                    id="code"
                                    name="code"
                                    required
                                    placeholder="Digite el código enviado a su correo"
                                    className="w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg input-field"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="password" className="font-medium text-gray-500">
                                Nueva Contraseña
                            </label>
                            <div className="relative mt-2">
                                <FontAwesomeIcon icon={faKey} className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto" />
                                <div className="flex items-center">
                                    <button
                                        className="text-gray-400 absolute right-3 inset-y-0 my-auto active:text-gray-600"
                                        onClick={() => setPasswordHidden(!isPasswordHidden)}
                                    >
                                        {isPasswordHidden ? (
                                            <FontAwesomeIcon icon={faEyeSlash} className="w-6 h-6" />
                                        ) : (
                                            <FontAwesomeIcon icon={faEye} className="w-6 h-6" />
                                        )}
                                    </button>
                                    <input
                                        type={isPasswordHidden ? "password" : "text"}
                                        id="password"
                                        name="password"
                                        required
                                        placeholder="Escriba su nueva contraseña segura"
                                        className="w-full pr-12 pl-12 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg input-field"
                                    />
                                </div>
                            </div>
                        </div>
                        <button
                            type="submit" className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                        >
                            Cambiar Contraseña
                        </button>
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
};

export default Index;


