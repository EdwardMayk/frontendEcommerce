import React from 'react';
import Link from 'next/link';

const index = () => {
    return (
        <>
            <section className="bg-white">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a
                        href="#"
                        className="flex items-center mb-6 text-3xl font-bold text-primary-600"
                    >
                        
                        RAG
                    </a>
                    <div className="w-full p-8 bg-white rounded-lg shadow-md md:max-w-md">
                        <h2 className="mb-4 text-2xl font-bold leading-tight text-primary-600">
                            Cambia tu Contraseña
                        </h2>
                        <form className="space-y-6" action="#">
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-1 text-sm font-medium text-gray-900"
                                >
                                    Correo electrónico
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="input-field"
                                    placeholder="name@company.com"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="confirm-password"
                                    className="block mb-1 text-sm font-medium text-gray-900"
                                >
                                    Codigo
                                </label>
                                <input
                                    type="code"
                                    name="code"
                                    id="code"
                                    placeholder=""
                                    className="input-field"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block mb-1 text-sm font-medium text-gray-900"
                                >
                                    Nueva Contraseña
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="input-field"
                                    required
                                />
                            </div>
                            
                            
                            <button
                                type="submit"
                                className="w-full text-white bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-600 font-medium rounded-lg text-sm px-6 py-3"
                            >
                               Cambiar Contraseña
                            </button>
                        </form>
                    </div>
                </div>
            </section>

        </>
    );
};

export default index;


