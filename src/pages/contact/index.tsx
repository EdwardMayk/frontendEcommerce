import Navbar from '@/components/navbar';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEye, faHandsHelping, faHeart, faMapMarkerAlt, faPhone, faPhoneAlt, faRoute } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import NeonText from '@/components/neon/neonComp';
import TypingEffect from '@/components/neon/typingEffect';
import FooterInterface from '@/components/complements/FooterInterface';
import Link from 'next/link';


function Contacto() {
  const NeonColors = {
    pink: '#ea00d9',
    sky: '#0abdc6'
  }

  return (
    <>
      <Navbar />
      {/* <div className="relative overflow-hidden bg-cover bg-bottom bg-no-repeat" style={{ backgroundImage: "url('https://cdna.artstation.com/p/assets/images/images/042/835/228/large/ian-vicknair-side-shot-0002.jpg?1635556127')", backgroundSize: "cover", height: "100vh" }}> */}
      <div className="relative overflow-hidden bg-cover bg-bottom bg-no-repeat"
        style={{
          backgroundImage: `url('https://cdna.artstation.com/p/assets/images/images/060/460/880/original/pixel-jeff-chill-mario-2023-2.gif?1678633376')`,
          backgroundSize: 'cover',
          height: '100vh',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 "></div>
        <div className={`absolute left-0 w-full h-full 
        ${'bg-gradient-to-b from-transparent via-[rgba(255,255,255,0)] to-[rgba(245,245,245,1)]'} 
        ${'dark:via-[rgba(0,0,0,0.4)] dark:to-[rgba(0,0,0,1)]'}`}
          style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '25%' }}
        ></div>
      </div>

      <section className="bg-neutral-100 dark:bg-black">
        <div className="container px-4 py-12 mx-auto">
          <div className="pt-8 pb-3 flex justify-center items-center relative">
            <Image
              alt=""
              src={'/img/LogoRAG4.png'}
              width={400}
              height={0}
              className="dark:hidden"
            />
            <Image
              alt=""
              src={'/img/LogoRAG4W.png'}
              width={400}
              height={0}
              className="hidden dark:block"
            />
          </div>
          <section className="text-white relative items-center justify-center">
            <div className="flex flex-row items-center justify-center flex-wrap min-w-full font-bold mt-6 pb-10 md:pb-12">
              <div className="flex flex-col mr-1 pr-2 md:pr-0">
                <p className="mb-2 text-xl text-right text-gray-700 dark:text-white">¡Hola, Bienvenido a RAG!</p>
                <div className="text-6xl">
                  <div className="mb-6 text-white text-right text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
                    <NeonText texto='Red Aparatus' neonColor={NeonColors.sky} neonSecondary={NeonColors.sky} size='7xl' />
                    <NeonText texto='Gaming' neonColor={NeonColors.pink} neonSecondary={NeonColors.pink} size='7xl' />
                  </div>
                </div>
              </div>
              <div className='flex justify-center items-center m-1 lg:w-1/4 lg:ml-2 pt-2 px-3 lg:pt-0 text-gray-700 dark:text-white'>
                <p className='text-justify lg:text-left'>Somos tu destino gaming definitivo. En RAG, ofrecemos piezas de alta calidad, periféricos y más para llevar tu experiencia de juego al siguiente nivel. Descubre productos de última generación y un equipo apasionado listo para asesorarte. Únete a nuestra comunidad gaming y vive la excelencia en cada clic. ¡Juega en serio con RAG!</p>
              </div>
            </div>
          </section>
          <div>
            <p className="font-bold text-2xl text-blue-500 dark:text-blue-400">¡Visítanos!</p>
            <h1 className="mt-2 text-4xl font-semibold text-gray-800 md:text-3xl dark:text-white">Te esperamos en nuestras oficinas</h1>
            <p className="mt-3 text-lg text-gray-500 dark:text-gray-400">Estamos disponibles para ti, para resolver cualquier duda, para consultar sobre algún producto o para asesorarte en lo que necesites.</p>
          </div>
          <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-1">
              <div>
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                  <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6" />
                </span>
                <h2 className="mt-4 text-base font-medium text-gray-900 dark:text-white">Correo Electrónico</h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Nuestro equipo estará feliz de ayudarte.</p>
                <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">redaparatusgaming@gmail.com</p>
              </div>
              <div>
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                  <FontAwesomeIcon icon={faRoute} className="w-6 h-6" />
                </span>
                <h2 className="mt-4 text-base font-medium text-gray-900 dark:text-white">Nuestras oficinas</h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Ven a visitarnos a nuestras oficinas.</p>
                <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">Av. Giráldez 274, Huancayo 12001</p>
              </div>
              <div>
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                  <FontAwesomeIcon icon={faPhone} className="w-6 h-6" />
                </span>
                <h2 className="mt-4 text-base font-medium text-gray-900 dark:text-white">Celular</h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Escríbenos estamos disponibles siempre.</p>
                <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">+51 949 494 666</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto">
              <iframe width="100%" height="100%" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.6524589700516!2d-75.21086722398317!3d-12.067416442287616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x910e972e6999c32f%3A0xc05d2364afa5f373!2sRAG!5e0!3m2!1ses-419!2spe!4v1700691446218!5m2!1ses-419!2spe&amp;mode=night&z=15?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-100 dark:bg-black text-white relative z-20">
        <section className="bg-neutral-100 dark:bg-black text-white py-8 relative z-20">
          <div className="text-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-semibold md:text-3xl text-blue-500 dark:text-blue-400">Lo que nos define</h2>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/90 dark:bg-gray-800">
                  <FontAwesomeIcon icon={faHandsHelping} className="w-8 h-8" />
                </span>
                <div className="mt-5">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white" style={{ fontWeight: 'bold' }}>Misión</h3>
                  <p className="mt-2 font-medium text-base text-gray-500 dark:text-gray-400">Somos una empresa de tecnología enfocada en brindar los mejores productos del mercado a todos nuestros clientes. Nos enfocamos en la satisfacción del cliente, brindando productos que combinen calidad, rendimiento y estilo siempre adaptándonos a nuestro mundo en constante cambio.</p>
                </div>
              </div>
              <div>
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/90 dark:bg-gray-800">
                  <FontAwesomeIcon icon={faHeart} className="w-8 h-8" />
                </span>
                <div className="mt-5">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white" style={{ fontWeight: 'bold' }}>Valores</h3>
                  <p className="mt-2 font-medium text-base text-gray-500 dark:text-gray-400">Los valores pilares de nuestra empresa son la transparencia, integridad y ética, calidad en productos y servicio, adaptabilidad y por último pero no menos importante el crecimiento sostenible de la empresa.</p>
                </div>
              </div>
              <div>
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/90 dark:bg-gray-800">
                  <FontAwesomeIcon icon={faEye} className="w-8 h-8" />
                </span>
                <div className="mt-5">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white" style={{ fontWeight: 'bold' }}>Visión</h3>
                  <p className="mt-2 font-medium text-base text-gray-500 dark:text-gray-400">Ser reconocidos como el punto de referencia en la industria de ventas de todo tipo de tecnologías, aportando constantemente innovación y soluciones, manteniendo siempre un compromiso absoluto con nuestros clientes y contribuyendo al crecimiento sostenible de nuestra empresa.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <div className="bg-neutral-100 dark:bg-black flex flex-col items-center pt-8 px-4 ">
        <p className="mb-2 mt-6 text-2xl font-semibold md:text-2xl text-blue-500 dark:text-blue-400" style={{ fontWeight: 'bold' }}>¡Síguenos en Nuestras Redes!</p>
        <div className="flex text-xl space-x-4">
          <ul className="flex items-center space-x-10 mt-4">
            <li className="w-10 h-10 flex items-center rounded-full">
              <Link href="URL_DE_FACEBOOK">
                <FontAwesomeIcon icon={faFacebook} className="text-gray dark:text-white w-10 h-10" />
              </Link>
            </li>
            <li className="w-10 h-10 flex items-center rounded-full">
              <Link href="https://wa.link/8trd61">
                <FontAwesomeIcon icon={faWhatsapp} className="text-gray dark:text-white w-10 h-10" />
              </Link>
            </li>
            <li className="w-10 h-10 flex items-center rounded-full">
              <Link href="URL_DE_TELEGRAM">
                <FontAwesomeIcon icon={faTelegram} className="text-gray dark:text-white w-10 h-10" />
              </Link>
            </li>
            <li className="w-10 h-10 flex items-center rounded-full">
              <Link href="URL_DE_INSTAGRAM">
                <FontAwesomeIcon icon={faInstagram} className="text-gray dark:text-white w-10 h-10" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-neutral-100 dark:bg-black pt-12 pb-20 flex justify-center items-center z-20">
        <Image
          alt="QR"
          src={'/img/QR.png'}
          width={300}
          height={0}
          className="rounded-xl"
        />
      </div>
      <div className="pt-12 relative overflow-hidden bg-top bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://cdnb.artstation.com/p/assets/images/images/045/976/929/original/pixel-jeff-yume-s.gif?1643989775')`,
          backgroundSize: 'cover',
          height: '40vh',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-white opacity-30 dark:bg-black opacity-30"></div>
      </div>
      <section className='bg-neutral-100 dark:bg-black'>
        <FooterInterface />
      </section>
    </>
  );
}

export default Contacto;
