import Filter from '@/components/Filter'
import Product from '@/components/Products/Product'
import { ProductCard } from '@/components/Products/ProductCard'
import ProductsPage from '@/components/Products/ProductListPage'
import Navbar from '@/components/Navbar/navbar'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React, { useState } from 'react'

const Store: React.FC = () => {

    return (
        <>
            <Navbar />
            <div className="flex">
                <Filter />

                <div className="border p-4 my-4" style={{ display: "flex", flexDirection: "column", marginRight: "200px", }}>
                    <div>
                        <span >Productos</span>
                        <span>Sort by</span>
                    </div>
                    <div className="border" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                        <ProductsPage />
                    </div>

                </div>

            </div >


        </>
    )
}

export default Store
