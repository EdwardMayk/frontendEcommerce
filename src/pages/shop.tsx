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
            <div className="max-w-md ml-4 border p-4 my-4">
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
                    {/* Agrega más categorías según sea necesario */}
                </div>
                <div className="flex flex-col space-y-2">
                    <span>PRECIOS</span>
                    <label className="flex justify-between items-center">
                        <span>Todo los precios</span>
                        <input type="checkbox" />
                    </label>
                    <label className="flex justify-between items-center">
                        <span>$0 - $100</span>
                        <input type="checkbox" />
                    </label>
                    <label className="flex justify-between items-center">
                        <span>$100 - $200</span>
                        <input type="checkbox" />
                    </label>
                    <label className="flex justify-between items-center">
                        <span>$200 - $300</span>
                        <input type="checkbox" />
                    </label>
                    <label className="flex justify-between items-center">
                        <span>$300 - $400</span>
                        <input type="checkbox" />
                    </label>
                    <label className="flex justify-between items-center">
                        <span>$400 - $500</span>
                        <input type="checkbox" />
                    </label>
                </div>
            </div>
        </>
    )
}

export default Shop
