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

    return (
        <>

            <footer className="text-white px-4 py-5 max-w-screen-xl mx-auto md:px-8 md:py-16">
                <div className="max-w-lg sm:mx-auto sm:text-center">
                    <div className="flex justify-center items-center">
                        <Image src="/img/Logo5.png" width={180} height={100} alt="" />
                    </div>
                    <p className="leading-relaxed mt-5 text-[15px]">
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
                    <div className="mt-4 sm:mt-0">
                        &copy; 2023 RAG Tienda All rights reserved.
                    </div>
                    <div className="mt-6 sm:mt-0">
                        <ul className="flex items-center space-x-4">
                            <li className="w-10 h-10 flex items-center justify-center">
                                <Link href="URL_DE_FACEBOOK">
                                    <FontAwesomeIcon icon={faFacebook} style={{ fontSize: '1.6rem' }} />
                                </Link>
                            </li>

                            <li className="w-10 h-10 flex items-center justify-center">
                                <Link href="https://wa.link/8trd61">
                                    <FontAwesomeIcon icon={faWhatsapp} style={{ fontSize: '1.6rem' }} />
                                </Link>
                            </li>

                            <li className="w-10 h-10 flex items-center justify-center">
                                <Link href="URL_DE_TELEGRAM">
                                    <FontAwesomeIcon icon={faTelegram} style={{ fontSize: '1.6rem' }} />
                                </Link>
                            </li>

                            <li className="w-10 h-10 flex items-center justify-center">
                                <Link href="URL_DE_INSTAGRAM">
                                    <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '1.6rem' }} />
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
                <style jsx>{`
                    .svg-icon path,
                    .svg-icon polygon,
                    .svg-icon rect {
                        fill: currentColor;
                    }
                `}</style>
            </footer>
        </>
    )
}


export default FooterInterface;
