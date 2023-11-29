'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faXmark, faPrint, faPlus, faCheck, faArrowUpFromBracket, faPenToSquare, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { AdminBar } from '../admin';

export function CreateModal() {

    return (
        <div className={`${true ? 'flex' : 'hidden'} z-[999]`}>
            <div className='min-w-full min-h-screen absolute bg-black opacity-70 z-[49]'>

            </div>
            <div className='flex justify-center items-center absolute min-w-full min-h-screen z-[99]'>
                <div className='p-8 bg-white rounded-lg w-1/2 opacity-100 absolute'>
                    <div className='flex'>
                        <FontAwesomeIcon icon={faArrowUpFromBracket} size='lg' />
                        <h1 className='font-semibold pb-2 px-2'>Crear producto</h1>
                    </div>
                    <form action="submit">
                        <div className='flex flex-col'>
                            <label htmlFor="" className='pb-1 pt-4'>Nombre:</label>
                            <input type="text" className='border border-black rounded-lg h-10 px-2' />

                            <label htmlFor="" className='pb-1 pt-4'>Stock inicial:</label>
                            <input type="number" className='border border-black rounded-lg h-10 px-2' />

                            <label htmlFor="" className='pb-1 pt-4'>Precio:</label>
                            <input type="number" className='border border-black rounded-lg h-10 px-2' />
                        </div>
                    </form>

                    <div className='flex justify-end pt-4 w-full'>
                        <button className="ml-2 bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-full">
                            <div className='flex justify-center items-center'>
                                <FontAwesomeIcon icon={faXmark} className='mr-2' />
                                Cancelar
                            </div>
                        </button>
                        <button className="ml-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-full">
                            <div className='flex justify-center items-center'>
                                <FontAwesomeIcon icon={faCheck} className='mr-2' />
                                Confirmar
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
const adminProduct = () => {
    const [modal, setModal] = useState(false)
    const openModal = () => {
        if (modal) {
            setModal(false)
        } else {
            setModal(true)
        }
    }
    // TABLE TEXT
    const bodytext = "text-center py-2 px-4 border-b border-grey-light"
    const headtext = "py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"

    return (
        <>
            {/* <CreateModal /> */}
            <div>
                {/* <Navbar /> */}

                <AdminBar />

                {/* component */}
                {/* MODAL */}
                <div className={`${modal ? 'flex' : 'hidden'}`}>
                    {/* Background */}
                    <div className='min-w-full min-h-screen absolute bg-black opacity-70 z-[49]'></div>

                    <div className='flex justify-center items-center absolute min-w-full min-h-screen z-[99]'>
                        <div className='p-8 bg-white rounded-lg w-1/2 opacity-100 absolute'>
                            <div className='flex'>
                                <FontAwesomeIcon icon={faArrowUpFromBracket} size='lg' />
                                <h1 className='font-semibold pb-2 px-2'>Crear producto</h1>
                            </div>
                            <form action="submit">
                                <div className='flex flex-col'>
                                    <label htmlFor="" className='pb-1 pt-4'>Nombre:</label>
                                    <input type="text" className='border border-gray-500 rounded-lg h-10 px-2' />

                                    <label htmlFor="" className='pb-1 pt-4'>Stock inicial:</label>
                                    <input type="number" className='border border-gray-500 rounded-lg h-10 px-2' />

                                    <label htmlFor="" className='pb-1 pt-4'>Precio:</label>
                                    <input type="number" className='border border-gray-500 rounded-lg h-10 px-2' />

                                    {/* Upload File */}
                                    <div className="flex items-center justify-center w-full mt-8">
                                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                <svg className="w-8 h-8 mb-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                </svg>
                                                <p className="mb-2 text-sm text-gray-500 "><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                                <p className="text-xs text-gray-500 ">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                            </div>
                                            <input id="dropzone-file" type="file" className="hidden" />
                                        </label>
                                    </div>
                                </div>
                            </form>

                            <div className='flex justify-end pt-4 w-full'>
                                <button onClick={openModal} className="ml-2 bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-full">
                                    <div className='flex justify-center items-center'>
                                        <FontAwesomeIcon icon={faXmark} className='mr-2' />
                                        Cancelar
                                    </div>
                                </button>
                                <button onClick={openModal} className="ml-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-full">
                                    <div className='flex justify-center items-center'>
                                        <FontAwesomeIcon icon={faCheck} className='mr-2' />
                                        Confirmar
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End MODAL */}
                <div className="flex flex-col min-h-screen bg-gray-100 pt-16 lg:pl-60">


                    <div className="flex-1 flex flex-wrap">


                        {/* Área de contenido principal */}
                        <div className="flex-1 p-4 w-full md:w-1/2">

                            {/* CONTENIDO */}
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
                                                <th className={`${headtext}`}>Stock</th>
                                                <th className={`${headtext}`}>Precio</th>
                                                <th className={`${headtext}`}>Acción</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="hover:bg-grey-lighter">
                                                <td className={`${bodytext} md:table-cell hidden`}>1</td>
                                                <td className={`${bodytext}`}>GPU</td>
                                                <td className={`${bodytext}`}>12</td>
                                                <td className={`${bodytext}`}>$1500</td>
                                                <td className={`${bodytext}`}>
                                                    <div className='flex justify-center items-center min-w-full'>
                                                        <button>
                                                            <FontAwesomeIcon icon={faPenToSquare} className='pr-2' size='lg' />
                                                        </button>
                                                        <button>
                                                            <FontAwesomeIcon icon={faCircleXmark} className='pl-2' size='lg' style={{ color: "#ff0000", }} />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>

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

            </div>
        </>
    );
};

export default adminProduct;