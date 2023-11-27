import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@nextui-org/react";
import Image from "next/image";

interface ProductCardProps {
    name: string;
    price: number;
    image: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ name, price, image }) => {

    return (
        <div className="mt-4 mb-4" style={{ width: "250px" }}>
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

                <div style={{ textAlign: "center" }}>
                    <Image src={image} width={200} height={200} alt="logo_dashboard2" />
                </div>

                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Button style={{ backgroundColor: "black", color: "white", borderRadius: "10px", padding: "10px 45px" }}>
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
                    <span>{name}</span>
                </div>
                <div className="-apple-system flex">
                    <span className="mr-3">{`S/.${price}`}</span>
                    <span className="line-through text-gray-500">S/.200.00</span>
                </div>
            </div>
        </div>
    );
};