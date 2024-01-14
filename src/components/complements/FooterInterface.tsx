import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faWhatsapp, faTelegram, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const FooterInterface = () => {
    const footerNavs = [
        { name: 'Inicio', href: '/' },
        { name: 'Tienda', href: '/shop' },
        { name: 'Productos', href: '/products' },
        { name: 'Contáctanos', href: '/contacto' },
    ];

    const ColorsBWDiv = "text-black dark:text-white bg-gray-100 dark:bg-black"
    const ColorsBWIcons = "inline-block text-blue-600 dark:text-white"

    return (
        <>
            <footer className={`px-4 py-5 max-w-screen-xl mx-auto md:px-8 md:py-16 ${ColorsBWDiv}`}>
                <div className="max-w-lg sm:mx-auto sm:text-center">
                    <div className="mt-48 flex justify-center items-center">
                        <Image
                            alt=""
                            src={'/img/LogoRAG4.png'}
                            width={190}
                            height={0}
                            className="dark:hidden"
                        />
                        <Image
                            alt=""
                            src={'/img/LogoRAG4W.png'}
                            width={190}
                            height={0}
                            className="hidden dark:block"
                        />
                    </div>
                    <p className="font-semibold leading-relaxed mt-5 text-[15px]">
                        Descubre un mundo de innovación y estilo con RAG Tienda. Enamórate de la tecnología que redefine tu vida diaria. Desde gadgets futuristas hasta accesorios con estilo, hacemos que la electrónica sea emocionante. ¡Explora el futuro con nosotros!
                    </p>
                </div>
                <div>

                </div>
                <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
                    {footerNavs.map((item, idx) => (
                        <li key={idx} className="ease-in-out duration-300 hover:[text-shadow:_0_0_20px_#ea00d9]">
                            <Link href={item.href}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="mt-8 items-center justify-between sm:flex">
                    <div className={`mt-4 sm:mt-0 font-semibold ${ColorsBWIcons} `}>
                        &copy; Copyright © 2023 RAG Tienda - All rights reserved.

                        <p className='font-normal'>
                            <Link href="/DevelopersTeam">
                                Equipo de desarrolladores
                            </Link>
                        </p>
                    </div>
                    <div className={`mt-6 sm:mt-0`}>
                        <ul className="flex items-center space-x-4">
                            <li className="w-10 h-10 flex items-center justify-center">
                                <Link href="URL_DE_FACEBOOK">
                                    <FontAwesomeIcon icon={faFacebook} style={{ fontSize: '1.6rem' }} className={` ${ColorsBWIcons} `} />
                                </Link>
                            </li>

                            <li className="w-10 h-10 flex items-center justify-center">
                                <Link href="https://wa.link/8trd61">
                                    <FontAwesomeIcon icon={faWhatsapp} style={{ fontSize: '1.6rem' }} className={` ${ColorsBWIcons} `} />
                                </Link>
                            </li>

                            <li className="w-10 h-10 flex items-center justify-center">
                                <Link href="URL_DE_TELEGRAM">
                                    <FontAwesomeIcon icon={faTelegram} style={{ fontSize: '1.6rem' }} className={` ${ColorsBWIcons} `} />
                                </Link>
                            </li>

                            <li className="w-10 h-10 flex items-center justify-center">
                                <Link href="URL_DE_INSTAGRAM">
                                    <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '1.6rem' }} className={` ${ColorsBWIcons} `} />
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}


export default FooterInterface;
