import Navbar from '@/components/navbar';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Button } from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faLock, faMoneyBill, faPhone, faStar, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import Product from '@/components/Product';
import ProductInterface from '@/components/ProductInterface';
import FooterInterface from '@/components/FooterInterface';
import SuscribeInterface from '@/components/SuscribeInterface';
import BannerCupon from '@/components/BannerCupon';
import LogOut from '@/components/LogOut';

const stats = [
    {
        data: "3 Mil",
        title: "Visitas"
    },
    {
        data: "443+",
        title: "Productos"
    },
    {
        data: "4193+",
        title: "Clientes"
    },
    {
        data: "0+",
        title: "Por Descubrir"
    },
    {
        data: "0+",
        title: "Por Descubrir"
    },
];

const Dashboard = () => {
    return (
        <>            
            <Navbar />            
            <BannerCupon/>
            <section>            
                <div className="bg-white max-w-screen-xl mx-auto text-gray-600 items-center justify-between overflow-hidden md:flex md:px-20 md:py-4">
                    <div className="flex-none md:mt-10 space-y-5 md:order-2 md:ml-auto">
                        <Image src="/images/RAGlogoDashboard.png" alt="" width={475} height={0}/>
                    </div>
                    <div className="flex-none space-y-5 md:order-1 px-4 sm:max-w-lg md:px-6 lg:max-w-xl">                        
                        <h1 className="text-xl text-indigo-600 font-medium">
                            Bienvenido a R.A.G.
                        </h1>
                        <h2 className="text-4xl text-gray-800 font-extrabold md:text-5xl">
                            RED APARATUS GAMING
                        </h2>
                        <div className="mx-auto text-center">
                            <p className="text-justify">                            
                                Explora un universo de innovación y estilo en nuestra tienda de tecnología gamer. Aquí, no solo encontrarás tus equipos, computadoras y accesorios favoritos, sino que también descubrirás la esencia misma de la experiencia gamer. Nuestros productos están cuidadosamente seleccionados para ofrecerte el máximo rendimiento al mejor precio, y trabajamos con las marcas más reconocidas del mundo gamer.
                            </p>
                        </div>
                        
                        <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                            <Link href="/contacto" className="block py-2 px-4 text-center text-white font-medium bg-indigo-500 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none">
                                ¿Quienes somos?
                            </Link>
                            <Link href="/tienda" className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex">
                                Vísita nuestra tienda!
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="bg-white py-16 max-w-screen-xl mx-auto px-4 md:px-8">
                        <div className="max-w-xl mx-auto text-center">
                            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                                ¡Brindamos las mejores marcas!
                            </h3>                            
                        </div>
                        <div className="mt-16 flex justify-center">
                            <ul className="inline-grid grid-cols-2 gap-x-10 gap-y-12 md:gap-x-16 md:grid-cols-3 lg:grid-cols-4">

                                    {/* LOGO 1 */}
                                <li>
                                    <Image width="200" height="28" 
                                    src="/images/logoLogitech.png"
                                    className=""
                                    alt=""
                                    />
                                </li>

                                    {/* LOGO 2 */}
                                <li>
                                    <Image width="200" height="28" 
                                    src="/images/logoAsus.png"
                                    className=""
                                    alt=""
                                    />
                                </li>

                                    {/* LOGO 3 */}
                                <li>
                                    <Image width="200" height="28" 
                                    src="/images/logoCorsair.png"
                                    className=""
                                    alt=""
                                    />
                                </li>

                                    {/* LOGO 4 */}
                                <li>
                                    <Image width="200" height="28" 
                                    src="/images/logoMsi.png"
                                    className=""
                                    alt=""
                                    />
                                </li>

                                    {/* LOGO 5 */}
                                <li>
                                    <Image width="200" height="28" 
                                    src="/images/logoRazer.png"
                                    className=""
                                    alt=""
                                    />
                                </li>

                                    {/* LOGO 6 */}
                                <li>
                                    <Image width="200" height="28" 
                                    src="/images/logoRedragon.png"
                                    className=""
                                    alt=""
                                    />
                                </li>

                                    {/* LOGO 7 */}
                                <li>
                                    <Image width="200" height="28" 
                                    src="/images/logoRog.png"
                                    className=""
                                    alt=""
                                    />
                                </li>

                                    {/* LOGO 8 */}
                                <li>
                                    <Image width="200" height="28" 
                                    src="/images/logoGigabyte.png"
                                    className=""
                                    alt=""
                                    />
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="bg-white max-w-screen-xl px-4 py-8 mx-auto sm:py-10 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
                        <div className="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
                            <div className="max-w-md mx-auto text-center lg:text-left">
                                <header>
                                    <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                                    Watches
                                    </h2>
                                    <p className="mt-4 text-gray-500">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
                                    rerum quam amet provident nulla error!
                                    </p>
                                </header>
                                <Link
                                    href="#"
                                    className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-gray-900 border border-gray-900 rounded hover:shadow focus:outline-none focus:ring"
                                >
                                    Shop All
                                </Link>
                            </div>
                        </div>
                        <div className="lg:col-span-2 lg:py-8">
                            <ul className="grid grid-cols-2 gap-4">
                                <li>
                                    <Link href="#" className="block group">
                                    <Image src="/images/phone1.png" width={800} height={400} alt="" />
                                    <div className="mt-3">
                                        <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                                        Simple Watch
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-700">$150</p>
                                    </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="block group">
                                    <Image src="/images/phone1.png" width={800} height={400} alt="" />
                                        <div className="mt-3">
                                            <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                                            Simple Watch
                                            </h3>
                                            <p className="mt-1 text-sm text-gray-700">$150</p>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>           

            <section>
                <div className="bg-white max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8 py-16 ">
                    <div className="max-w-2xl mx-auto text-center">
                        <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Nos preocupa la satisfacción de nuestros clientes
                        </h3>
                        <p className="mt-3">
                            Tenemos el orgullo de presentar al público nuestro gran alcance y nuestra amplia variedad de productos.
                        </p>
                    </div>
                    <div className="mt-12">
                        <ul className="flex flex-col items-center justify-center gap-y-10 sm:flex-row sm:flex-wrap lg:divide-x">
                            {
                                stats.map((item, idx) => (
                                    <li key={idx} className="text-center px-12 md:px-16">
                                        <h4 className="text-4xl text-indigo-600 font-semibold">{item.data}</h4>
                                        <p className="mt-3 font-medium">{item.title}</p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </section>            

            <div className="flex justify-center">
                <div className="bg-white max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
                    <Carousel showArrows={true} showThumbs={false} infiniteLoop={true}>
                        <div>
                            <div className="border border-gray-200 overflow-hidden">
                            <Image src="/images/logitech.png" width={800} height={400} alt="logo_dashboard" />
                            </div>
                        </div>
                        <div>
                            <div className="border border-gray-200 overflow-hidden">
                            <Image src="/images/logitech2.jpeg" width={800} height={400} alt="logo_dashboard2" />
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>

            <SuscribeInterface />

            <FooterInterface />

            <LogOut/>

            
        </>
    );
};

export default Dashboard;
