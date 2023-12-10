import Navbar from '@/components/navbar';
import React from 'react';
import FooterInterface from '@/components/complements/FooterInterface';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Image, Link } from '@nextui-org/react';
import { HeaderImg } from '@/components/navbarComp';
import { ProductComponent, Product2Component, SliderProducts } from '@/components/product';
import NeonText from '@/components/neon/neonComp';
import TypingEffect from '@/components/neon/typingEffect';


function Contacto() {
  const NeonColors = {
    pink: '#ea00d9',
    sky: '#0abdc6'
  }
  const texto = 'Somos tu destino gaming definitivo. En RAG, ofrecemos piezas de alta calidad, periféricos y más para llevar tu experiencia de juego al siguiente nivel. Descubre productos de última generación y un equipo apasionado listo para asesorarte. Únete a nuestra comunidad gaming y vive la excelencia en cada clic. ¡Juega en serio con RAG!'
  return (
    <>
      <Navbar />
      <HeaderImg imagen='/img/bg9.jpg' />
      <div className="text-white">
        <div className="flex flex-col justify-center text-white">

          {/* Titulo y logo */}
          <div className="flex flex-row justify-center flex-wrap min-w-full z-10 font-bold mt-40 mb-10 pb-10 md:pb-60">
            {/* TÍTULO */}
            <div className="flex flex-col mr-2 pr-4 md:pr-0">
              <p className="mb-4 text-white text-xl text-right">Hola, Bienvenido a RAG!</p>
              <div className="text-6xl">
                <div className="text-white text-right">
                  <NeonText texto='Red Aparatus' neonColor={NeonColors.sky} neonSecondary={NeonColors.sky} size='6xl' />
                  <NeonText texto='Gaming' neonColor={NeonColors.pink} neonSecondary={NeonColors.pink} size='6xl' />
                </div>

                {/* botones */}
                <div className="flex justify-end mt-6 text-sm font-sans pt-4">
                  <button className="flex rounded-lg bg-pink-400 text-white px-4 py-2 transition ease-in-out duration-300 hover:bg-cyan-400 hover:text-gray-800 hover:shadow-lg hover:shadow-cyan-500/50">
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

            {/* TEXTO */}
            <div className='flex justify-center items-center m-4 lg:w-1/4 lg:ml-10 pt-2 lg:pt-0'>
              <p className='text-justify lg:text-left'>{texto}</p>
            </div>
          </div>

          {/* CONTENEDOR GRIS */}
          <div className="flex justify-center bg-neutral-950 z-20 mt-4 pt-4 min-w-full">
            <div className="font-bold z-20">
              <p className="text-center text-4xl">¡Ubícanos!</p>
              {/* Linea */}
              <div className="flex justify-center mb-6">
                <div className="bg-white w-20 h-1 mt-1 rounded-sm"></div>
              </div>
              {/* CONTENIDO */}
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

      {/* <section className="bg-white" id="contact">
        <section className="bg-white">
          <div className="container px-6 py-12 mx-auto">
            <div className="text-center">
              <p className="font-medium text-blue-500 dark:text-blue-400">Vamos a conectarnos</p>
              <h1 className="mt-2 text-4xl font-semibold text-gray-800 md:text-5xl dark:text-black">
                Conéctate con nosotros
              </h1>
              <p className="mt-3 text-gray-500 dark:text-gray-400">
                ¡Estamos anciosos por escucharte!
              </p>
            </div>
            <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center justify-center text-center">
                <span className="p-4 text-black">
                  <FontAwesomeIcon icon={faEnvelope} className="w-8 h-8" />
                </span>
                <h2 className="text-xl font-medium text-gray-800 dark:text-black">Correo</h2>
                <p className="mt-2 text-gray-500 dark:text-gray-400">Nuestro equipo podra ayudarte en lo que necesites.</p>
                <p className="mt-2 text-blue-500 dark:text-blue-400 text-lg">redaparatusgaming@gmail</p>
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <span className="p-4 text-black">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="w-8 h-8" />
                </span>
                <h2 className="text-xl font-medium text-gray-800 dark:text-black">Oficina</h2>
                <p className="mt-2 text-gray-500 dark:text-gray-400">Ubicanos en:</p>
                <p className="mt-2 text-blue-500 dark:text-blue-400 text-lg">
                  Av. Giráldez 274, Huancayo 12001
                </p>
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <span className="text-black">
                  <FontAwesomeIcon icon={faWhatsapp} className="w-10 h-10" />
                </span>
                <h2 className="mt-4 text-xl font-medium text-gray-800 dark:text-black">WhatsApp</h2>
                <p className="mt-2 text-gray-500 dark:text-gray-400">Escribenos al WhatsApp para cualquier consulta.</p>
                <p className="mt-2 text-blue-500 dark:text-blue-400 text-lg">+51 949 494 666 </p>
              </div>
            </div>
          </div>
        </section>
      </section>


      <section className="text-gray-700 body-font relative">
        <div className="absolute inset-0 bg-gray-300">
          <iframe
            width="100%"
            height="100%"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            title="map"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.6524589700516!2d-75.21086722398317!3d-12.067416442287616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x910e972e6999c32f%3A0xc05d2364afa5f373!2sRAG!5e0!3m2!1ses-419!2spe!4v1700691446218!5m2!1ses-419!2spe"
            style={{ filter: " contrast(1.2) opacity(0.4)" }}
          />

        </div>
        <div className="container px-5 py-24 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 md:ml-auto w-full mt-10 md:mt-0 relative z-10">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Escríbenos_
              <Link href="https://wa.link/8gi5go" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                Al WhatsApp
              </Link>
            </h2>
            <div className="flex justify-center items-center mt-4">
              <Image src="/images/QR.png" width={300} height={300} alt="" />
            </div>
          </div>

        </div>
      </section> */}
    </>
  );
}

export default Contacto;
