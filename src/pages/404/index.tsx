import Image from "next/image";
import Link from 'next/link';

export default function Custom404() {
    return (
        <main>
            <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-center h-screen md:px-8">
                <div className="max-w-lg mx-auto text-center">
                    <div className="pb-6 flex justify-center items-center">
                        <Image src="/images/RAGlogoFooter&Navbar.png" width={250} height={400} alt="" />
                    </div>
                    <h3 className="text-gray-800 text-4xl font-semibold sm:text-5xl">
                        Página no encontrada
                    </h3>
                    <p className="text-gray-600 mt-3">
                        Lo sentimos pero la página a la que estás intentando ingresar ya no existe o fue removida del espacio-tiempo.
                    </p>
                    <p className="text-gray-600 mt-3">
                        ¡Pero tranquilo! Puedes volver a la tienda desde aquí.
                    </p>
                    <Link href="/">
                        <p className="bg-gray-400 text-white py-2 px-4 rounded-lg mt-4 inline-block">
                            Volver RAG Tienda
                        </p>
                    </Link>
                </div>
            </div>
        </main>
    );
}
