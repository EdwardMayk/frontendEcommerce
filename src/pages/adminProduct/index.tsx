'use client'
import React, { ChangeEvent, FormEvent, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faXmark, faPrint, faPlus, faCheck, faArrowUpFromBracket, faPenToSquare, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { AdminBar } from '../admin';
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
    const [modalOpen, setModalOpen] = useState(false);
    const { data, loading, error } = useGetAllProductsQuery();
    const [deleteProductMutation] = useDeleteProductMutation();
    const apolloClient = useApolloClient();


    const [productData, setProductData] = useState<ProductData>({
        name: '',
        description: '',
        price: 0,
        stock: 0,
        image: null,
        brand: ''
    });

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setProductData({
            ...productData,
            name: e.target.value
        });
    }

    const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setProductData({
            ...productData,
            description: e.target.value
        });
    }

    const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
        setProductData({
            ...productData,
            price: parseFloat(e.target.value)
        });
    }

    const handleStockChange = (e: ChangeEvent<HTMLInputElement>) => {
        setProductData({
            ...productData,
            stock: parseInt(e.target.value)
        });
    }

    const handleBrandChange = (e: ChangeEvent<HTMLInputElement>) => {
        setProductData({
            ...productData,
            brand: e.target.value
        });
    }

    const [createProductMutation] = useCreateProductMutation();

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setProductData({
            ...productData,
            image: file
        });
    };

    const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            if (!productData.image) {
                throw new Error('Por favor, selecciona una imagen.');
            }

            const imageFormData = new FormData();
            imageFormData.append('file', productData.image);

            const imageUploadResponse = await fetch('http://localhost:3000/files/upload', {
                method: 'POST',
                body: imageFormData
            });

            if (!imageUploadResponse.ok) {
                throw new Error('Error al subir la imagen al backend.');
            }

            const imageUploadData = await imageUploadResponse.json();
            console.log('imageUploadData:', imageUploadData);

            console.log('productData:', productData);

            const productResponse = await createProductMutation({
                variables: {
                    name: productData.name,
                    description: productData.description,
                    price: productData.price,
                    stock: productData.stock,
                    image: imageUploadData.public_url,
                    brand: productData.brand
                }
            });


            if (productResponse.errors) {
                throw new Error('Error al crear el producto.');
            }


            closeModal();
            window.location.reload();

        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleDeleteProduct = async (productUuid: string) => {
        try {
            const deleteProductResponse = await deleteProductMutation({
                variables: {
                    uuid: productUuid,
                },
            });

            if (deleteProductResponse.errors) {
                throw new Error('Error al eliminar el producto.');
            }

            apolloClient.cache.modify({
                fields: {
                    products(existingProducts = [], { readField }) {
                        return existingProducts.filter(
                            (productRef: any) => productUuid !== readField('uuid', productRef)
                        );
                    },
                },
            });


        } catch (error) {
            console.error('Error:', error);
            // Handle the error, e.g., show an error message to the user
        }
    };



    if (loading) {
        return <p>Cargando productos...</p>;
    }

    if (error) {
        return <p>Error al cargar los productos.</p>;
    }

    const products = data?.products;

    const openModal = () => {
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
        // Puedes restablecer los datos del producto aquí si es necesario
        setProductData({
            name: '',
            description: '',
            price: 0,
            stock: 0,
            image: null,
            brand: ''
        });
    };
    // TABLE TEXT
    const bodytext = "text-center py-2 px-4 border-b border-grey-light"
    const headtext = "py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"

    return (
        <>
            <div>
                <AdminBar />
                <div className="flex flex-col min-h-screen bg-gray-100 pt-16 lg:pl-60">
                    <div className="flex-1 flex flex-wrap">
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
                                        {/* Modal */}
                                        {modalOpen && (
                                            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                                                <div className="bg-white p-8 rounded-lg">
                                                    {/* Contenido del Modal */}
                                                    <h2 className="text-gray-500 text-lg font-semibold pb-4">Agregar Producto</h2>
                                                    <form onSubmit={handleFormSubmit}>
                                                        {/* Nombre del Producto */}
                                                        <div className="mb-4">
                                                            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Nombre:</label>
                                                            <input type="text" id="name" name="name" className="w-full p-2 border rounded" value={productData.name} onChange={handleNameChange} />
                                                        </div>

                                                        {/* Descripción del Producto */}
                                                        <div className="mb-4">
                                                            <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Descripción:</label>
                                                            <textarea id="description" name="description" className="w-full p-2 border rounded" value={productData.description} onChange={handleDescriptionChange}></textarea>
                                                        </div>

                                                        {/* Precio del Producto */}
                                                        <div className="mb-4">
                                                            <label htmlFor="price" className="block text-gray-700 font-bold mb-2">Precio:</label>
                                                            <input type="number" id="price" name="price" className="w-full p-2 border rounded" value={productData.price} onChange={handlePriceChange} />
                                                        </div>

                                                        {/* Stock del Producto */}
                                                        <div className="mb-4">
                                                            <label htmlFor="stock" className="block text-gray-700 font-bold mb-2">Stock:</label>
                                                            <input type="number" id="stock" name="stock" className="w-full p-2 border rounded" value={productData.stock} onChange={handleStockChange} />
                                                        </div>

                                                        {/* Imagen del Producto */}
                                                        <div className="mb-4">
                                                            <label htmlFor="image" className="block text-gray-700 font-bold mb-2">Imagen:</label>
                                                            <input type="file" id="image" name="image" accept="image/*" onChange={handleImageChange} className="w-full p-2 border rounded" />
                                                        </div>

                                                        {/* Marca del Producto */}
                                                        <div className="mb-4">
                                                            <label htmlFor="brand" className="block text-gray-700 font-bold mb-2">Marca:</label>
                                                            <input type="text" id="brand" name="brand" className="w-full p-2 border rounded" value={productData.brand} onChange={handleBrandChange} />
                                                        </div>

                                                        {/* Botón para Agregar Producto */}
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
                                                        <Image src={product.image} alt={product.name} className="w-8 h-8" width={50} height={50} />
                                                    </td>
                                                    <td className={`${bodytext}`}>{product.brand}</td>
                                                    <td className={`${bodytext}`}>
                                                        <div className='flex justify-center items-center'>
                                                            <div className='flex justify-center items-center min-w-full'>
                                                                {/* <button>
                                                                    <FontAwesomeIcon icon={faPenToSquare} className='pr-2' size='lg' />
                                                                </button> */}
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

            </div >
        </>
    );
};

export default AdminProduct;