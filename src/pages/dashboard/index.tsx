import Navbar from '@/components/navbar';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import FooterInterface from '@/components/complements/FooterInterface';
import SuscribeInterface from '@/components/complements/SuscribeInterface';
import BannerCupon from '@/components/complements/BannerCupon';
import LogOut from '@/components/Login/LogOut';
import { HeaderImg } from '@/components/navbarComp';
import { ProductComponent, Product2Component, SliderProducts } from '@/components/product';
import NeonText from '@/components/neon/neonComp';


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
const Marcas = () => {
    return (
        <div className="mt-16 flex justify-center">
            <ul className="inline-grid grid-cols-2 gap-x-10 gap-y-12 md:gap-x-16 md:grid-cols-3 lg:grid-cols-4">

                {/* LOGO 1 */}
                <li>
                    <Image width="200" height="28"
                        src="/images/LogitechW.png"
                        className=""
                        alt=""
                    />
                </li>

                {/* LOGO 2 */}
                <li>
                    <Image width="200" height="28"
                        src="/images/AsusW.png"
                        className=""
                        alt=""
                    />
                </li>

                {/* LOGO 3 */}
                <li>
                    <Image width="200" height="28"
                        src="/images/CorsairW.png"
                        className=""
                        alt=""
                    />
                </li>

                {/* LOGO 4 */}
                <li>
                    <Image width="200" height="28"
                        src="/images/MSIW.png"
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
                        src="/images/VSG.png"
                        className=""
                        alt=""
                    />
                </li>

            </ul>
        </div>
    )
}
const Dashboard = () => {
    const NeonColors = {
        pink: '#ea00d9',
        sky: '#0abdc6'
    }

    return (
        <>
            <Navbar />
            {/* <BannerCupon /> */}
            {/* Header Image */}
            <HeaderImg imagen='/img/bg.jpg' />

            <div className="text-black dark:text-white">
                <div className="flex flex-col justify-center dark:text-white">

                    {/* Titulo y logo */}
                    <div className="flex justify-center flex-wrap min-w-full z-10 font-bold mt-40 mb-10 pb-10 md:pb-60">
                        <div className="flex flex-col sm:mr-24 mr-2 pl-4 md:pl-0">
                            <p className="mb-4 text-white text-xl">Hola, Bienvenido a RAG!</p>
                            <div className="text-6xl">
                                <div className="text-white">
                                    <NeonText texto='Red Aparatus' neonColor={NeonColors.sky} neonSecondary={NeonColors.sky} size='6xl' />
                                    <NeonText texto='Gaming' neonColor={NeonColors.pink} neonSecondary={NeonColors.pink} size='6xl' />
                                </div>

                                {/* botones */}
                                <div className="flex mt-6 text-sm font-sans pt-4">
                                    <button className="rounded-lg bg-indigo-600 shadow-lg mr-4 px-4 py-2 text-white transition ease-in-out duration-300 hover:bg-pink-400">
                                        <Link href={"/contact"}>Contáctanos</Link>
                                    </button>
                                    <button className="flex rounded-lg bg-white text-black px-4 py-2 transition ease-in-out duration-300 hover:bg-gray-200">
                                        <Link href={"/store"} className='pr-2'>
                                            <p className='font-medium'>Nuestra Tienda!</p>
                                        </Link>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                            <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Logo */}
                        <div className="sm:ml-24 ml-2 mt-4 sm:mt-0">
                            <Image
                                alt="Logo-rag"
                                src={'/img/logo-no-bg-w.png'}
                                quality={100}
                                width={200}
                                height={200}
                            />
                        </div>
                    </div>

                    {/* CONTENEDOR GRIS */}
                    <div className="flex justify-center bg-neutral-950 z-20 mt-4 pt-4 min-w-full">
                        <div className="font-bold z-20">
                            <p className="text-center text-xl">¡Brindamos las mejores marcas!</p>

                            {/* Linea */}
                            <div className="flex justify-center mb-6">
                                <div className="bg-orange-200 dark:bg-white w-20 h-1 mt-1 rounded-sm"></div>
                            </div>
                            {/* CONTENIDO */}
                            <section className="flex justify-center flex-wrap mb-4">
                                <Marcas />
                            </section>
                            <section className='flex flex-col justify-center flex-wrap'>
                                <button className='text-4xl'>Tienda</button>
                                {/* Linea */}
                                <div className="flex justify-center mb-6">
                                    <div className="bg-orange-200 dark:bg-white w-20 h-1 mt-1 rounded-sm"></div>
                                </div>
                                <div className='flex justify-center flex-wrap'>
                                    <ProductComponent />
                                    <ProductComponent />
                                    <ProductComponent />
                                </div>
                            </section>
                            <section>
                                <div className="max-w-screen-xl mx-auto px-4 text-white md:px-8 py-16 ">
                                    <div className="max-w-2xl mx-auto text-center">
                                        <h3 className="text-white text-3xl font-semibold sm:text-4xl">
                                            Nos preocupa la satisfacción de nuestros clientes
                                        </h3>
                                        <p className="mt-3 text-white">
                                            Tenemos el orgullo de presentar al público nuestro gran alcance y nuestra amplia variedad de productos.
                                        </p>
                                    </div>
                                    <div className="mt-12">
                                        <ul className="flex flex-col items-center justify-center gap-y-10 sm:flex-row sm:flex-wrap lg:divide-x">
                                            {
                                                stats.map((item, idx) => (
                                                    <li key={idx} className="text-center px-12 md:px-16">
                                                        <NeonText texto={item.data} neonColor={NeonColors.sky} neonSecondary={NeonColors.sky} size='2xl' />
                                                        <p className="mt-3 font-medium">{item.title}</p>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </section>
                            <section>
                                <SliderProducts />
                            </section>
                            <section>
                                <FooterInterface />
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
