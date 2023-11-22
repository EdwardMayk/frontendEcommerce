import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import React from 'react';
import { ProductCard } from './ProductCard';

const Product = () => {
    return (
        <>
            <div>
                <div className="font-bold text-2xl mt-4" style={{ marginRight: "200px", marginLeft: "200px" }}>
                    <div className='pb-4 pt-4'>
                        <span>NUEVOS<br></br>PRODUCTOS</span>
                    </div>
                </div>
                <div className="product-container" style={{ overflowX: "auto", whiteSpace: "nowrap", display: "flex", marginLeft: "200px", marginRight: "200px", }}>
                    {/* <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard /> */}
                </div>


            </div>
        </>
    )
};



export default Product;
