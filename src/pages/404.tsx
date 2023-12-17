import Image from "next/image";
import Link from 'next/link';

export default function Custom404() {
    return (
        <main className="bg-gray-900">
            <div className="max-w-screen-xl flex items-center justify-center h-screen mx-auto">
                <div className="max-w-lg text-center z-20">
                    <div className="pb-6 flex justify-center items-center">
                        <Image src="/images/LogoNavBArRAGWhite.png" width={300} height={400} alt="" />
                    </div>
                    <h3 className="text-white text-4xl font-semibold sm:text-5xl">
                        Página no encontrada
                    </h3>
                    <p className="text-white mt-3">
                        Lo sentimos pero la página a la que estás intentando ingresar ya no existe o fue removida del espacio-tiempo.
                    </p>
                    <p className="text-white mt-3">
                        ¡Pero tranquilo! Puedes volver a la tienda desde aquí.
                    </p>
                    <Link href="/dashboard">
                        <p className="bg-gray-400 text-white py-2 px-4 rounded-lg mt-4 inline-block">
                            Volver RAG Tienda
                        </p>
                    </Link>
                </div>
            </div>
            <div
                className="absolute inset-0 my-auto h-[500px] rounded-full"
                style={{
                    background: "linear-gradient(rgba(192, 132, 252, 0.2), rgba(232, 121, 249, 0.26), rgba(192, 132, 252, 0.1))",
                    filter: "blur(40px)",
                    zIndex: 1
                }}
            />
        </main>
    );
}
