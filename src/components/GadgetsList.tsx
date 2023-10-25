import React, { MouseEvent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";

interface Product {
  name: string;
}

function GadgetsList() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const handleProductClick = (e: MouseEvent, productName: string) => {
    e.preventDefault();
    setSelectedProduct(productName === selectedProduct ? null : productName);
  };

  const products: Product[] = [
    { name: "Computers" },
    { name: "Graficas" },
    { name: "Procesadores" },
    { name: "Perifericos" },
    { name: "Monitores" },
    { name: "IT Servicios" },
  ];

  return (
    <>
      <div className="ml-20 flex-row mx-auto items-center">
        <div className="pb-3 text-sm">
          <span>Home &gt; Electronics &gt; Mini gadgets</span>
        </div>
        <div className="flex" style={{ gap: "20px" }}>
          {products.map((product, index) => (
            <div
              key={index}
              style={{ width: "200px", height: "100px" }}
              className={`w-200 h-100 flex flex-col items-start justify-center rounded-lg p-4 cursor-pointer ${
                selectedProduct === product.name ? "bg-white" : "bg-white"
              }` }
              onClick={(e) => handleProductClick(e, product.name)}
            >
              <FontAwesomeIcon icon={faDesktop} className="text-xm ps-5" />
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
