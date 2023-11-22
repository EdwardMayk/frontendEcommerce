import Product from '@/components/Product'
import { ProductCard } from '@/components/ProductCard'
import ProductsPage from '@/components/ProductListPage'
import Navbar from '@/components/navbar'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React, { useState } from 'react'

const Shop: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category === selectedCategory ? null : category);
    };

    return (
        <>
            <Navbar />
            <div className="flex">
                <div className="border p-4 my-4 space-y-2" style={{ marginLeft: "200px" }}>
                    <div>
                        <FontAwesomeIcon icon={faFilter} /> <span>Filtros</span>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <span>CATEGORIAS</span>
                        <span
                            onClick={() => handleCategoryClick('Todo los productos')}
                            className={`cursor-pointer ${selectedCategory === 'Todo los productos' ? 'underline' : ''}`}
                        >
                            Todo los productos
                        </span>
                        <span
                            onClick={() => handleCategoryClick('Accesorios')}
                            className={`cursor-pointer ${selectedCategory === 'Accesorios' ? 'underline' : ''}`}
                        >
                            Accesorios
                        </span>
                        <span
                            onClick={() => handleCategoryClick('Alimentos')}
                            className={`cursor-pointer ${selectedCategory === 'Alimentos' ? 'underline' : ''}`}
                        >
                            Alimentos
                        </span>
                    </div>
                    <div className="flex flex-col space-y-2" style={{ marginTop: "10px" }}>
                        <span>PRECIOS</span>
                        <label className="flex items-center">
                            <span className="mr-2 pr-20" style={{ minWidth: "100px" }}>$0 - $100</span>
                            <input type="checkbox" className="h-6 w-6 bg-black border-2 border-black" />
                        </label>
                        <label className="flex items-center">
                            <span className="mr-2 pr-20" style={{ minWidth: "100px" }}>$100 - $200</span>
                            <input type="checkbox" className="h-6 w-6 bg-black border-2 border-black" />
                        </label>
                        <label className="flex items-center">
                            <span className="mr-2 pr-20" style={{ minWidth: "100px" }}>$200 - $300</span>
                            <input type="checkbox" className="h-6 w-6 bg-black border-2 border-black" />
                        </label>
                        <label className="flex items-center">
                            <span className="mr-2 pr-20" style={{ minWidth: "100px" }}>$300 - $400</span>
                            <input type="checkbox" className="h-6 w-6 bg-black border-2 border-black" />
                        </label>
                        <label className="flex items-center">
                            <span className="mr-2 pr-20" style={{ minWidth: "100px" }}>$400 - $500</span>
                            <input type="checkbox" className="h-6 w-6 bg-black border-2 border-black" />
                        </label>
                    </div>
                </div>
                <div className="border p-4 my-4" style={{ display: "flex", flexDirection: "column", marginRight: "200px", }}>
                    <div>
                        <span >Productos</span>
                        <span>Sort by</span>
                    </div>
                    <div className="border" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                        <ProductsPage />
                    </div>

                </div>

            </div>


        </>
    )
}

export default Shop
