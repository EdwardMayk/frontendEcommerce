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

  const contactMethods = [
    {
      icon:
        <FontAwesomeIcon icon={faRoute} className="w-7 h-7" />
      ,
      contact: "Av. Giráldez 274, Huancayo 12001",
      title: "Nuestras oficinas"
    },
    {
      icon:
        <FontAwesomeIcon icon={faPhone} className="w-7 h-7" />
      ,
      contact: "+51 949 494 666",
      title: "Celular"
    },
    {
      icon:
        <FontAwesomeIcon icon={faEnvelope} className="w-7 h-7" />
      ,
      contact: "redaparatusgaming@gmail.com",
      title: "Correo Electrónico"
    },
  ]

  return (
    <>
      <Navbar />
      {/* <HeaderImg imagen='/img/bg9.jpg' /> */}
      <div className="relative overflow-hidden bg-cover bg-no-repeat bg-center bg-[100%] bg-[url('https://cdna.artstation.com/p/assets/images/images/047/098/224/original/pixel-jeff-signs.gif?1646758669')] h-[2000px]">
        <div className="absolute top-0 left-0 w-full h-full bg-white opacity-40 z-10 dark:bg-black opacity-40"></div>
        <section className="text-white relative z-20">
          <div className="flex flex-row justify-center flex-wrap min-w-full font-bold mt-32 mb-10 pb-10 md:pb-32">
            <div className="flex flex-col mr-1 pr-2 md:pr-0">
              <p className="mb-2 text-white text-xl text-right">¡Hola, Bienvenido a RAG!</p>
              <div className="text-6xl">
                <div className="mb-6 text-white text-right">
                  <NeonText texto='Red Aparatus' neonColor={NeonColors.sky} neonSecondary={NeonColors.sky} size='7xl' />
                  <NeonText texto='Gaming' neonColor={NeonColors.pink} neonSecondary={NeonColors.pink} size='7xl' />
                </div>
              </div>
            </div>
            <div className='flex justify-center items-center m-1 lg:w-1/4 lg:ml-10 pt-2 px-3 lg:pt-0'>
              <p className='text-justify lg:text-left text-white'>Somos tu destino gaming definitivo. En RAG, ofrecemos piezas de alta calidad, periféricos y más para llevar tu experiencia de juego al siguiente nivel. Descubre productos de última generación y un equipo apasionado listo para asesorarte. Únete a nuestra comunidad gaming y vive la excelencia en cada clic. ¡Juega en serio con RAG!</p>
            </div>
          </div>
        </section>
        <section className="text-white py-8 relative z-20">
          <div className="text-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold">Lo que nos define</h2>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <div className="flex items-center justify-center h-12 w-12 rounded-md text-white">
                  <FontAwesomeIcon icon={faHandsHelping} className="w-10 h-10" />
                </div>
                <div className="mt-5">
                  <h3 className="text-lg font-medium text-white" style={{ fontWeight: 'bold' }}>Misión</h3>
                  <p className="mt-2 font-medium text-base text-white">Somos una empresa de tecnología enfocada en brindar los mejores productos del mercado a todos nuestros clientes. Nos enfocamos en la satisfacción del cliente, brindando productos que combinen calidad, rendimiento y estilo siempre adaptándonos a nuestro mundo en constante cambio.</p>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-center h-12 w-12 rounded-md text-white">
                  <FontAwesomeIcon icon={faHeart} className="w-10 h-10" />
                </div>
                <div className="mt-5">
                  <h3 className="text-lg font-medium text-white" style={{ fontWeight: 'bold' }}>Valores</h3>
                  <p className="mt-2 font-medium text-base text-white">Los valores pilares de nuestra empresa son la transparencia, integridad y ética, calidad en productos y servicio, adaptabilidad y por último pero no menos importante el crecimiento sostenible de la empresa.</p>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-center h-12 w-12 rounded-md text-white">
                  <FontAwesomeIcon icon={faEye} className="w-10 h-10" />
                </div>
                <div className="mt-5">
                  <h3 className="text-lg font-medium text-white" style={{ fontWeight: 'bold' }}>Visión</h3>
                  <p className="mt-2 font-medium text-base text-white">Ser reconocidos como el punto de referencia en la industria de ventas de todo tipo de tecnologías, aportando constantemente innovación y soluciones, manteniendo siempre un compromiso absoluto con nuestros clientes y contribuyendo al crecimiento sostenible de nuestra empresa.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="text-white relative z-20">
          <div className="flex flex-col items-center pt-8">
            <p className="mb-2 mt-6 text-white text-lg" style={{ fontWeight: 'bold' }}>¡Síguenos en Nuestras Redes!</p>
            <div className="flex text-xl space-x-4">
              <ul className="flex items-center space-x-4">
                <li className="w-10 h-10 flex items-center rounded-full">
                  <Link href="URL_DE_FACEBOOK">
                    <FontAwesomeIcon icon={faFacebook} className="text-white w-10 h-10" />
                  </Link>
                </li>
                <li className="w-10 h-10 flex items-center rounded-full">
                  <Link href="https://wa.link/8trd61">
                    <FontAwesomeIcon icon={faWhatsapp} className="text-white w-10 h-10" />
                  </Link>
                </li>
                <li className="w-10 h-10 flex items-center rounded-full">
                  <Link href="URL_DE_TELEGRAM">
                    <FontAwesomeIcon icon={faTelegram} className="text-white w-10 h-10" />
                  </Link>
                </li>
                <li className="w-10 h-10 flex items-center rounded-full">
                  <Link href="URL_DE_INSTAGRAM">
                    <FontAwesomeIcon icon={faInstagram} className="text-white w-10 h-10" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 flex justify-center items-center z-20">
            <Image
              alt="QR"
              src={'/img/QR.png'}
              quality={100}
              width={250}
              height={250}
              className="rounded-xl"
            />
          </div>
        </section>
      </div>
      <div className="max-w-screen mx-auto px-8 text-gray-600 md:px-80 bg-black pt-24">
        <div className="max-w-xl space-y-5 text-white">
          <h3 className="text-2xl font-bold">
            ¡Visítanos!
          </h3>
          <p className="text-4xl font-semibold sm:text-5xl">
            Te esperamos en nuestras oficinas
          </p>
          <p className="text-lg">
            Estamos disponibles para ti, para resolver cualquier duda, para consultar sobre algún producto o para asesorarte en lo que necesites.
          </p>
        </div>
        <div>
          <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-6 items-center lg:gap-x-24">
            {contactMethods.map((item, idx) => (
              <li key={idx} className="text-white">
                <h4 className="text-xl font-medium">{item.title}</h4>
                <div className="mt-3 mb-12 flex items-center gap-x-3">
                  <div className="flex-none">{item.icon}</div>
                  <p className="flex-none">{item.contact}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-black flex items-center justify-center bg-black">
        <iframe
          width="1300px"
          height="600px"
          title="map"
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.6524589700516!2d-75.21086722398317!3d-12.067416442287616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x910e972e6999c32f%3A0xc05d2364afa5f373!2sRAG!5e0!3m2!1ses-419!2spe!4v1700691446218!5m2!1ses-419!2spe&amp;mode=night&z=15`}
          style={{
            filter: "contrast(1.2) opacity(0.7)", //grayscale(1)
            borderRadius: "10px",
          }}
        />
      </div>
      <section className='bg-black'>
        <FooterInterface />
      </section>
    </>
  );
}

export default Contacto;
