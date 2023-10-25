import Category from '@/components/Category';
import GadgetsList from '@/components/GadgetsList';
import ProductsStore from '@/components/ProductsStore';
import Navbar from '@/components/navbar';
import SearchBar from '@/components/searchBar';
import React from 'react';

function Products() {
  return (
    <>
    <Navbar />
    <SearchBar />
    <GadgetsList /> 
    <Category />
    <ProductsStore /> 
    </>
  );
}

export default Products;
