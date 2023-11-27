import { useGetAllProductsQuery } from '../../../../graphql/generated/schema';
import { useProductContext } from '@/context/ProductContext';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@nextui-org/react';
import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


interface Product {
    name: string;
    image: string;
    price: number;
    brand?: string | null; // Make it optional
    uuid: string;
    description: string; // Add this lin
}

const ProductsPage = () => {
    const { loading, error, data } = useGetAllProductsQuery();
    const { setProduct } = useProductContext();



    if (loading) {
        return <p>Cargando productos...</p>;
    }

    if (error) {
        return <p>Error al cargar productos: {error.message}</p>;
    }

    const handleProductClick = (product: Product) => {
        setProduct(product);
        console.log('Product clicked:', product);
    };




    return (
        <div className="" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px" }}>
            {data && data.products.map((product) => (
                <>
                    <div key={product.uuid} className="mt-4 mb-4" style={{ width: "250px" }}>
                        <div style={{ backgroundColor: "#F3F5F7", height: "300px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", position: "relative", }}>

                            <div className="flex justify-center items-center self-end m-4 bg-white rounded-full w-8 h-8">
                                <FontAwesomeIcon icon={faHeart} className="text-2xl m-1" />
                            </div>

                            <div style={{ position: "absolute", top: "10px", left: "10px" }}>
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                    <div className="px-3 py-1 text-black font-bold rounded" style={{ backgroundColor: "white" }}>
                                        <span>NEW</span>
                                    </div>
                                    <div className="px-3 py-1 text-white font-bold rounded" style={{ backgroundColor: "#38CB89" }}>
                                        <span>-50%</span>
                                    </div>
                                </div>
                            </div>

                            <div style={{ textAlign: "center", cursor: "pointer" }} onClick={() => handleProductClick(product)}>
                                <Link href={`/store/products/details`}>
                                    <Image src={product.image} alt={'product'} width={200} height={200} />
                                </Link>
                            </div>

                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <Button
                                    style={{ backgroundColor: "black", color: "white", borderRadius: "10px", padding: "10px 45px" }}
                                    onClick={() => {
                                        handleProductClick(product);
                                    }}
                                >
                                    Agregar al Carrito
                                </Button>
                            </div>
                        </div>

                        {/* DETALLES DEL NUEVO PRODUCTO */}
                        <div className="mt-4 bg-gray-200 flex flex-col justify-between" style={{ width: "250px", marginRight: "20px" }}>
                            <div className="self-start">
                                <FontAwesomeIcon icon={faStar} className="text-xl" />
                                <FontAwesomeIcon icon={faStar} className="text-xl" />
                                <FontAwesomeIcon icon={faStar} className="text-xl" />
                                <FontAwesomeIcon icon={faStar} className="text-xl" />
                                <FontAwesomeIcon icon={faStar} className="text-xl" />
                            </div>
                            <div className="-apple-system">
                                <span>{product.name}</span>
                            </div>
                            <div className="-apple-system flex">
                                <span className="mr-3">{`S/.${product.price}`}</span>
                                <span className="line-through text-gray-500">S/.200.00</span>
                            </div>
                        </div>
                    </div>
                </>
            ))}
        </div>
    );
};

export default ProductsPage;
