import Navbar from '@/components/navbar';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import NeonText from '@/components/neon/neonComp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FooterInterface from '@/components/complements/FooterInterface';
import SuscribeInterface from '@/components/complements/SuscribeInterface';
import BannerCupon from '@/components/complements/BannerCupon';
import LogOut from '@/components/LogOut/LogOut';
import { faFacebook, faInstagram, faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const stats = [
    {
        data: "6 Mil",
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

const LogosMarcas = () => {
    return (
        <div className="mt-6 flex items-center justify-center">
            <ul className="inline-grid grid-cols-2 gap-x-10 gap-y-16 md:gap-x-16 md:grid-cols-3 lg:grid-cols-4">
                <li className="flex items-center justify-center">
                    <Image
                        width={220}
                        height={30}
                        src="/img/logoRogw.png"
                        className="object-contain"
                        alt=""
                    />
                </li>
                <li className="flex items-center justify-center">
                    <Image
                        width={220}
                        height={30}
                        src="/img/logoRedragonw.png"
                        className="object-contain"
                        alt=""
                    />
                </li>
                <li className="flex items-center justify-center">
                    <Image
                        width={220}
                        height={30}
                        src="/img/logoRazerw2.png"
                        className="object-contain"
                        alt=""
                    />
                </li>
                <li className="flex items-center justify-center">
                    <Image
                        width={220}
                        height={30}
                        src="/img/LogitechW.png"
                        className="object-contain"
                        alt=""
                    />
                </li>
                <li className="flex items-center justify-center">
                    <Image
                        width={220}
                        height={30}
                        src="/img/CorsairW.png"
                        className="object-contain"
                        alt=""
                    />
                </li>
                <li className="flex items-center justify-center">
                    <Image
                        width={200}
                        height={30}
                        src="/img/logoAsusWh.png"
                        className="object-contain"
                        alt=""
                    />
                </li>
                <li className="flex items-center justify-center">
                    <Image
                        width={200}
                        height={30}
                        src="/img/msiNewLogow.png"
                        className="object-contain"
                        alt=""
                    />
                </li>
                <li className="flex items-center justify-center">
                    <Image
                        width={220}
                        height={30}
                        src="/img/logoGigabytew.png"
                        className="object-contain"
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
            {/* <HeaderImg imagen='/img/bg.jpg' /> */}
            <div className="relative overflow-hidden bg-cover bg-no-repeat bg-[100%] bg-[url('https://cdnb.artstation.com/p/assets/images/images/024/538/827/original/pixel-jeff-clipa-s.gif?1582740711')] h-[1000px]">
                <div className="absolute top-0 left-0 w-full h-full bg-white opacity-30 dark:bg-black opacity-40"></div>
                <div className="flex justify-center flex-wrap min-w-full z-10 font-bold mt-36 mb-10 pb-10 relative">
                    <div className="flex flex-col sm:mr-3 pl-4 md:pl-0">
                        <p className="mb-4 mt-6 text-white text-xl">Hola, Bienvenido a RAG!</p>
                        <div className="text-6xl">
                            <div className="text-white">
                                <NeonText texto='Red Aparatus' neonColor={NeonColors.sky} neonSecondary={NeonColors.sky} size='7xl' />
                                <NeonText texto='Gaming' neonColor={NeonColors.pink} neonSecondary={NeonColors.pink} size='7xl' />
                            </div>
                            <div className="flex mt-6 text-sm font-sans pt-4">
                                <button className="rounded-lg bg-indigo-600 mr-4 px-4 py-2 text-white transition ease-in-out duration-300 hover:bg-pink-400 hover:shadow-lg hover:shadow-pink-500/50">
                                    <Link href={"/contact"}>¿Quienes somos?</Link>
                                </button>
                                <button className="animate-bounce flex rounded-lg bg-white text-black px-4 py-2 transition ease-in-out duration-300 hover:bg-gray-200 hover:shadow-lg hover:shadow-cyan-500/50">
                                    <Link href={"/store"} className='pr-2'>
                                        <p className='font-medium'>Visita Nuestra Tienda!</p>
                                    </Link>
                                </button>
                            </div>
                        </div>
                        <div className="pt-8">
                            <p className="mb-2 mt-6 text-white text-m">Nuestras redes</p>
                        </div>
                        <div className="flex text-sm">
                            <ul className="flex items-center space-x-4">
                                <li className="w-10 h-10 flex items-center justify-center">
                                    <Link href="URL_DE_FACEBOOK">
                                        <FontAwesomeIcon icon={faFacebook} style={{ fontSize: '1.8rem' }} className="text-white" />
                                    </Link>
                                </li>
                                <li className="w-10 h-10 flex items-center justify-center">
                                    <Link href="https://wa.link/8trd61">
                                        <FontAwesomeIcon icon={faWhatsapp} style={{ fontSize: '1.8rem' }} className="text-white" />
                                    </Link>
                                </li>
                                <li className="w-10 h-10 flex items-center justify-center">
                                    <Link href="URL_DE_TELEGRAM">
                                        <FontAwesomeIcon icon={faTelegram} style={{ fontSize: '1.8rem' }} className="text-white" />
                                    </Link>
                                </li>
                                <li className="w-10 h-10 flex items-center justify-center">
                                    <Link href="URL_DE_INSTAGRAM">
                                        <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '1.8rem' }} className="text-white" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="sm:ml-24 mt-0">
                        <Image
                            alt=""
                            src={'/img/LogoRAG3W.png'}
                            quality={100}
                            width={330}
                            height={330}
                            className="sm:w-48 md:w-64 lg:w-80 xl:w-96"
                        />
                    </div>
                </div>
                <div className="font-bold text-center mt-8 relative z-20">
                    <p className="text-xl text-white">¡Conoce nuestras marcas colaboradoras!</p>
                    <div className="flex justify-center mb-6">
                        <div className="bg-white w-20 h-1 mt-2 rounded-sm"></div>
                    </div>
                    <section className="flex justify-center items-center flex-wrap my-auto">
                        <LogosMarcas />
                    </section>
                </div>
            </div>
            <div className="flex flex-col justify-center text-white bg-black">
                <section className="flex items-center bg-black ">
                    <div className="p-4 mx-auto max-w-7xl">
                        <p className="font-bold text-center text-xl mt-10">¡Dale un vistaso a nuestras categorías!</p>
                        <div className="flex justify-center mb-10">
                            <div className="bg-white w-20 h-1 mt-2 rounded-sm"></div>
                        </div>
                        <div className="grid grid-cols-1 gap-4 lg:gap-8 sm:gap-4 sm:grid-cols-2 lg:grid-cols-2">
                            <a className="flex flex-col flex-wrap mb-0 overflow-hidden rounded lg:flex-row" href="#">
                                <div className="border border-white relative w-full overflow-hidden lg:w-2/4 h-80 dark:border-gray-700">
                                    <Image className="object-cover w-full h-full transition-all hover:scale-110" src={'/img/RedragonDragonBorn.jpg'} width={1800} height={0} alt="" />
                                    <span className="absolute px-4 py-2 text-xs text-white bg-red-500 rounded top-4 left-4">
                                        Oferta!
                                    </span>
                                </div>
                                <div className="relative flex self-center flex-1 p-8 ml-0 bg-white border rounded shadow dark:border-gray-700 dark:bg-gray-700 lg:items-center lg:-ml-12 hover:shadow-lg hover:shadow-cyan-100/60 transition ease-in-out duration-200">
                                    <div>
                                        <span className="block mb-2 text-xs font-semibold text-blue-700 uppercase dark:text-blue-300">
                                            TECLADOS
                                        </span>
                                        <h2 className="mb-3 text-2xl font-bold leading-9 text-black dark:text-white">
                                            Teclados Gaming: El Futuro de la Victoria


                                        </h2>
                                        <p className="text-sm leading-7 text-gray-400">
                                            Explora nuestros teclados con tecnología avanzada y diseño ergonómico. ¡No te pierdas nuestras ofertas especiales!
                                        </p>
                                    </div>
                                </div>
                            </a>
                            <a className="flex flex-col flex-wrap mb-0 overflow-hidden rounded lg:flex-row" href="#">
                                <div className="border border-white relative w-full overflow-hidden lg:w-2/4 h-80 dark:border-gray-700">
                                    <Image className="object-cover w-full h-full transition-all hover:scale-110" src={'/img/RazerBasiliskUH.png'} width={1800} height={0} alt="" />
                                    <span className="absolute px-4 py-2 text-xs text-white bg-red-500 rounded top-4 left-4">
                                        Oferta!
                                    </span>
                                </div>
                                <div className="relative self-center flex-1 p-8 ml-0 bg-white border rounded shadow dark:border-gray-700 dark:bg-gray-700 lg:items-center lg:-ml-12 hover:shadow-lg hover:shadow-cyan-100/60 transition ease-in-out duration-200">
                                    <span className="block mb-2 text-xs font-semibold text-blue-700 uppercase dark:text-blue-300">
                                        MOUSE
                                    </span>
                                    <h2 className="mb-3 text-2xl font-bold leading-9 text-black dark:text-white">
                                        Mouse Gaming: Potencia y Precisión en tus Manos
                                    </h2>
                                    <p className="text-sm leading-7 text-gray-400">
                                        Descubre la precisión milimétrica y la ergonomía superior de nuestros mouse diseñados para jugadores exigentes.
                                    </p>
                                </div>
                            </a>
                            <a className="flex flex-col flex-wrap mb-0 overflow-hidden rounded lg:flex-row" href="#">
                                <div className="border border-white relative w-full overflow-hidden lg:w-2/4 h-80 dark:border-gray-700">
                                    <Image className="object-cover w-full h-full transition-all hover:scale-110" src={'/img/CorsairAudifono.png'} width={1800} height={0} alt="" />
                                    <span className="absolute px-4 py-2 text-xs text-white bg-red-500 rounded top-4 left-4">
                                        Oferta!
                                    </span>
                                </div>
                                <div className="relative self-center flex-1 p-8 ml-0 bg-white border rounded shadow dark:border-gray-700 dark:bg-gray-700 lg:items-center lg:-ml-12 hover:shadow-lg hover:shadow-cyan-100/60 transition ease-in-out duration-200">
                                    <span className="block mb-2 text-xs font-semibold text-blue-700 uppercase dark:text-blue-300">
                                        AUDÍFONOS
                                    </span>
                                    <h2 className="mb-3 text-2xl font-bold leading-9 text-black dark:text-white">
                                        Audífonos Premium: Sonido Envolvente único
                                    </h2>
                                    <p className="text-sm leading-7 text-gray-400">
                                        Disfruta de la calidad de audio excepcional para una experiencia inigualable. Sonidos nítidos y potentes en juego.
                                    </p>
                                </div>
                            </a>
                            <a className="flex flex-col flex-wrap mb-0 overflow-hidden rounded lg:flex-row" href="#">
                                <div className="border border-white relative w-full overflow-hidden lg:w-2/4 h-80 dark:border-gray-700">
                                    <Image className="object-cover w-full h-full transition-all hover:scale-110" src={'/img/XboxElite2.png'} width={1800} height={0} alt="" />
                                    <span className="absolute px-4 py-2 text-xs text-white bg-red-500 rounded top-4 left-4">
                                        Oferta!
                                    </span>
                                </div>
                                <div className="relative self-center flex-1 p-8 ml-0 bg-white border rounded shadow dark:border-gray-700 dark:bg-gray-700 lg:items-center lg:-ml-12 hover:shadow-lg hover:shadow-cyan-100/60 transition ease-in-out duration-200">
                                    <span className="block mb-2 text-xs font-semibold text-blue-700 uppercase dark:text-blue-300">
                                        MANDOS
                                    </span>
                                    <h2 className="mb-3 text-2xl font-bold leading-9 text-black dark:text-white">
                                        Mandos de Última Generación
                                    </h2>
                                    <p className="text-sm leading-7 text-gray-400">
                                        Domina el juego con mandos diseñados para brindarte control total. Descubre la excelencia en diseño y funcionalidad.
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="max-w-screen-xl mx-auto px-4 text-white md:px-8 py-16 ">
                        <div className="max-w-2xl mx-auto text-center">
                            <h3 className="text-white text-3xl font-semibold sm:text-4xl">
                                La satisfacción de nuestros clientes es nuestra mayor prioridad
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
                <div className="mt-10 relative overflow-hidden bg-cover bg-no-repeat bg-[50%] bg-[url('https://cdna.artstation.com/p/assets/images/images/015/574/888/original/pixel-jeff-claw.gif?1548847662')] h-[450px] bg-black opacity-90 flex flex-col justify-center items-center">
                    <div className="font-bold mt-10">
                        <label className="swap swap-flip text-7xl">
                            <input type="checkbox" style={{ display: 'none' }} />
                            <div className="swap-on">🎮</div>
                            <div className="swap-off">🕹️</div>
                        </label>
                        <label className="swap swap-flip text-7xl">
                            <input type="checkbox" style={{ display: 'none' }} />
                            <div className="swap-on">🚀</div>
                            <div className="swap-off">🛸</div>
                        </label>
                        <label className="swap swap-flip text-7xl">
                            <input type="checkbox" style={{ display: 'none' }} />
                            <div className="swap-on">🏹</div>
                            <div className="swap-off">💣</div>
                        </label>
                        {/* <div className="tooltip" data-tip="hello">
                            <h1>Checa aquí</h1>
                        </div> */}
                        {/* <section>
                            <SliderProducts />
                        </section> */}
                    </div>
                </div>
                <section>
                    <FooterInterface />
                </section>
            </div>
        </>
    );
};

export default Dashboard;
