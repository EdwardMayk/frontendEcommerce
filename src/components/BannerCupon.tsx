import React from 'react';
import Link from 'next/link';

const BannerCupon = () => {
  return (
    <div className="p-6 py-3 dark:bg-indigo-400 dark:text-gray-900">
        <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between">
                <h2 className="text-center text-4xl tracki font-bold">
                    Descuento-
                    <br className="sm:hidden" />
                    10% Off
                </h2>
                <div className="space-x-2 text-center py-2 lg:py-0">
                    <span>Descuento del 10% en toda la tienda, usa nuestro código:</span>
                    <span className="font-bold text-lg">RAGuwu10</span>
                </div>
                <Link
                    href="/contacto"
                    rel="noreferrer noopener"
                    className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-50 dark:text-gray-900 dark:border-gray-400"
                >
                    ¡Comprar Ahora!
                </Link>
            </div>
        </div>
    </div>
  );
};

export default BannerCupon;


