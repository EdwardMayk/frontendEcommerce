'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faXmark, faPrint, faPlus, faCheck, faArrowUpFromBracket, faPenToSquare, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { AdminBar } from '../admin';
import { useCreateProductMutation, useGetAllProductsQuery } from '../../../graphql/generated/schema';


const AdminProduct = () => {
    const [modal, setModal] = useState(false)
    const { data, loading, error } = useGetAllProductsQuery();

    if (loading) {
        return <p>Cargando productos...</p>;
    }

    if (error) {
        return <p>Error al cargar los productos.</p>;
    }

    const products = data?.products; // Ajusta según la forma específica de tu respuesta GraphQL

    const openModal = () => {
        setModal(true);
    }

    const closeModal = () => {
        setModal(false);
    }

    // TABLE TEXT
    const bodytext = "text-center py-2 px-4 border-b border-grey-light"
    const headtext = "py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"

    return (
        <>
            <div>


                <AdminBar />





                {/* End MODAL */}
                <div className="flex flex-col min-h-screen bg-gray-100 pt-16 lg:pl-60">


                    <div className="flex-1 flex flex-wrap">


                        {/* Área de contenido principal */}
                        <div className="flex-1 p-4 w-full md:w-1/2">

                            {/* Tabla de Productos */}
                            <div className="mt-8 bg-white p-4 shadow rounded-lg">
                                <div className="bg-white p-4 rounded-md">
                                    <h2 className="text-gray-500 text-lg font-semibold pb-4">Productos</h2>
                                    {/* Buscador */}
                                    <div className="flex justify-between relative min-w-fill">
                                        <input className="w-full h-10 pl-10 pr-4 py-2 text-base placeholder-gray-500 border rounded-full focus:shadow-outline" type="search" placeholder="Buscar..." />
                                        <button onClick={openModal} className="ml-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-4 rounded-full">
                                            <div className='flex justify-center items-center'>
                                                <FontAwesomeIcon icon={faPlus} className="mr-2" />
                                                Agregar
                                            </div>
                                        </button>

                                    </div>
                                    <div className="my-1" />
                                    <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6" /> {/* Línea con gradiente */}

                                    {/* TABLA DE PRODUCTOS */}
                                    <table className="w-full table-auto text-sm">
                                        <thead>
                                            <tr className="text-sm leading-normal">
                                                <th className={`${headtext} md:table-cell hidden`}>N°</th>
                                                <th className={`${headtext}`}>Nombre</th>
                                                <th className={`${headtext}`}>Descripción</th>
                                                <th className={`${headtext}`}>Precio</th>
                                                <th className={`${headtext}`}>Imagen</th>
                                                <th className={`${headtext}`}>Marca</th>
                                                <th className={`${headtext}`}>Acción</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {products?.map((product, index) => (
                                                <tr key={product.uuid} className="hover:bg-grey-lighter">
                                                    <td className={`${bodytext} md:table-cell hidden`}>{index + 1}</td>
                                                    <td className={`${bodytext}`}>{product.name}</td>
                                                    <td className={`${bodytext}`}>{product.description}</td>
                                                    <td className={`${bodytext}`}>{product.price}</td>
                                                    <td className={`${bodytext}`}>
                                                        {/* Puedes mostrar la imagen aquí según tu estructura */}
                                                        <Image src={product.image} alt={product.name} className="w-8 h-8" width={50} height={50} />
                                                    </td>
                                                    <td className={`${bodytext}`}>{product.brand}</td>
                                                    <td className={`${bodytext}`}>
                                                        <div className='flex justify-center items-center'>
                                                            <div className='flex justify-center items-center min-w-full'>
                                                                {/* <button>
                                                                    <FontAwesomeIcon icon={faPenToSquare} className='pr-2' size='lg' />
                                                                </button> */}
                                                                <button>
                                                                    <FontAwesomeIcon icon={faCircleXmark} className='pl-2' size='lg' style={{ color: "#ff0000", }} />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>

                                    <div className="text-right mt-4">
                                        <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded">
                                            <FontAwesomeIcon icon={faPrint} className="mr-2" />
                                            Imprimir
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div >
        </>
    );
};

export default AdminProduct;