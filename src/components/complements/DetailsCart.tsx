import React from 'react';
import Link from 'next/link';

const DetailsCart = () => {
    return (
        <div>
            <h2 className="sr-only">Steps</h2>

            <div>
                <ol
                    className="grid grid-cols-1 divide-x divide-gray-100 overflow-hidden rounded-lg border border-gray-100 text-sm text-gray-500 sm:grid-cols-3"
                >
                    <li className="flex items-center justify-center gap-2 p-4">
                        <svg
                            className="h-7 w-7 shrink-0"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                            />
                        </svg>

                        <p className="leading-none">
                            <strong className="block font-medium"> Detalles </strong>
                            <small className="mt-1"> Información acerca de ti. </small>
                        </p>
                    </li>

                    <li className="flex items-center justify-center gap-2 p-4">
                        <svg
                            className="h-7 w-7 shrink-0"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                            />
                        </svg>

                        <p className="leading-none">
                            <strong className="block font-medium"> Método de Pago </strong>
                            <small className="mt-1"> Tus pagos están seguros. </small>
                        </p>
                    </li>
                </ol>
            </div>
        </div>

    );
};

export default DetailsCart;


