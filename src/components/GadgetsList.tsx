import React, { MouseEvent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphones, faLaptop, faVrCardboard, faMicrochip, faTv, faComputer, faChevronRight } from "@fortawesome/free-solid-svg-icons";

interface Product {
  name: string;
  icon: any; // Se usa "any" aquí, pero es recomendable definir un tipo específico para los íconos si es posible.
}

function GadgetsList() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const handleProductClick = (e: MouseEvent, productName: string) => {
    e.preventDefault();
    setSelectedProduct(productName === selectedProduct ? null : productName);
  };

  const products: Product[] = [
    { name: "Computers", icon: faComputer },
    { name: "Graficas", icon: faVrCardboard },
    { name: "Procesadores", icon: faMicrochip },
    { name: "Perifericos", icon: faHeadphones },
    { name: "Monitores", icon: faTv },
    { name: "IT Servicios", icon: faLaptop },
  ];

  return (
    <>
      <div className="ml-20 flex-row mx-auto items-center">
        <div className="pb-3 text-sm">
          <span>Incio <FontAwesomeIcon icon={faChevronRight} /> Mini gadgets</span>
        </div>
        <div className="flex mr-20 " style={{ gap: "20px", overflowX: "auto", maxHeight: "200px"}}>
          {products.map((product, index) => (
            <div
              key={index}
              style={{ width: "200px", height: "100px" }}
              className={`w-200 h-100 flex flex-col items-start justify-center rounded-lg p-4 cursor-pointer ${selectedProduct === product.name ? "bg-white" : "bg-white"
                }`}
              onClick={(e) => handleProductClick(e, product.name)}
            >
              <FontAwesomeIcon icon={product.icon} className="text-xm ps-5" />
              <span className={`mt-2 ps-5 text-xm ${selectedProduct === product.name && "text-blue-600"}`}>
                {product.name}
              </span>
            </div>
          ))}
        </div>



      </div>
    </>
  );
}

export default GadgetsList;
