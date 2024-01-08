'use client'
import React, { ChangeEvent, FormEvent, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faXmark, faPrint, faPlus, faSearch, faArrowUpFromBracket, faPenToSquare, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { AdminBar } from '../adminNavBar';
import { useCreateProductMutation, useGetAllProductsQuery, useDeleteProductMutation } from '../../../graphql/generated/schema';
import { gql, useApolloClient } from '@apollo/client';

interface ProductData {
    name: string;
    description: string;
    price: number;
    image: File | null;
    stock: number;
    brand: string;
}

const AdminProduct = () => {

    // PA DESCOMENTAR TODO ESTE CODIGO SOLO DALE LA TECLA "CONTROL + Çç}" CUALQUIER DE LOS ULTIMOS

    // const [modalOpen, setModalOpen] = useState(false);
    // const { data, loading, error } = useGetAllProductsQuery();
    // const [deleteProductMutation] = useDeleteProductMutation();
    // const apolloClient = useApolloClient();

    // const [productData, setProductData] = useState<ProductData>({
    //     name: '',
    //     description: '',
    //     price: 0,
    //     stock: 0,
    //     image: null,
    //     brand: ''
    // });

    // const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     setProductData({
    //         ...productData,
    //         name: e.target.value
    //     });
    // }

    // const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     setProductData({
    //         ...productData,
    //         description: e.target.value
    //     });
    // }

    // const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     setProductData({
    //         ...productData,
    //         price: parseFloat(e.target.value)
    //     });
    // }

    // const handleStockChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     setProductData({
    //         ...productData,
    //         stock: parseInt(e.target.value)
    //     });
    // }

    // const handleBrandChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     setProductData({
    //         ...productData,
    //         brand: e.target.value
    //     });
    // }

    // const [createProductMutation] = useCreateProductMutation();

    // const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     const file = e.target.files?.[0] || null;
    //     setProductData({
    //         ...productData,
    //         image: file
    //     });
    // };

    // const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();

    //     try {
    //         if (!productData.image) {
    //             throw new Error('Por favor, selecciona una imagen.');
    //         }

    //         const imageFormData = new FormData();
    //         imageFormData.append('file', productData.image);

    //         const imageUploadResponse = await fetch('http://localhost:3000/files/upload', {
    //             method: 'POST',
    //             body: imageFormData
    //         });

    //         if (!imageUploadResponse.ok) {
    //             throw new Error('Error al subir la imagen al backend.');
    //         }

    //         const imageUploadData = await imageUploadResponse.json();
    //         console.log('imageUploadData:', imageUploadData);

    //         console.log('productData:', productData);

    //         const productResponse = await createProductMutation({
    //             variables: {
    //                 name: productData.name,
    //                 description: productData.description,
    //                 price: productData.price,
    //                 stock: productData.stock,
    //                 image: imageUploadData.public_url,
    //                 brand: productData.brand
    //             }
    //         });


    //         if (productResponse.errors) {
    //             throw new Error('Error al crear el producto.');
    //         }


    //         closeModal();
    //         window.location.reload();

    //     } catch (error) {
    //         console.error('Error:', error);
    //     }
    // };

    // const handleDeleteProduct = async (productUuid: string) => {
    //     try {
    //         const deleteProductResponse = await deleteProductMutation({
    //             variables: {
    //                 uuid: productUuid,
    //             },
    //         });

    //         if (deleteProductResponse.errors) {
    //             throw new Error('Error al eliminar el producto.');
    //         }

    //         apolloClient.cache.modify({
    //             fields: {
    //                 products(existingProducts = [], { readField }) {
    //                     return existingProducts.filter(
    //                         (productRef: any) => productUuid !== readField('uuid', productRef)
    //                     );
    //                 },
    //             },
    //         });


    //     } catch (error) {
    //         console.error('Error:', error);
    //         // Handle the error, e.g., show an error message to the user
    //     }
    // };

    // if (loading) {
    //     return <p>Cargando productos...</p>;
    // }

    // if (error) {
    //     return <p>Error al cargar los productos.</p>;
    // }

    // const products = data?.products;

    // const openModal = () => {
    //     setModalOpen(true);
    // }

    // const closeModal = () => {
    //     setModalOpen(false);
    //     // Puedes restablecer los datos del producto aquí si es necesario
    //     setProductData({
    //         name: '',
    //         description: '',
    //         price: 0,
    //         stock: 0,
    //         image: null,
    //         brand: ''
    //     });
    // };

    const bodytext = "text-center py-2 px-4 border-b border-grey-light"
    const headtext = "py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"

    const handlePrint = () => {
        window.print();
    };

    const tableProductsRAG = [
        {
            name: "K550 Teclado Redragon YAMA black, Spanish",
            marca: "REDRAGON",
            categoria: "Teclados",
            // switch: "Morado",
            // conexion: "Cableado",
            descripcionCorta: "Switch Outemu Purple MK2, fuerza de actuación 62g, RGB, Anti-Ghosting, Aluminio y Abs reforzado",
            // descripcionLarga: "", TENER EN CUENTA
            // dimensiones: "45.5 x 22.4 x 2.6 cm",
            // peso: "1.5 kg ",
            precioCompra: "S/. 339.00",
            precioVenta: "S/. 369.00"
        },
        {
            name: "Auriculares Redragon HYLAS H260P-RGB PINK",
            marca: "REDRAGON",
            categoria: "Audífonos",
            // switch: "Morado",
            // Audio: "Stereo",
            // conexion: "Cableado",
            descripcionCorta: "Switch Outemu Purple MK2, fuerza de actuación 62g, RGB, Anti-Ghosting, Aluminio y Abs reforzado",
            // descripcionLarga: "", TENER EN CUENTA
            // dimensiones: "45.5 x 22.4 x 2.6 cm",
            // peso: "1.5 kg ",
            precioCompra: "S/. 85.00",
            precioVenta: "S/. 100.00"
        },
        {
            name: "M711W Mouse Redragon COBRA WHITE",
            marca: "REDRAGON",
            categoria: "Audífonos",
            // switch: "Morado",
            // Audio: "Stereo",
            // conexion: "Cableado",
            descripcionCorta: "Switch Outemu Purple MK2, fuerza de actuación 62g, RGB, Anti-Ghosting, Aluminio y Abs reforzado",
            // descripcionLarga: "", TENER EN CUENTA
            // dimensiones: "12 x 6.6 x 4 cm",
            // peso: "105 g",
            precioCompra: "S/. 100.00",
            precioVenta: "S/. 140.00"
        },
        {
            name: "K550 Teclado Redragon YAMA black, Spanish",
            marca: "REDRAGON",
            categoria: "Teclados",
            // switch: "Morado",
            // conexion: "Cableado",
            descripcionCorta: "Switch Outemu Purple MK2, fuerza de actuación 62g, RGB, Anti-Ghosting, Aluminio y Abs reforzado",
            // descripcionLarga: "", TENER EN CUENTA
            // dimensiones: "45.5 x 22.4 x 2.6 cm",
            // peso: "1.5 kg ",
            precioCompra: "S/. 339.00",
            precioVenta: "S/. 369.00"
        },
        {
            name: "Auriculares Redragon HYLAS H260P-RGB PINK",
            marca: "REDRAGON",
            categoria: "Audífonos",
            // switch: "Morado",
            // Audio: "Stereo",
            // conexion: "Cableado",
            descripcionCorta: "Switch Outemu Purple MK2, fuerza de actuación 62g, RGB, Anti-Ghosting, Aluminio y Abs reforzado",
            // descripcionLarga: "", TENER EN CUENTA
            // dimensiones: "45.5 x 22.4 x 2.6 cm",
            // peso: "1.5 kg ",
            precioCompra: "S/. 85.00",
            precioVenta: "S/. 100.00"
        },
        {
            name: "M711W Mouse Redragon COBRA WHITE",
            marca: "REDRAGON",
            categoria: "Audífonos",
            // switch: "Morado",
            // Audio: "Stereo",
            // conexion: "Cableado",
            descripcionCorta: "Switch Outemu Purple MK2, fuerza de actuación 62g, RGB, Anti-Ghosting, Aluminio y Abs reforzado",
            // descripcionLarga: "", TENER EN CUENTA
            // dimensiones: "12 x 6.6 x 4 cm",
            // peso: "105 g",
            precioCompra: "S/. 100.00",
            precioVenta: "S/. 140.00"
        },
        {
            name: "K550 Teclado Redragon YAMA black, Spanish",
            marca: "REDRAGON",
            categoria: "Teclados",
            // switch: "Morado",
            // conexion: "Cableado",
            descripcionCorta: "Switch Outemu Purple MK2, fuerza de actuación 62g, RGB, Anti-Ghosting, Aluminio y Abs reforzado",
            // descripcionLarga: "", TENER EN CUENTA
            // dimensiones: "45.5 x 22.4 x 2.6 cm",
            // peso: "1.5 kg ",
            precioCompra: "S/. 339.00",
            precioVenta: "S/. 369.00"
        },
        {
            name: "Auriculares Redragon HYLAS H260P-RGB PINK",
            marca: "REDRAGON",
            categoria: "Audífonos",
            // switch: "Morado",
            // Audio: "Stereo",
            // conexion: "Cableado",
            descripcionCorta: "Switch Outemu Purple MK2, fuerza de actuación 62g, RGB, Anti-Ghosting, Aluminio y Abs reforzado",
            // descripcionLarga: "", TENER EN CUENTA
            // dimensiones: "45.5 x 22.4 x 2.6 cm",
            // peso: "1.5 kg ",
            precioCompra: "S/. 85.00",
            precioVenta: "S/. 100.00"
        },
        {
            name: "M711W Mouse Redragon COBRA WHITE",
            marca: "REDRAGON",
            categoria: "Audífonos",
            // switch: "Morado",
            // Audio: "Stereo",
            // conexion: "Cableado",
            descripcionCorta: "Switch Outemu Purple MK2, fuerza de actuación 62g, RGB, Anti-Ghosting, Aluminio y Abs reforzado",
            // descripcionLarga: "", TENER EN CUENTA
            // dimensiones: "12 x 6.6 x 4 cm",
            // peso: "105 g",
            precioCompra: "S/. 100.00",
            precioVenta: "S/. 140.00"
        },
        {
            name: "K550 Teclado Redragon YAMA black, Spanish",
            marca: "REDRAGON",
            categoria: "Teclados",
            // switch: "Morado",
            // conexion: "Cableado",
            descripcionCorta: "Switch Outemu Purple MK2, fuerza de actuación 62g, RGB, Anti-Ghosting, Aluminio y Abs reforzado",
            // descripcionLarga: "", TENER EN CUENTA
            // dimensiones: "45.5 x 22.4 x 2.6 cm",
            // peso: "1.5 kg ",
            precioCompra: "S/. 339.00",
            precioVenta: "S/. 369.00"
        },
        {
            name: "Auriculares Redragon HYLAS H260P-RGB PINK",
            marca: "REDRAGON",
            categoria: "Audífonos",
            // switch: "Morado",
            // Audio: "Stereo",
            // conexion: "Cableado",
            descripcionCorta: "Switch Outemu Purple MK2, fuerza de actuación 62g, RGB, Anti-Ghosting, Aluminio y Abs reforzado",
            // descripcionLarga: "", TENER EN CUENTA
            // dimensiones: "45.5 x 22.4 x 2.6 cm",
            // peso: "1.5 kg ",
            precioCompra: "S/. 85.00",
            precioVenta: "S/. 100.00"
        },
        {
            name: "M711W Mouse Redragon COBRA WHITE",
            marca: "REDRAGON",
            categoria: "Audífonos",
            // switch: "Morado",
            // Audio: "Stereo",
            // conexion: "Cableado",
            descripcionCorta: "Switch Outemu Purple MK2, fuerza de actuación 62g, RGB, Anti-Ghosting, Aluminio y Abs reforzado",
            // descripcionLarga: "", TENER EN CUENTA
            // dimensiones: "12 x 6.6 x 4 cm",
            // peso: "105 g",
            precioCompra: "S/. 100.00",
            precioVenta: "S/. 140.00"
        },
        {
            name: "K550 Teclado Redragon YAMA black, Spanish",
            marca: "REDRAGON",
            categoria: "Teclados",
            // switch: "Morado",
            // conexion: "Cableado",
            descripcionCorta: "Switch Outemu Purple MK2, fuerza de actuación 62g, RGB, Anti-Ghosting, Aluminio y Abs reforzado",
            // descripcionLarga: "", TENER EN CUENTA
            // dimensiones: "45.5 x 22.4 x 2.6 cm",
            // peso: "1.5 kg ",
            precioCompra: "S/. 339.00",
            precioVenta: "S/. 369.00"
        },
        {
            name: "Auriculares Redragon HYLAS H260P-RGB PINK",
            marca: "REDRAGON",
            categoria: "Audífonos",
            // switch: "Morado",
            // Audio: "Stereo",
            // conexion: "Cableado",
            descripcionCorta: "Switch Outemu Purple MK2, fuerza de actuación 62g, RGB, Anti-Ghosting, Aluminio y Abs reforzado",
            // descripcionLarga: "", TENER EN CUENTA
            // dimensiones: "45.5 x 22.4 x 2.6 cm",
            // peso: "1.5 kg ",
            precioCompra: "S/. 85.00",
            precioVenta: "S/. 100.00"
        },
        {
            name: "M711W Mouse Redragon COBRA WHITE",
            marca: "REDRAGON",
            categoria: "Audífonos",
            // switch: "Morado",
            // Audio: "Stereo",
            // conexion: "Cableado",
            descripcionCorta: "Switch Outemu Purple MK2, fuerza de actuación 62g, RGB, Anti-Ghosting, Aluminio y Abs reforzado",
            // descripcionLarga: "", TENER EN CUENTA
            // dimensiones: "12 x 6.6 x 4 cm",
            // peso: "105 g",
            precioCompra: "S/. 100.00",
            precioVenta: "S/. 140.00"
        },
    ]

    return (
        <>
            <div>
                <AdminBar />
                <div className="bg-gray-200 flex-1 sm:ml-60 max-w-screen mx-auto px-4 md:px-8 p-8 ">
                    <div className="flex-1 flex flex-wrap">
                        <div className="flex-1 w-full md:w-1/2">
                            <div className="max-w-screen mx-auto">
                                <div className="rounded-lg relative">
                                    <div className="flex items-center justify-between">
                                        <h3 className="flex-grow text-gray-800 text-xl font-bold sm:text-2xl">
                                            Productos en la Tienda
                                        </h3>
                                        <div className="relative">
                                            <div className="absolute top-1 right-4 inline-flex items-center p-2">
                                                <FontAwesomeIcon icon={faSearch} className="text-gray-600" />
                                            </div>
                                            <input
                                                className="w-full h-10 pl-5 pr-24 text-base placeholder-gray-500 border rounded-full focus:shadow-outline bg-white"
                                                type="search"
                                                placeholder="Buscar..."
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-2 shadow border rounded-lg overflow-x-auto">
                                    <table className="w-full table-auto text-sm text-left">
                                        <thead className="bg-red-200 text-gray-600 font-medium border-b">
                                            <tr className="divide-x">
                                                <th className="py-3 px-6">Producto</th>
                                                <th className="py-3 px-6">Marca</th>
                                                <th className="py-3 px-6">Categoría</th>
                                                <th className="py-3 px-6">Descripcion Corta</th>
                                                <th className="py-3 px-6">Precio Venta</th>
                                                <th className="py-3 px-6">Precio Compra</th>
                                                <th className="py-3 px-6 text-center" style={{ position: 'sticky', right: 0, backgroundColor: '#fbd5d5', zIndex: 1 }}>Acciones</th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white text-gray-600 divide-y">
                                            {
                                                tableProductsRAG.map((item, idx) => (
                                                    <tr key={idx} className="divide-x">
                                                        <td className="px-6 py-4 whitespace-nowrap flex items-center gap-x-6">
                                                            <span>{idx + 1}</span>
                                                            {item.name}
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">{item.marca}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap">{item.categoria}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap">{item.descripcionCorta}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap">{item.precioVenta}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap">{item.precioCompra}</td>
                                                        <td className="border px-6 py-4 text-center" style={{ position: 'sticky', right: 0, backgroundColor: '#ffffff', zIndex: 1 }}>
                                                            <div className='flex justify-center items-center min-w-full'>
                                                                <button>
                                                                    <FontAwesomeIcon icon={faPenToSquare} className='pr-2' size='lg' />
                                                                </button>
                                                                <button>
                                                                    <FontAwesomeIcon icon={faCircleXmark} className='pl-1' size='lg' style={{ color: "#ff0000" }} />
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                                <div className="flex flex-col sm:flex-row items-center sm:justify-between mt-2">
                                    <div className="text-left join">
                                        <button className="text-white hover:text-yellow-400 bg-gray-800 join-item btn-active h-11 w-11 duration-300 rounded-md">1</button>
                                        <button className="text-white hover:text-yellow-400 bg-gray-800 join-item h-11 w-11 duration-300">2</button>
                                        <button className="text-white hover:text-yellow-400 bg-gray-800 join-item h-11 w-11 duration-300">3</button>
                                        <button className="text-white hover:text-yellow-400 bg-gray-800 join-item h-11 w-11 duration-300">4</button>
                                        <button className="text-white hover:text-yellow-400 bg-gray-800 join-item h-11 w-11 duration-300 rounded-md">5</button>
                                    </div>
                                    <div className="text-right flex">                                        
                                        <button
                                            className="bg-gray-800 hover:bg-gray-900 text-gray-100 hover:text-yellow-400 duration-300 font-semibold py-2 px-4 rounded-md ml-2"
                                            onClick={handlePrint}
                                        >
                                            <FontAwesomeIcon icon={faPrint} className="mr-2" />
                                            Imprimir
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 
                <div className="flex flex-col min-h-screen bg-gray-100 pt-16 lg:pl-60">
                    <div className="flex-1 flex flex-wrap">
                        <div className="flex-1 p-4 w-full md:w-1/2">
                            <div className="mt-8 bg-white p-4 shadow rounded-lg">
                                <div className="bg-white p-4 rounded-md">
                                    <h2 className="text-gray-500 text-lg font-semibold pb-4">Productos</h2>
                                    <div className="flex justify-between relative min-w-fill">
                                        <input className="w-full h-10 pl-10 pr-4 py-2 text-base placeholder-gray-500 border rounded-full focus:shadow-outline" type="search" placeholder="Buscar..." />
                                        <button onClick={openModal} className="ml-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-4 rounded-full">
                                            <div className='flex justify-center items-center'>
                                                <FontAwesomeIcon icon={faPlus} className="mr-2" />
                                                Agregar
                                            </div>
                                        </button>
                                        {modalOpen && (
                                            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                                                <div className="bg-white p-8 rounded-lg">
                                                    <h2 className="text-gray-500 text-lg font-semibold pb-4">Agregar Producto</h2>
                                                    <form onSubmit={handleFormSubmit}>
                                                        <div className="mb-4">
                                                            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Nombre:</label>
                                                            <input type="text" id="name" name="name" className="w-full p-2 border rounded" value={productData.name} onChange={handleNameChange} />
                                                        </div>
                                                        <div className="mb-4">
                                                            <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Descripción:</label>
                                                            <textarea id="description" name="description" className="w-full p-2 border rounded" value={productData.description} onChange={handleDescriptionChange}></textarea>
                                                        </div>
                                                        <div className="mb-4">
                                                            <label htmlFor="price" className="block text-gray-700 font-bold mb-2">Precio:</label>
                                                            <input type="number" id="price" name="price" className="w-full p-2 border rounded" value={productData.price} onChange={handlePriceChange} />
                                                        </div>
                                                        <div className="mb-4">
                                                            <label htmlFor="stock" className="block text-gray-700 font-bold mb-2">Stock:</label>
                                                            <input type="number" id="stock" name="stock" className="w-full p-2 border rounded" value={productData.stock} onChange={handleStockChange} />
                                                        </div>
                                                        <div className="mb-4">
                                                            <label htmlFor="image" className="block text-gray-700 font-bold mb-2">Imagen:</label>
                                                            <input type="file" id="image" name="image" accept="image/*" onChange={handleImageChange} className="w-full p-2 border rounded" />
                                                        </div>
                                                        <div className="mb-4">
                                                            <label htmlFor="brand" className="block text-gray-700 font-bold mb-2">Marca:</label>
                                                            <input type="text" id="brand" name="brand" className="w-full p-2 border rounded" value={productData.brand} onChange={handleBrandChange} />
                                                        </div>
                                                        <div className="flex justify-end">
                                                            <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-full">
                                                                Agregar Producto
                                                            </button>
                                                        </div>
                                                    </form>

                                                    <button onClick={closeModal} className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-full mt-4">
                                                        Cerrar
                                                    </button>
                                                </div>
                                            </div>
                                        )}

                                    </div>
                                    <div className="my-1" />
                                    <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6" />
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
                                                        <Image src={product.image} alt={product.name} className="w-8 h-8" width={50} height={50} />
                                                    </td>
                                                    <td className={`${bodytext}`}>{product.brand}</td>
                                                    <td className={`${bodytext}`}>
                                                        <div className='flex justify-center items-center'>
                                                            <div className='flex justify-center items-center min-w-full'>
                                                                <button onClick={() => handleDeleteProduct(product.uuid)}>
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
                */}
            </div >
        </>
    );
};

export default AdminProduct;