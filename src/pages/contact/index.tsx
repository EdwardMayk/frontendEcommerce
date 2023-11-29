import Navbar from '@/components/navbar';
import React from 'react';
import FooterInterface from '@/components/complements/FooterInterface';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Image, Link } from '@nextui-org/react';

function Contacto() {
  return (
    <>
      <Navbar />
      <section className="bg-white" id="contact">
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
      </section>

      <FooterInterface />
    </>
  );
}

export default Contacto;
